import { PencilLine } from "phosphor-react";
import cover from "../assets/cover.jpg";
import { Avatar } from "./Avatar";
import styles from "./Sidebar.module.css";
export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img className={styles.cover} src={cover} />
      <div className={styles.profile}>
        <Avatar src="https://github.com/imatheus-lucas.png" />
        <strong>Matheus Lucas</strong>
        <span>@matheuslucas</span>
      </div>
      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}
