import styles from "./App.module.css";
import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

export type Content = {
  type: "paragraph" | "link";
  content: string;
};
export type IPost = {
  id: number;
  author: {
    name: string;
    avatarUrl: string;
    role: string;
  };
  content: Content[];
  publishedAt: Date;
};

const posts: IPost[] = [
  {
    id: 1,
    author: {
      name: "Diego Fernandes",
      avatarUrl:
        "https://avatars2.githubusercontent.com/u/2254731?s=460&u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&v=4",
      role: "Developer",
    },
    content: [
      { type: "paragraph", content: "Fala galera" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NWL Return, evento da NWL, que acontece todos os meses.",
      },
    ],
    publishedAt: new Date("2022-05-11T13:00:00"),
  },
];

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => (
            <Post key={post.id} data={post} />
          ))}
        </main>
      </div>
    </div>
  );
}
