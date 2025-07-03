import React, { useEffect, useState } from "react";
import { GetServerSideProps } from "next";
import Link from 'next/link';
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
interface Tag {
  id: number;
  name: string;
}

interface Exam {
  id: number;
  name: string;
}

interface ConceptType {
  id: number;
  name: string;
  // Add other concept properties as needed
}

interface QuestionType {
  id: number | string;
  question_text_latex: string;
  text_solution_latex: string;
  video_solution_url: string;
  category: string;
  iframeText?: string;
  tags?: Tag[];
  examinations?: Exam[];
  concept?: ConceptType | number | null;
  similarQuestions?: SimilarQuestion[];
}

interface SimilarQuestion {
  id: number;
  question_text: string;
  category: string;
}

interface QuestionPageProps {
  id: string | number;
  question: QuestionType | null;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query;
  try {
    // Fetch question data with related data
    const questionFetch = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/question/${id}/`);
    const questionData = questionFetch.data;
    
    // Process the question data to ensure consistent structure
    const question: QuestionType = {
      ...questionData,
      id: questionData.id || id, // Ensure we have the ID
      tags: questionData.tags || [],
      examinations: questionData.examinations || [],
      concept: questionData.concept || null,
    };
    
    // Fetch all questions to find similar ones
    const allQuestionsFetch = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/question/add`);
    

    
    // Get current question's tags, exams, and concept for matching
    const currentTags = question.tags?.map((t: any) => t.id) || [];
    const currentExams = question.examinations?.map((e: any) => e.id) || [];
    const currentConcept = typeof question.concept === 'object' ? question.concept?.id : question.concept;
    
    const similarQuestions = allQuestionsFetch.data
      .filter((q: any) => {
        // Skip the current question
        if (q.id === question.id) return false;
        
        // Get comparison data for the question
        const qTags = q.tags?.map((t: any) => t.id) || [];
        const qExams = q.examinations?.map((e: any) => e.id) || [];
        const qConcept = q.concept?.id;
        
        // console.log(`Checking question ${q.id}:`, { qTags, qExams, qConcept });
        
        // Check for matches in tags, exams, or concept
        const hasMatchingTag = qTags.some((tagId: number) => currentTags.includes(tagId));
        const hasMatchingExam = qExams.some((examId: number) => currentExams.includes(examId));
        const hasMatchingConcept = currentConcept && qConcept === currentConcept;
        
        const isSimilar = hasMatchingTag || hasMatchingExam || hasMatchingConcept;
        // console.log(`Question ${q.id} is similar:`, isSimilar, { hasMatchingTag, hasMatchingExam, hasMatchingConcept });
        
        return isSimilar;
      })
      .slice(0, 5) // Limit to 5 similar questions
      .map((q: any) => ({
        id: q.id,
        question_text: q.question_text || 'Untitled Question',
        category: q.category || 'General',
        concept: q.concept || null
      }));

    return { 
      props: { 
        id, 
        question: {
          ...question,
          similarQuestions: similarQuestions || []
        } 
      } 
    };
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

const TagItem: React.FC<{ tag: Tag }> = ({ tag }) => (
  <Link href={`/tags/${tag.id}`}>
    <span className={styles.tag} style={{ cursor: 'pointer' }}>
      {tag.name}
    </span>
  </Link>
);

const ExamItem: React.FC<{ exam: Exam }> = ({ exam }) => (
  <Link href={`/examinations/${exam.id}`}>
    <div className={styles.exam} style={{ cursor: 'pointer' }}>
      {exam.name}
    </div>
  </Link>
);

const SimilarQuestionItem: React.FC<{ question: SimilarQuestion }> = ({ question }) => (
  <div 
    className={styles.similarQuestion}
    onClick={() => window.location.href = `/question/${question.id}`}
  >
    <div className={styles.similarQuestionText}>
      {question.question_text.length > 100 
        ? `${question.question_text.substring(0, 100)}...` 
        : question.question_text}
    </div>
    <div className={styles.similarQuestionCategory}>{question.category}</div>
  </div>
);

const QuestionPage: React.FC<QuestionPageProps> = ({
  id,
  question,
}) => {
  const router = useRouter();
  const [iframeContent, setIframeContent] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);
  
  // Process metadata (tags and exams) for display
  const metadata = [
    ...(question?.tags?.map(tag => ({
      ...tag,
      type: 'tag' as const
    })) || []),
    ...(question?.examinations?.map(exam => ({
      ...exam,
      type: 'exam' as const
    })) || [])
  ];
  
  // Get concept data if available
  const concept = question?.concept ? ({
    id: typeof question.concept === 'number' ? question.concept : question.concept.id,
    name: typeof question.concept === 'number' ? 'Loading...' : (question.concept.name || 'Unnamed Concept')
  }) : null;

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
            {/* Graph/Iframe Section */}
            {iframeContent && (
              <div className={styles.section}>
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
              </div>
            )}

            {/* Metadata Section - Tags & Exams */}
            <div className={styles.section}>
              <h3 className={styles.sectionTitle}>Tags & Exams</h3>
              <div className={styles.metadataContainer}>
                {metadata.length > 0 ? (
                  <div className={styles.metadataGrid}>
                    {metadata.map((item) => (
                      <Link 
                        key={`${item.type}-${item.id}`} 
                        href={`/${item.type === 'tag' ? 'tags' : 'examinations'}/${item.id}`}
                        passHref
                      >
                        <div 
                          className={`${styles.metadataItem} ${styles[item.type]}`}
                          style={{ cursor: 'pointer' }}
                        >
                          <span className={styles.metadataLabel}>
                            {item.type === 'tag' ? '#' : '📝'}
                          </span>
                          {item.name}
                        </div>
                      </Link>
                    ))}
                  </div>
                ) : (
                  <div className={styles.noItems}>No metadata available</div>
                )}
              </div>
            </div>

            {/* Concept Section */}
            {concept && (
              <div className={styles.section}>
                <h3 className={styles.sectionTitle}>Concept</h3>
                <div className={styles.conceptContainer}>
                  <div className={styles.conceptItem}>
                    {concept.name}
                  </div>
                </div>
              </div>
            )}

            {/* Similar Questions Section */}
            <div className={styles.section}>
              <h3 className={styles.sectionTitle}>Similar Questions</h3>
              <div className={styles.similarQuestionsContainer}>
                {question?.similarQuestions?.length ? (
                  question.similarQuestions.map((sq) => (
                    <SimilarQuestionItem key={sq.id} question={sq} />
                  ))
                ) : (
                  <div className={styles.noItems}>No similar questions found</div>
                )}
              </div>
            </div>
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