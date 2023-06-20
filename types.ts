export interface CommentProps {
  commenter: string,
  email: string,
  content: string,
  published_at: string,
}
export interface CommentParam {
  id: string | string[] | undefined
}

export interface PostCommentProps {
  commenter: string | null | undefined;
  email: string | null | undefined;
  content: string;
  status: boolean;
  question: string | string[] | undefined;

}
export interface Tag {
  id: number;
  name: string;

}
export interface Question {
  id: Number;
  question_text: string;
  video_solution_url: string;
  text_solution: string;
  text_solution_latex: string;
  created_at: string;
  updated_at: string;
  tags: Tag[];
  category: string;
  concept: Number;
  author: Number;
}
export interface QuestionPageProps {
  id: string;
}
export type ConceptProps = {
  concept: {
    id: number;
    title: string;
    content: string;
  };
};


export interface QuestionData {
  question_text: string;
  video_solution_url: string;
  text_solution: string;
  text_solution_latex: string;
  tags: Item[];
  category: string;
  concept: number | null;
}

export interface ConceptData {
  id: number;
  title: string;
  description: string;
}
export interface Item {
  name: string;
}
export interface VideoData {
  concept: number | null;
  title: string;
  youtube_url: string;
  thumbnail_url: string;
}


export type ContentProp = {
  id: number;
  question_text: string;
  video_solution_url: string;
};