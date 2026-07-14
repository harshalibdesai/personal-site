import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import Nav from "@/components/Nav";
import { siteMeta } from "@/content/site-content";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteMeta.url),
  title: {
    default: `${siteMeta.name} — ${siteMeta.tagline}`,
    template: `%s — ${siteMeta.name}`,
  },
  description: siteMeta.description,
  openGraph: {
    title: `${siteMeta.name} — ${siteMeta.tagline}`,
    description: siteMeta.description,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: `${siteMeta.name} — ${siteMeta.tagline}`,
    description: siteMeta.description,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
      <body>
        <div className="shell">
          <Nav />
          <main className="main">{children}</main>
        </div>
      </body>
    </html>
  );
}
