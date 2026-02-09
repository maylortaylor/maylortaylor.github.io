import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Matt Maylor Taylor | Full Stack Web Developer",
  description:
    "Full Stack Web Developer portfolio. C#, JavaScript, React, Next.js, and more.",
  authors: [{ name: "Matt Maylor Taylor" }],
  keywords: [
    "developer",
    "full stack",
    "web developer",
    "react",
    "next.js",
    "c#",
  ],
  openGraph: {
    title: "Matt Maylor Taylor | Full Stack Web Developer",
    description:
      "Full Stack Web Developer portfolio. C#, JavaScript, React, Next.js, and more.",
    type: "website",
    url: "https://maylortaylor.github.io/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={montserrat.variable}>
      <body className="bg-white text-[#263d42] font-montserrat antialiased">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
