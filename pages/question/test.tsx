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

interface Tag {
  name: string;
}

interface Examination {
  name: string;
}

export default function QuestionViewer() {
  const [question, setQuestion] = useState<Question | null>(null);
  const [mode, setMode] = useState<'view' | 'test'>('view');
  const [testQuestion, setTestQuestion] = useState({
    question_text_latex: '',
    text_solution_latex: '',
    video_solution_url: '',
    category: 'G',
    concept: null,
    tags: [] as Tag[],
    examinations: [] as Examination[]
  });
  const [previewMode, setPreviewMode] = useState(false);

  useEffect(() => {
    if (mode === 'view') {
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
    }
  }, [mode]);

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

  const handleSubmitTest = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://127.0.0.1:8000/question/add/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...testQuestion,
          author: 1, // Default author ID
          question_text: testQuestion.question_text_latex, // We're using the same field for both
          text_solution: testQuestion.text_solution_latex,
        }),
      });
      
      if (response.ok) {
        const data = await response.json();
        alert(`Question uploaded successfully! ID: ${data.id}`);
        // Optionally switch to view mode and load the new question
        setQuestion(data);
        setMode('view');
      } else {
        const error = await response.json();
        alert(`Error uploading question: ${JSON.stringify(error)}`);
      }
    } catch (error) {
      console.error('Error uploading question:', error);
      alert(`Error uploading question: ${error.message}`);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTestQuestion(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const fillWithSample = () => {
    setTestQuestion({
      question_text_latex: `Consider a uniform magnetic field $$\\vec{B} = B_0 \\hat{z}$$ where $B_0 = 0.5\\text{ T}$.

A charged particle with charge $q = 2.0 \\times 10^{-6}\\text{ C}$ and mass $m = 1.0 \\times 10^{-3}\\text{ kg}$ enters this field with velocity $\\vec{v} = v_0\\hat{x}$ where $v_0 = 5.0\\text{ m/s}$.

<img src="https://cdn1.byjus.com/wp-content/uploads/2022/08/Magnetic-Field-And-Magnetic-Field-Lines-2.png" alt="Magnetic field diagram" width="400" />

a) Calculate the radius of the circular path that the particle follows.

b) Determine the period of the circular motion.

c) If the magnetic field strength is doubled, how does the radius of the circular path change?`,
      text_solution_latex: `a) The radius of the circular path can be calculated using:

$$r = \\frac{mv}{qB}$$

Substituting the given values:
$$r = \\frac{(1.0 \\times 10^{-3}\\text{ kg}) \\times (5.0\\text{ m/s})}{(2.0 \\times 10^{-6}\\text{ C}) \\times (0.5\\text{ T})} = \\frac{5.0 \\times 10^{-3}}{1.0 \\times 10^{-6}} = 5.0 \\times 10^{-3}\\text{ m} = 5.0\\text{ mm}$$

b) The period of circular motion is given by:

$$T = \\frac{2\\pi m}{qB}$$

<img src="https://cdn1.byjus.com/wp-content/uploads/2022/08/Magnetic-Field-And-Magnetic-Field-Lines-2.png" alt="Circular motion diagram" width="400" />

Substituting the values:
$$T = \\frac{2\\pi \\times (1.0 \\times 10^{-3}\\text{ kg})}{(2.0 \\times 10^{-6}\\text{ C}) \\times (0.5\\text{ T})} = \\frac{2\\pi \\times 10^{-3}}{10^{-6}} = 2\\pi \\times 10^{-3} \\approx 6.28 \\times 10^{-3}\\text{ s} = 6.28\\text{ ms}$$

c) If the magnetic field strength is doubled to $B = 1.0\\text{ T}$, the radius becomes:

$$r' = \\frac{mv}{qB'} = \\frac{mv}{q(2B)} = \\frac{mv}{2qB} = \\frac{r}{2}$$

Therefore, the radius would be halved to $r' = 2.5\\text{ mm}$.`,
      video_solution_url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      category: 'G',
      concept: null,
      tags: [{ name: 'Electromagnetism' }, { name: 'Circular Motion' }],
      examinations: [{ name: 'Physics 101' }]
    });
  };

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <div className="flex justify-between mb-6">
        <h1 className="text-2xl font-bold">Question Testing Tool</h1>
        <div className="space-x-2">
          <button 
            onClick={() => setMode('view')} 
            className={`px-4 py-2 rounded ${mode === 'view' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
          >
            View Mode
          </button>
          <button 
            onClick={() => setMode('test')} 
            className={`px-4 py-2 rounded ${mode === 'test' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
          >
            Test Mode
          </button>
        </div>
      </div>
      
      {mode === 'view' && question ? (
        <div>
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
      ) : mode === 'test' ? (
        <div>
          <div className="mb-4 flex justify-between">
            <button 
              onClick={fillWithSample} 
              className="bg-green-500 text-white px-4 py-2 rounded"
            >
              Fill with Sample Question
            </button>
            <button 
              onClick={() => setPreviewMode(!previewMode)} 
              className={`px-4 py-2 rounded ${previewMode ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
            >
              {previewMode ? 'Edit Mode' : 'Preview Mode'}
            </button>
          </div>
          
          {previewMode ? (
            <div>
              <h2 className="text-xl font-bold mb-2">Question Preview:</h2>
              <div className="mb-6 bg-white rounded-lg p-4 shadow">
                {renderLatexContent(testQuestion.question_text_latex)}
              </div>
              
              <h2 className="text-xl font-bold mb-2">Solution Preview:</h2>
              <div className="mb-6 bg-white rounded-lg p-4 shadow">
                {renderLatexContent(testQuestion.text_solution_latex)}
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmitTest} className="space-y-4">
              <div>
                <label className="block mb-1 font-semibold">Question Text (LaTeX):</label>
                <textarea
                  name="question_text_latex"
                  value={testQuestion.question_text_latex}
                  onChange={handleInputChange}
                  rows={10}
                  className="w-full p-2 border rounded"
                  placeholder="Enter LaTeX question content here..."
                ></textarea>
              </div>
              
              <div>
                <label className="block mb-1 font-semibold">Solution Text (LaTeX):</label>
                <textarea
                  name="text_solution_latex"
                  value={testQuestion.text_solution_latex}
                  onChange={handleInputChange}
                  rows={10}
                  className="w-full p-2 border rounded"
                  placeholder="Enter LaTeX solution content here..."
                ></textarea>
              </div>
              
              <div>
                <label className="block mb-1 font-semibold">Video Solution URL:</label>
                <input
                  type="text"
                  name="video_solution_url"
                  value={testQuestion.video_solution_url}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                  placeholder="YouTube embed URL"
                />
              </div>
              
              <div>
                <label className="block mb-1 font-semibold">Category:</label>
                <select
                  name="category"
                  value={testQuestion.category}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                >
                  <option value="G">General User</option>
                  <option value="P">Premium User</option>
                </select>
              </div>
              
              <button 
                type="submit" 
                className="bg-blue-600 text-white px-6 py-2 rounded font-semibold"
              >
                Submit Test Question
              </button>
            </form>
          )}
        </div>
      ) : (
        <div className="p-4">Loading...</div>
      )}
    </div>
  );
}