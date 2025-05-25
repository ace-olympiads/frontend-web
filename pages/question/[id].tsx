import React, { useEffect, useState } from "react";
import { GetServerSideProps } from "next";
import dynamic from 'next/dynamic';
import YoutubeEmbed from "../../components/YoutubeEmbed";
import styles from "../../styles/QuestionId.module.css";
import axios from 'axios';
import { extractEmbedIdFromYouTubeLink } from "../../utils/youtubeId";
import { useRouter } from "next/router";
import BackButton from "../../components/BackButton";
import "katex/dist/katex.min.css";

// Dynamically import components that use browser APIs with SSR disabled
const InlineMath = dynamic(
  () => import('react-katex').then((mod) => mod.InlineMath),
  { ssr: false }
);

const BlockMath = dynamic(
  () => import('react-katex').then((mod) => mod.BlockMath),
  { ssr: false }
);

// Define Question Type interface if not already defined in your types.ts
interface QuestionType {
  id: number;
  question_text_latex: string;
  text_solution_latex: string;
  video_solution_url: string;
  category: string;
  iframeText?: string;
}

interface QuestionPageProps {
  id: string | number;
  question: QuestionType | null;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query;
  try {
    const questionFetch = await axios.get(`http://127.0.0.1:8000/question/${id}`);
    const question: QuestionType = questionFetch.data;
    return { props: { id, question } };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      props: {
        id,
        question: null
      }
    };
  }
};

const QuestionPage: React.FC<QuestionPageProps> = ({
  id,
  question,
}) => {
  const router = useRouter();
  const [iframeContent, setIframeContent] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (question?.iframeText) {
      const updatedIframeContent = updateIframeContent(question.iframeText, true);
      setIframeContent(updatedIframeContent);
    }
  }, [question?.iframeText]);

  // Enhanced function to render LaTeX content
  const renderLatexContent = (content: string) => {
    if (!content) return null;

    // Improved regex to split input cleanly
    const segments = content.split(
      /(\$\$[\s\S]*?\$\$|\$[\s\S]*?\$|<img[^>]+>)/g
    );

    return (
      <div className="space-y-4">
        <div className="my-2 flex flex-wrap gap-x-1">
          {segments.map((segment: string, index: number) => {
            if (!segment.trim()) return null;

            try {
              // Block math
              if (segment.startsWith("$$") && segment.endsWith("$$")) {
                const latex = segment.slice(2, -2).trim();
                return (
                  <div key={index} className="w-full my-2">
                    <BlockMath math={latex} errorColor="#cc0000" />
                  </div>
                );
              }

              // Inline math (even multiline) with space wrapping
              if (segment.startsWith("$") && segment.endsWith("$")) {
                const latex = segment.slice(1, -1).replace(/\n/g, " ").trim();
                return (
                  <span key={index} className="inline">
                    <InlineMath math={latex} errorColor="#cc0000" />
                  </span>
                );
              }

              // Image
              if (segment.startsWith("<img")) {
                return (
                  <span
                    key={index}
                    className="inline"
                    dangerouslySetInnerHTML={{ __html: segment }}
                  />
                );
              }

              // Plain text — flatten newlines to spaces
              const flattenedText = segment.replace(/\n+/g, " ");
              return <span key={index}>{flattenedText}</span>;
            } catch (err) {
              console.error("Render error in LaTeX segment:", err);
              return (
                <span key={index} className="latex-error">
                  [LaTeX Error]
                </span>
              );
            }
          })}
        </div>
      </div>
    );
  };
  
  function updateIframeContent(iframeHtml: string, removeControls: boolean = false) {
    let updatedHtml = iframeHtml;
    
    // Remove existing width and height attributes
    updatedHtml = updatedHtml.replace(/width="[^"]*"/, '');
    updatedHtml = updatedHtml.replace(/height="[^"]*"/, '');
    
    // Remove controls if specified
    if (removeControls) {
      updatedHtml = updatedHtml.replace(/scrolling="no"/, 'scrolling="no" style="border: none;"');
      updatedHtml = updatedHtml.replace(/ctl=true/, 'ctl=false');
    }
    
    return updatedHtml;
  }

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  if (!question) {
    return <div className="p-4 text-center">Loading question or question not found...</div>;
  }

  return (
    <div className={styles["main-container"]}>
      <div className={styles["content-parent"]}>
        <div className={styles["content-boy"]}>
          <div className={styles["content"]}>
            <div className={styles["back-btn-here"]}>
              <BackButton />
            </div>
            <div className={styles["question-text-container"]}>
              <div className={styles["question-tags"]}>
                <h1>{question.category === 'G' ? 'GEOMETRY' : question.category}</h1>
              </div>
              <div className={styles["question-heading"]}>
                Question {question.id}
              </div>
              <div className={styles["question-text"]}>
                {renderLatexContent(question.question_text_latex || "")}
              </div>
            </div>
            <div className={styles["question-videos"]}>
              {question.video_solution_url && (
                <YoutubeEmbed
                  embedId={extractEmbedIdFromYouTubeLink(question.video_solution_url || "") || ""}
                />
              )}
              <div className="solution-box">
                <h2 className="text-xl font-bold mb-2">Solution:</h2>
                <div className="bg-white rounded-lg p-4 shadow">
                  {renderLatexContent(question.text_solution_latex || "")}
                </div>
              </div>
            </div>
          </div>

          <div className={styles["content-side"]}>
            {iframeContent && (
              <div className={styles["graph-container"]}>
                <div
                  className={styles["graph-grid"]}
                  dangerouslySetInnerHTML={{ __html: iframeContent }}
                />
                <div className={styles["image-grid"]}>
                  <button onClick={toggleModal} className={styles["modal-toggle"]}>
                    {isModalOpen ? "" : "Full Screen"}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {isClient && isModalOpen && iframeContent && (
        <div className={styles["modal-overlay"]} onClick={toggleModal}>
          <div className={styles["modal-content"]} onClick={(e) => e.stopPropagation()}>
            <div 
              className={styles["modal-iframe-container"]}
              dangerouslySetInnerHTML={{ __html: iframeContent }} 
            />
            <button onClick={toggleModal} className={styles["modal-toggle"]}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuestionPage;