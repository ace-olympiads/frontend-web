import React, { useState, ChangeEvent, FormEvent, useEffect } from "react";
import styles from "../styles/Upload.module.css";
import axios from "axios";
import "katex/dist/katex.min.css";
import { BlockMath } from "react-katex";
import { Item, ConceptData, QuestionData, VideoData, User } from "../types";

const UploadForm: React.FC<{ user: User }> = ({ user }) => {
  const [uploadType, setUploadType] = useState("");
  const [concepts, setConcepts] = useState<ConceptData[]>([]);
  const [tags, setTags] = useState<Item[]>([]);
  const [selectedTags, setSelectedTags] = useState<Item[]>([]);
  const [newTagInputVisible, setNewTagInputVisible] = useState(false);
  const [newTagInputValue, setNewTagInputValue] = useState("");
  const [examinations, setExaminations] = useState<Item[]>([]);
  const [selectedExaminations, setSelectedExaminations] = useState<Item[]>([]);
  const [newExaminationInputVisible, setNewExaminationInputVisible] = useState(false);
  const [newExaminationInputValue, setNewExaminationInputValue] = useState("");
  const [questionData, setQuestionData] = useState<QuestionData>({
    question_text: "",
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

  const fetchTags = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}question/tags/`
      );
      setTags(response.data);
    } catch (error) {
      console.error(error);
    }
  };
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

  const fetchExaminations = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}question/examinations/`
      );
      setExaminations(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchConcepts();
    fetchTags();
    fetchExaminations();
  }, []);
  useEffect(() => {
    setQuestionData((prevData) => ({
      ...prevData,
      tags: selectedTags,
      examinations: selectedExaminations,
    }));
    console.log(selectedExaminations)
    console.log(selectedTags)
  }, [selectedTags, selectedExaminations]);
  const fetchConcepts = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}concepts/`
      );
      setConcepts(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (uploadType === "question") {
      try {
        await axios.post(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}question/add/`,
          {
            ...questionData,
            author: user?.id,
          }
        );
        setQuestionData({
          question_text: "",
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
      } catch (error) {
        console.error(error);
      }
    } else if (uploadType === "concept") {
      try {
        await axios.post(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}concepts/`,
          conceptData
        );
        setConceptData({
          id: -1,
          title: "",
          description: "",
        });
        fetchConcepts();
      } catch (error) {
        console.error(error);
      }
    } else if (uploadType === "video") {
      try {
        const response = await axios.post(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}concepts/${videoData.concept}/videos/`,
          { ...videoData, author: user?.id }
        );
        setVideoData({
          concept: null,
          title: "",
          youtube_url: "",
          thumbnail_url: "",
        });
      } catch (error) {
        console.error(error);
      }
    }
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    if (uploadType === "question") {
      setQuestionData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    } else if (uploadType === "concept") {
      setConceptData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    } else if (uploadType === "video") {
      setVideoData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  return (
    <div className={styles.container}>
      <h1>Upload Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Select upload type:
            <select
              value={uploadType}
              onChange={(e) => setUploadType(e.target.value)}
              className={styles.select}
            >
              <option value="">Select</option>
              <option value="question">Question</option>
              <option value="concept">Concept</option>
              <option value="video">Video for Concept</option>
            </select>
          </label>
        </div>
        {uploadType === "question" && (
          <div>
            <h2>Question Form</h2>
            <div>
              <label>
                Question Text:
                <input
                  type="text"
                  name="question_text"
                  value={questionData.question_text}
                  onChange={handleChange}
                  className={styles.input}
                />
              </label>
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
              <label>
                Text Solution:
                <textarea
                  name="text_solution"
                  value={questionData.text_solution}
                  onChange={handleChange}
                  className={styles.textarea}
                ></textarea>
              </label>
            </div>
            <div>
              <label>
                Text Solution (Latex):
                <textarea
                  name="text_solution_latex"
                  value={questionData.text_solution_latex}
                  onChange={handleChange}
                  className={styles.textarea}
                ></textarea>
              </label>
              <div className={styles.latex}>
                <BlockMath math={questionData.text_solution_latex} />
              </div>
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
                  <option value="" selected>
                    Select Category
                  </option>
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
                      selectedExaminations.some((e) => e.name === examination.name)
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
                    onChange={(e) => setNewExaminationInputValue(e.target.value)}
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
          </div>
        )}
        {uploadType === "concept" && (
          <div>
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
          </div>
        )}
        {uploadType === "video" && (
          <div>
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
                  <option value="" selected>
                    Select Concept
                  </option>
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
          </div>
        )}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UploadForm;
