"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Nav.module.css";
import { siteMeta } from "@/content/site-content";

const NAV_ITEMS = [
  { href: "/", label: "about", index: "01" },
  { href: "/writing", label: "writing", index: "02" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <header className={styles.header}>
      <div className={styles.row}>
        <Link href="/" className={styles.wordmark}>
          {siteMeta.name} <span>/</span> {siteMeta.tagline}
        </Link>
        <nav className={styles.links} aria-label="Primary">
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`${styles.link} ${isActive ? styles.linkActive : ""}`}
                aria-current={isActive ? "page" : undefined}
              >
                <span className={styles.index}>{item.index}</span>
                {item.label}
                <span className={styles.underline} aria-hidden="true" />
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
