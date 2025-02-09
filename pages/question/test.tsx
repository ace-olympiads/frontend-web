import { useEffect, useState } from 'react';
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';

interface Question {
  id: number;
  tags: string[];
  examinations: string[];
  question_text: string;
  question_text_latex: string;
  video_solution_url: string;
  text_solution: string;
  text_solution_latex: string;
  created_at: string;
  updated_at: string;
  category: string;
  concept: string | null;
  author: number;
}

export default function QuestionViewer() {
  const [question, setQuestion] = useState<Question | null>(null);

  useEffect(() => {
    const fetchQuestion = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/question/5');
        const data = await response.json();
        setQuestion(data);
      } catch (error) {
        console.error('Error fetching question:', error);
      }
    };

    fetchQuestion();
  }, []);

  const renderLatexContent = (content: string) => {
    if (!content) return null;

    // Decode HTML entities
    const textarea = document.createElement('textarea');
    textarea.innerHTML = content;
    const decodedContent = textarea.value;

    // Split content into segments that are either LaTeX, images, or regular text
    const segments = decodedContent.split(/(\$\$[^$]+\$\$|\$[^$]+\$|<img[^>]+>)/g);

    return (
      <div className="space-y-4">
        {segments.map((segment, index) => {
          if (segment.startsWith('$$') && segment.endsWith('$$')) {
            // Handle block LaTeX
            const latex = segment.slice(2, -2).trim();
            return (
              <div key={index} className="my-4">
                <BlockMath math={latex} errorColor="#cc0000" />
              </div>
            );
          } else if (segment.startsWith('$') && segment.endsWith('$')) {
            // Handle inline LaTeX
            const inlineLatex = segment.slice(1, -1).trim();
            return <InlineMath key={index} math={inlineLatex} errorColor="#cc0000" />;
          } else if (segment.startsWith('<img')) {
            // Handle images
            return (
              <div key={index} className="my-4">
                <div dangerouslySetInnerHTML={{ __html: segment }} />
              </div>
            );
          } else {
            // Handle regular text, preserving paragraphs
            return segment.split(/\n\n+/).map((paragraph, pIndex) => (
              paragraph.trim() && (
                <p key={`${index}-${pIndex}`} 
                   className="my-2"
                   dangerouslySetInnerHTML={{
                     __html: paragraph.replace(/\n/g, '<br>')
                   }} 
                />
              )
            ));
          }
        })}
      </div>
    );
  };

  if (!question) {
    return <div className="p-4">Loading...</div>;
  }

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Question {question.id}</h1>
      
      <div className="mb-6 bg-white rounded-lg p-4 shadow">
        {renderLatexContent(question.question_text_latex)}
      </div>

      <h2 className="text-xl font-bold mb-2">Solution:</h2>
      <div className="mb-6 bg-white rounded-lg p-4 shadow">
        {renderLatexContent(question.text_solution_latex)}
      </div>

      {question.video_solution_url && (
        <div className="mt-4">
          <h2 className="text-xl font-bold mb-2">Video Solution:</h2>
          <iframe
            width="560"
            height="315"
            src={question.video_solution_url}
            title="Video Solution"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      )}
    </div>
  );
}