import { useEffect, useState } from 'react';
import { InlineMath, BlockMath } from 'react-katex';

interface Question {
  id: number;
  question_text_latex: string;
  text_solution_latex: string;
  video_solution_url: string;
}

export default function QuestionViewer() {
  const [question, setQuestion] = useState<Question | null>(null);
  const [useSample, setUseSample] = useState(false);
  
  // Sample question with shorter content
  const sampleQuestion: Question = {
    id: 0,
    question_text_latex: `Find the derivative of $f(x) = x^2\\sin(x).$

<img src="https://i.ytimg.com/vi/G5wlKltW7pM/maxresdefault.jpg" alt="Calculus diagram" width="300" />`,
    text_solution_latex: `Using the product rule: $\\frac{d}{dx}[f(x)g(x)] = f'(x)g(x) + f(x)g'(x)$

$$\\frac{d}{dx}[x^2\\sin(x)] = \\frac{d}{dx}[x^2]\\sin(x) + x^2\\frac{d}{dx}[\\sin(x)]$$

$$= 2x\\sin(x) + x^2\\cos(x)$$

<img src="https://i.ytimg.com/vi/G5wlKltW7pM/maxresdefault.jpg" alt="Derivative graph" width="300" />`,
    video_solution_url: 'https://www.youtube.com/embed/N2PpRnFqnqY'
  };

  useEffect(() => {
    if (!useSample) {
      const fetchQuestion = async () => {
        try {
          const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/question/10`);
          const data = await response.json();
          setQuestion(data);
        } catch (error) {
          console.error('Error fetching question:', error);
        }
      };

      fetchQuestion();
    } else {
      setQuestion(sampleQuestion);
    }
  }, [useSample]);

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

  if (!question && !useSample) {
    return <div className="p-4">Loading...</div>;
  }

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <div className="flex justify-between mb-6">
        <h1 className="text-2xl font-bold">Question Viewer</h1>
        <button 
          onClick={() => setUseSample(!useSample)} 
          className={`px-4 py-2 rounded ${useSample ? 'bg-gray-500' : 'bg-blue-600'} text-white`}
        >
          {useSample ? 'Load from API' : 'View Sample Question'}
        </button>
      </div>
      
      <h2 className="text-xl font-bold mb-4">
        {useSample ? 'Sample Question' : `Question ${question?.id}`}
      </h2>
      
      <div className="mb-6 bg-white rounded-lg p-4 shadow">
        {renderLatexContent(question?.question_text_latex || '')}
      </div>

      <h2 className="text-xl font-bold mb-2">Solution:</h2>
      <div className="mb-6 bg-white rounded-lg p-4 shadow">
        {renderLatexContent(question?.text_solution_latex || '')}
      </div>

      {question?.video_solution_url && (
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