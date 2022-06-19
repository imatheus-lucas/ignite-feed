import { format, formatDistanceToNow } from "date-fns";
import ptBr from "date-fns/locale/pt-BR";
import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";
import { IPost } from "../App";
import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";
type IPostProps = {
  data: IPost;
};

export function Post({ data }: IPostProps) {
  const { author, content, publishedAt } = data;

  const [comments, setComments] = useState(["Bom dia!"]);
  const [newCommentText, setNewCommentText] = useState("");

  const publishedDateFormatted = format(
    publishedAt,
    "d 'de' LLLL 'ás' HH:mm'h'",
    {
      locale: ptBr,
    }
  );
  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBr,
    addSuffix: true,
  });

  function handleCreateNewComment(event: FormEvent) {
    event.preventDefault();

    if (newCommentText.trim().length === 0) {
      return;
    }

    setComments((prev) => [...prev, newCommentText]);
    setNewCommentText("");
  }
  function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity("");
    setNewCommentText(event.target.value);
  }
  function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity("Esse campo é obrigatório");
  }
  function deleteComment(comment: string) {
    setComments((prev) => prev.filter((c) => c !== comment));
  }

  const isNewCommentEmpty = newCommentText.trim().length === 0;
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.author_info}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time
          title={publishedDateFormatted}
          dateTime={publishedAt.toISOString()}
        >
          {publishedDateRelativeToNow}
        </time>
      </header>
      <div className={styles.content}>
        {content.map((item) => {
          switch (item.type) {
            case "paragraph":
              return <p key={item.content}>{item.content}</p>;
            case "link":
              return (
                <a key={item.content} href={item.content}>
                  {item.content}
                </a>
              );
            default:
              return <p key={item.content}>{item.content}</p>;
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.comment_form}>
        <strong>Deixe seu feedback</strong>
        <textarea
          value={newCommentText}
          onChange={handleNewCommentChange}
          name="comment"
          placeholder="Deixe um comentário"
          onInvalid={handleNewCommentInvalid}
          required
        />
        <footer>
          <button type="submit" disabled={isNewCommentEmpty}>
            Publicar
          </button>
        </footer>
      </form>
      <div className={styles.comment_list}>
        {comments.map((comment) => (
          <Comment
            onDeleteComment={deleteComment}
            content={comment}
            key={comment}
          />
        ))}
      </div>
    </article>
  );
}
