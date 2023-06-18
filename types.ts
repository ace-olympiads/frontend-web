export interface CommentProps {
  commenter: string,
  email: string,
  content: string,
  published_at: string,
}
export interface CommentParam {
  id: number
}

export interface PostCommentProps {
  commenter: string | null | undefined;
  email: string | null | undefined;
  content: string;
  status: boolean;
  question: number;

}