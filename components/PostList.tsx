import Link from "next/link";
import styles from "./PostList.module.css";

export type Post = {
  title: string;
  date: string;
  summary: string;
  href: string;
};

/**
 * Renders a list of posts once the newsletter feed is connected.
 * Drop items into `writingContent.posts` in content/site-content.ts —
 * no changes needed here or in app/writing/page.tsx.
 */
export default function PostList({ posts }: { posts: Post[] }) {
  return (
    <ol className={styles.list}>
      {posts.map((post) => {
        const isExternal = /^https?:\/\//.test(post.href);
        return (
          <li className={styles.item} key={post.href}>
            <Link
              href={post.href}
              className={styles.itemLink}
              target={isExternal ? "_blank" : undefined}
              rel={isExternal ? "noopener noreferrer" : undefined}
            >
              <time className={styles.date} dateTime={post.date}>
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </time>
              <h2 className={styles.itemTitle}>{post.title}</h2>
              <p className={styles.summary}>{post.summary}</p>
            </Link>
          </li>
        );
      })}
    </ol>
  );
}
