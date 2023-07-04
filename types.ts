export interface CommentProps {
  commenter: User,
  email: string,
  content: string,
  published_at: string,
}
export interface CommentParam {
  id: string | string[] | undefined;
  user: User;
}

export interface PostCommentProps {
  commenter: number;
  email: string | null | undefined;
  content: string;
  status: boolean;
  question: string | string[] | undefined;

}
export interface Tag {
  id: number;
  name: string;

}
export interface QuestionType {
  id: Number;
  question_text: string;
  video_solution_url: string;
  text_solution?: string;
  text_solution_latex?: string;
  created_at?: string;
  updated_at?: string;
  tags?: Tag[];
  examinations?: Exam[];
  category?: string;
  concept?: Number;
  author?: Number;
}
export interface QuestionPageProps {
  id: string;
  question: QuestionType;
  concepts: ConceptType[];
  user: User
}
export type ConceptProps = {
  concept: ConceptType
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
export interface User {
  id: number;
  role: 'A' | 'M' | 'P' | 'G';
  email: string;
  username: string;
  contact_no?: string;
  image?: string | null;
  is_superuser?: boolean;
  created_at?: string;
  updated_at?: string;
  type?: string;
  provider?: string;
  provider_account_id?: string;
  expires_at?: number | null;
  id_token?: string;
  session_state?: string;
  last_viewed_questions?: [];
  last_viewed_concept_videos?: [];
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

export interface ConceptType {
  id: number;
  title: string;
  description: string;
  videos: Video[]
}
export interface Video {
  id: number;
  concept: number;
  title: string;
  youtube_url: string;
  thumbnail_url: string;
  author: number;
}
export interface QuestionProps {
  question: QuestionType
}

export interface Exam {
  id?: number
  name: string
}

export interface SpecificExam {
  examination: Exam
  questions: QuestionType[]
}