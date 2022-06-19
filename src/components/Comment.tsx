import { ThumbsUp, Trash } from "phosphor-react";
import { useState } from "react";
import { Avatar } from "./Avatar";
import styles from "./Comment.module.css";

type ICommentProps = {
  content: string;
  onDeleteComment: (comment: string) => void;
};
export function Comment({ content, onDeleteComment }: ICommentProps) {
  const [likeCount, setLikeCount] = useState(0);
  function handleDeleteComment() {
    onDeleteComment(content);
  }

  function handleLike() {
    setLikeCount((prev) => prev + 1);
  }
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/imatheus-lucas.png" />
      <div className={styles.comment_box}>
        <div className={styles.comment_content}>
          <header>
            <div className={styles.author_and_time}>
              <strong>Matheus Lucas</strong>
              <time title="11 de maio de 2022" dateTime="2022-05-11 13:00">
                Cerca de 1h atrás
              </time>
            </div>
            <button
              onClick={handleDeleteComment}
              title="Apagar comentário"
              className={styles.delete}
            >
              <Trash size={20} />
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button onClick={handleLike}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
