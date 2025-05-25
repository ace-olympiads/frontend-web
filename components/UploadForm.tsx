import React, { useState, ChangeEvent, FormEvent, useEffect } from "react";
import "react-quill/dist/quill.snow.css";
import styles from "../styles/Upload.module.css";
import axios from "axios";
import "katex/dist/katex.min.css";
import { InlineMath, BlockMath } from "react-katex";
import { Item, ConceptData, QuestionData, VideoData, User } from "../types";


// Enhanced LaTeX Input Field component with better preview and styling
const LatexInputField: React.FC<{
  value: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  label: string;
  name: string;
  rows?: number;
}> = ({ value, onChange, label, name, rows = 5 }) => {
  const [rawInput, setRawInput] = useState(value || "");
  const [previewMode, setPreviewMode] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setRawInput(value || "");
  }, [value]);

  // Function to convert URLs to image tags
  const processImageUrls = (text: string): string => {
    // This regex matches URLs starting with https://
    const urlRegex = /(https?:\/\/[^\s]+(\.(jpg|jpeg|png|gif|svg)))/gi;
    
    // Replace URLs with image tags
    return text.replace(urlRegex, (url) => {
      return `<img src="${url}" width="300" />`;
    });
  };

  const handleInputChange = (e: { target: { value: string; }; }) => {
    let newValue = e.target.value;
    
    // Process the input to convert URLs to image tags
    newValue = processImageUrls(newValue);
    
    setRawInput(newValue);
    setError("");
    
    try {
      // Basic validation - this won't catch all LaTeX errors but will help
      if (countOccurrences(newValue, "$") % 2 !== 0) {
        setError("Warning: Unmatched $ symbols");
      }
      
      const syntheticEvent = {
        target: { name, value: newValue } as EventTarget & HTMLTextAreaElement,
      } as ChangeEvent<HTMLTextAreaElement>;
      onChange(syntheticEvent);
    } catch (err) {
      setError("Error in LaTeX syntax");
      console.error("LaTeX error:", err);
    }
  };

  // Helper function to count occurrences
  const countOccurrences = (str: string, char: string) => {
    return (str.match(new RegExp("\\" + char, "g")) || []).length;
  };

  // Render LaTeX content similar to QuestionViewer's renderLatexContent function
  const renderLatexContent = (content: string) => {
    if (!content) return null;
  
    // Improved regex to split input cleanly
    const segments = content.split(/(\$\$[\s\S]*?\$\$|\$[\s\S]*?\$|<img[^>]+>)/g);
  
    return (
      <div className="space-y-4">
        <p className="my-2 flex flex-wrap gap-x-1">
          {segments.map((segment: string, index: React.Key) => {
            if (!segment.trim()) return null;
  
            try {
              // Block math
              if (segment.startsWith('$$') && segment.endsWith('$$')) {
                const latex = segment.slice(2, -2).trim();
                return (
                  <div key={index} className="w-full my-2">
                    <BlockMath math={latex} errorColor="#cc0000" />
                  </div>
                );
              }
  
              // Inline math (even multiline) with space wrapping
              if (segment.startsWith('$') && segment.endsWith('$')) {
                const latex = segment.slice(1, -1).replace(/\n/g, ' ').trim();
                return (
                  <span key={index} className="inline">
                    <InlineMath math={latex} errorColor="#cc0000" />
                  </span>
                );
              }
  
              // Image
              if (segment.startsWith('<img')) {
                return (
                  <span key={index} className="inline" dangerouslySetInnerHTML={{ __html: segment }} />
                );
              }
  
              // Plain text — flatten newlines to spaces
              const flattenedText = segment.replace(/\n+/g, ' ');
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
        </p>
      </div>
    );
  };
  
  

  return (
    <div className={styles.latexInputContainer || "latex-input-container"}>
      <label>{label}</label>
      <div className={styles.latexEditor || "latex-editor"}>
        {previewMode ? (
          <div className={styles.latexPreview || "latex-preview"}>
            <div className={styles.previewContent || "preview-content"}>
              {renderLatexContent(rawInput)}
            </div>
            <button
              type="button"
              className={styles.previewToggle || "preview-toggle"}
              onClick={() => setPreviewMode(false)}
            >
              Edit
            </button>
          </div>
        ) : (
          <div className={styles.latexEditMode || "latex-edit-mode"}>
            <textarea
              name={name}
              value={rawInput}
              onChange={handleInputChange}
              rows={rows}
              className={styles.latexTextarea || "latex-textarea"}
              placeholder="Enter LaTeX here..."
            />
            {error && <div className={styles.latexError || "latex-error"}>{error}</div>}
            <div className={styles.latexControls || "latex-controls"}>
              <button
                type="button"
                className={styles.previewToggle || "preview-toggle"}
                onClick={() => setPreviewMode(true)}
              >
                Preview
              </button>
              <button
                type="button"
                className={styles.helpButton || "help-button"}
                onClick={() => window.open("https://en.wikibooks.org/wiki/LaTeX/Mathematics", "_blank")}
              >
                LaTeX Help
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// Component to display the rendered LaTeX question in preview mode
const LatexQuestionView: React.FC<{ questionText: string; solutionText?: string }> = ({ questionText, solutionText }) => {
  return (
    <div className={styles.questionPreview || "question-preview"}>
      <h3>Question Preview</h3>
      <div className={styles.questionContent || "question-content"}>
        <BlockMath math={questionText} />
      </div>
      
      {solutionText && (
        <>
          <h3>Solution Preview</h3>
          <div className={styles.solutionContent || "solution-content"}>
            <BlockMath math={solutionText} />
          </div>
        </>
      )}
    </div>
  );
};

const modules = {
  toolbar: [
    [{ header: [1, 2, 3, false] }],
    ["bold", "italic", "underline"],
    ["link", "image", "formula"],
  ],
};

const formats = [
  "header",
  "bold",
  "italic",
  "underline",
  "link",
  "image",
  "formula",
];

const UploadForm: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  
  useEffect(() => {
    // Get user from localStorage when component mounts
    const userData = localStorage.getItem('user');
    if (userData) {
      try {
        setUser(JSON.parse(userData));
      } catch (error) {
        console.error('Error parsing user data from localStorage:', error);
      }
    }
  }, []);
  const [uploadType, setUploadType] = useState("question");
  const [concepts, setConcepts] = useState<ConceptData[]>([]);
  const [tags, setTags] = useState<Item[]>([]);
  const [selectedTags, setSelectedTags] = useState<Item[]>([]);
  const [newTagInputVisible, setNewTagInputVisible] = useState(false);
  const [newTagInputValue, setNewTagInputValue] = useState("");
  const [examinations, setExaminations] = useState<Item[]>([]);
  const [selectedExaminations, setSelectedExaminations] = useState<Item[]>([]);
  const [newExaminationInputVisible, setNewExaminationInputVisible] = useState(false);
  const [newExaminationInputValue, setNewExaminationInputValue] = useState("");
  const [previewMode, setPreviewMode] = useState(false);
  
  const [questionData, setQuestionData] = useState<QuestionData>({
    question_text: "",
    question_text_latex: "",
    video_solution_url: "",
    text_solution: "",
    text_solution_latex: "",
    tags: selectedTags,
    examinations: selectedExaminations,
    category: "",
    concept: null,
  });
  
  const [conceptData, setConceptData] = useState<ConceptData>({
    id: -1,
    title: "",
    description: "",
  });
  
  const [videoData, setVideoData] = useState<VideoData>({
    concept: null,
    title: "",
    youtube_url: "",
    thumbnail_url: "",
  });

  // Fetch data on component mount
  useEffect(() => {
    fetchConcepts();
    fetchTags();
    fetchExaminations();
  }, []);

  // Update questionData when tags or examinations change
  useEffect(() => {
    setQuestionData((prevData) => ({
      ...prevData,
      tags: selectedTags,
      examinations: selectedExaminations,
    }));
  }, [selectedTags, selectedExaminations]);

  // Tag management functions
  const selectTag = (tag: Item) => {
    setSelectedTags((prevTags) => {
      const isSelected = prevTags.some((t) => t.name === tag.name);
      if (isSelected) {
        return prevTags.filter((t) => t.name !== tag.name);
      } else {
        return [tag, ...prevTags];
      }
    });
  };

  const toggleNewTagInput = () => {
    setNewTagInputVisible(!newTagInputVisible);
    setNewTagInputValue("");
  };

  const addNewTag = () => {
    const trimmedValue = newTagInputValue.trim();
    if (trimmedValue !== "" && !tags.some((tag) => tag.name === trimmedValue)) {
      const newTag = { name: trimmedValue };
      setTags([...tags, newTag]);
      selectTag(newTag);
    }
    toggleNewTagInput();
  };

  // Examination management functions
  const selectExamination = (examination: Item) => {
    setSelectedExaminations((prevExaminations) => {
      const isSelected = prevExaminations.some((t) => t.name === examination.name);
      if (isSelected) {
        return prevExaminations.filter((e) => e.name !== examination.name);
      } else {
        return [examination, ...prevExaminations];
      }
    });
  };

  const toggleNewExaminationInput = () => {
    setNewExaminationInputVisible(!newExaminationInputVisible);
    setNewExaminationInputValue("");
  };

  const addNewExamination = () => {
    const trimmedValue = newExaminationInputValue.trim();
    if (trimmedValue !== "" && !examinations.some((examination) => examination.name === trimmedValue)) {
      const newExamination = { name: trimmedValue };
      setExaminations([...examinations, newExamination]);
      selectExamination(newExamination);
    }
    toggleNewExaminationInput();
  };

  // API calls
  const fetchConcepts = async () => {
    try {
      const response = await axios.get(`${process.env.BACKEND_URL}concepts/`);
      setConcepts(response.data);
    } catch (error) {
      console.error("Error fetching concepts:", error);
    }
  };

  const fetchTags = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/question/tags/`);
      // Ensure response.data is an array before setting it
      setTags(Array.isArray(response.data) ? response.data : []);
    } catch (error) {
      console.error("Error fetching tags:", error);
      // Set tags to empty array on error
      setTags([]);
    }
  };

  const fetchExaminations = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/question/examinations/`);
      // Ensure response.data is an array before setting it
      setExaminations(Array.isArray(response.data) ? response.data : []);
    } catch (error) {
      console.error("Error fetching examinations:", error);
      // Set examinations to empty array on error
      setExaminations([]);
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (uploadType === "question") {
      try {
        await axios.post(`${process.env.BACKEND_URL || "http://localhost:8000/"}question/add/`, {
          ...questionData,
          question_text: "h",
          email: user?.email || "anonymous@example.com",
          author:1,
          question_text_latex: questionData.question_text, // Store the raw LaTeX in the latex field
          text_solution_latex: questionData.text_solution, // Store the raw LaTeX solution
          tags: selectedTags.map((tag) => ({ name: tag.name })),
          examinations: selectedExaminations.map((exam) => ({ name: exam.name })),
        });
        
        // Reset form after successful submission
        setQuestionData({
          question_text: "",
          question_text_latex: "",
          video_solution_url: "",
          tags: [],
          examinations: [],
          text_solution: "",
          text_solution_latex: "",
          category: "",
          concept: null,
        });
        setSelectedTags([]);
        setSelectedExaminations([]);
        alert("Question submitted successfully!");
      } catch (error) {
        console.error("Error submitting question:", error);
        alert("Error submitting question. Please check the console for details.");
      }
    } else if (uploadType === "concept") {
      try {
        await axios.post(`${process.env.BACKEND_URL}concepts/`, conceptData);
        setConceptData({ id: -1, title: "", description: "" });
        fetchConcepts();
        alert("Concept submitted successfully!");
      } catch (error) {
        console.error("Error submitting concept:", error);
        alert("Error submitting concept. Please check the console for details.");
      }
    } else if (uploadType === "video") {
      try {
        await axios.post(
          `${process.env.BACKEND_URL}concepts/${videoData.concept}/videos/`,
          { ...videoData, author: user?.id || 1 }
        );
        setVideoData({ concept: null, title: "", youtube_url: "", thumbnail_url: "" });
        alert("Video submitted successfully!");
      } catch (error) {
        console.error("Error submitting video:", error);
        alert("Error submitting video. Please check the console for details.");
      }
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    if (uploadType === "question") {
      setQuestionData((prevData) => ({ ...prevData, [name]: value }));
    } else if (uploadType === "concept") {
      setConceptData((prevData) => ({ ...prevData, [name]: value }));
    } else if (uploadType === "video") {
      setVideoData((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  return (
    <div className={styles.container}>
      <h1>Upload Form</h1>
      
      <div className={styles.uploadTypeSelector}>
        <label>Select upload type:</label>
        <select
          value={uploadType}
          onChange={(e) => setUploadType(e.target.value)}
          className={styles.select}
        >
          <option value="question">Question</option>
          <option value="concept">Concept</option>
          <option value="video">Video for Concept</option>
        </select>
      </div>
      
      {uploadType === "question" && (
        <div>
          {previewMode ? (
            <LatexQuestionView 
              questionText={questionData.question_text} 
              solutionText={questionData.text_solution}
            />
          ) : (
            <form onSubmit={handleSubmit}>
              <h2>Question Form</h2>
              
              <div>
                <LatexInputField
                  label="Question Text (LaTeX):"
                  name="question_text"
                  value={questionData.question_text}
                  onChange={handleChange}
                  rows={6}
                />
              </div>
              
              <div>
                <label>
                  Video Solution URL:
                  <input
                    type="text"
                    name="video_solution_url"
                    value={questionData.video_solution_url}
                    onChange={handleChange}
                    className={styles.input}
                  />
                </label>
              </div>
              
              <div>
                <LatexInputField
                  label="Text Solution (LaTeX):"
                  name="text_solution"
                  value={questionData.text_solution}
                  onChange={handleChange}
                  rows={8}
                />
              </div>
              
              <div>
                <label>
                  Category:
                  <select
                    name="category"
                    value={questionData.category}
                    onChange={handleChange}
                    className={styles.select}
                  >
                    <option value="">Select Category</option>
                    <option value="G">General User</option>
                    <option value="P">Premium User</option>
                  </select>
                </label>
              </div>
              
              <div>
                <label>
                  Concept:
                  <select
                    name="concept"
                    value={questionData.concept || ""}
                    onChange={handleChange}
                    className={styles.select}
                  >
                    <option value="">Select Concept</option>
                    {concepts.map((concept) => (
                      <option key={concept.id} value={concept.id}>
                        {concept.title}
                      </option>
                    ))}
                  </select>
                </label>
              </div>
              
              <div>
                <label>Tags</label>
                <div className={styles["item-element"]}>
                  {tags?.map((tag) => (
                    <div
                      className={`${styles["item-individual-element"]} ${
                        selectedTags.some((t) => t.name === tag.name)
                          ? styles["selected-item"]
                          : ""
                      }`}
                      key={tag.name}
                      onClick={() => selectTag(tag)}
                    >
                      {tag.name}
                    </div>
                  ))}
                  {newTagInputVisible ? (
                    <input
                      type="text"
                      value={newTagInputValue}
                      onChange={(e) => setNewTagInputValue(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          addNewTag();
                        }
                      }}
                      className={styles["new-item-input"]}
                      autoFocus
                    />
                  ) : (
                    <div
                      className={styles["add-new-item-button"]}
                      onClick={toggleNewTagInput}
                    >
                      +
                    </div>
                  )}
                </div>
              </div>
              
              <div>
                <label>Examinations</label>
                <div className={styles["item-element"]}>
                  {examinations?.map((examination) => (
                    <div
                      className={`${styles["item-individual-element"]} ${
                        selectedExaminations.some(
                          (e) => e.name === examination.name
                        )
                          ? styles["selected-item"]
                          : ""
                      }`}
                      key={examination.name}
                      onClick={() => selectExamination(examination)}
                    >
                      {examination.name}
                    </div>
                  ))}
                  {newExaminationInputVisible ? (
                    <input
                      type="text"
                      value={newExaminationInputValue}
                      onChange={(e) =>
                        setNewExaminationInputValue(e.target.value)
                      }
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          addNewExamination();
                        }
                      }}
                      className={styles["new-item-input"]}
                      autoFocus
                    />
                  ) : (
                    <div
                      className={styles["add-new-item-button"]}
                      onClick={toggleNewExaminationInput}
                    >
                      +
                    </div>
                  )}
                </div>
              </div>
              
              <button type="submit" className={styles.submitButton}>Submit</button>
            </form>
          )}
        </div>
      )}
      
      {uploadType === "concept" && (
        <form onSubmit={handleSubmit}>
          <h2>Concept Form</h2>
          <div>
            <label>
              Title:
              <input
                type="text"
                name="title"
                value={conceptData.title}
                onChange={handleChange}
                className={styles.input}
              />
            </label>
          </div>
          <div>
            <label>
              Description:
              <textarea
                name="description"
                value={conceptData.description}
                onChange={handleChange}
                className={styles.textarea}
              ></textarea>
            </label>
          </div>
          <button type="submit" className={styles.submitButton}>Submit</button>
        </form>
      )}
      
      {uploadType === "video" && (
        <form onSubmit={handleSubmit}>
          <h2>Video Form</h2>
          <div>
            <label>
              Concept:
              <select
                name="concept"
                value={videoData.concept ?? ""}
                onChange={handleChange}
                className={styles.select}
              >
                <option value="">Select Concept</option>
                {concepts.map((concept) => (
                  <option key={concept.id} value={concept.id}>
                    {concept.title}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <div>
            <label>
              Title:
              <input
                type="text"
                name="title"
                value={videoData.title}
                onChange={handleChange}
                className={styles.input}
              />
            </label>
          </div>
          <div>
            <label>
              YouTube URL:
              <input
                type="text"
                name="youtube_url"
                value={videoData.youtube_url}
                onChange={handleChange}
                className={styles.input}
              />
            </label>
          </div>
          <div>
            <label>
              Thumbnail URL:
              <input
                type="text"
                name="thumbnail_url"
                value={videoData.thumbnail_url}
                onChange={handleChange}
                className={styles.input}
              />
            </label>
          </div>
          <button type="submit" className={styles.submitButton}>Submit</button>
        </form>
      )}
    </div>
  );
};

export default UploadForm;