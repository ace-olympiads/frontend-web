import React, {
  useState,
  ChangeEvent,
  FormEvent,
  useEffect,
  KeyboardEventHandler,
} from "react";
import styles from "../styles/Upload.module.css";
import { useSession } from "next-auth/react";
import axios from "axios";
import "katex/dist/katex.min.css";
import { BlockMath } from "react-katex";
import { Item, ConceptData, QuestionData, VideoData, User } from "../types";

const UploadForm: React.FC<{ user: User }> = ({ user }) => {
  const session = useSession();
  const [uploadType, setUploadType] = useState("");
  const [concepts, setConcepts] = useState<ConceptData[]>([]);
  const [inputValue, setInputValue] = useState<string>("");
  const [items, setItems] = useState<Item[]>([]);
  const [questionData, setQuestionData] = useState<QuestionData>({
    question_text: "",
    video_solution_url: "",
    text_solution: "",
    text_solution_latex: "",
    tags: items,
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

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleInputEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      console.log("object");
      const newItem: Item = { name: inputValue.trim() };

      if (!items.some((item) => item.name === newItem.name)) {
        setItems((prevItems) => [...prevItems, newItem]);

        setInputValue("");
      }
    }
  };

  const removeItem = (index: number) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };
  useEffect(() => {
    fetchConcepts();
  }, []);
  useEffect(() => {
    console.log(questionData);
  }, [questionData]);
  useEffect(() => {
    setQuestionData((prevData) => ({
      ...prevData,
      tags: items,
    }));
  }, [items]);
  const fetchConcepts = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/concepts/`
      );
      console.log(response.data);
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
          text_solution: "",
          text_solution_latex: "",
          category: "",
          concept: null,
        });
        setItems([]);
      } catch (error) {
        console.error(error);
      }
    } else if (uploadType === "concept") {
      try {
        await axios.post(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/concepts/`,
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
      console.log(videoData);
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
                  value={questionData.concept || 1}
                  onChange={handleChange}
                  className={styles.select}
                >
                  <option key={0} value="" selected>
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
              <label>Tags</label>
              <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                onKeyDown={(e) => handleInputEnter(e)}
              />
              <div className={styles["tag-element"]}>
                {items?.map((item, index) => (
                  <div className={styles["tag-individual-element"]} key={index}>
                    {item.name}
                    <button onClick={() => removeItem(index)}>x</button>
                  </div>
                ))}
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
