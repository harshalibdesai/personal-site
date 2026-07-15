import type { Metadata } from "next";
import styles from "./page.module.css";
import { aboutContent } from "@/content/site-content";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <article className="fade-in">
      <p className="eyebrow">{aboutContent.eyebrow}</p>
      <h1 className={styles.heading}>{aboutContent.heading}</h1>

      <div className={styles.lede}>
        {aboutContent.paragraphs.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>

      {aboutContent.facts.length > 0 && (
        <dl className={styles.facts}>
          {aboutContent.facts.map((fact) => (
            <div className={styles.fact} key={fact.label}>
              <dt className={styles.factLabel}>{fact.label}</dt>
              <dd className={styles.factValue}>{fact.value}</dd>
            </div>
          ))}
        </dl>
      )}
    </article>
  );
}
