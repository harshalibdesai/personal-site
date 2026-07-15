import type { Metadata } from "next";
import styles from "./page.module.css";
import PostList from "@/components/PostList";
import { writingContent } from "@/content/site-content";

export const metadata: Metadata = {
  title: "Writing",
};

export default function WritingPage() {
  const hasPosts = writingContent.posts.length > 0;

  return (
    <article className="fade-in">
      <p className="eyebrow">{writingContent.eyebrow}</p>
      <h1 className={styles.heading}>{writingContent.heading}</h1>
      <p className={styles.intro}>{writingContent.intro}</p>

      {hasPosts ? (
        <PostList posts={writingContent.posts} />
      ) : (
        <div className={styles.panel}>
          <span className={styles.panelLabel}>
            <span className={styles.dot} aria-hidden="true" />
            Coming soon
          </span>
          <h2 className={styles.panelHeading}>
            {writingContent.comingSoon.heading}
          </h2>
          <p className={styles.panelBody}>{writingContent.comingSoon.body}</p>
        </div>
      )}
    </article>
  );
}
