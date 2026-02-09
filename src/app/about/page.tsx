import TimelineItem from "@/components/about/TimelineItem";
import Image from "next/image";
import { Metadata } from "next";
import aboutData from "@/content/about_matt_taylor.json";

export const metadata: Metadata = {
  title: aboutData.pageTitle,
  description: aboutData.pageDescription,
};

interface ContentItem {
  type: "paragraph" | "image" | "iframe";
  text?: string;
  links?: Array<{ text: string; url: string }>;
  src?: string;
  alt?: string;
  width?: number;
  height?: number;
}

interface TimelineItemData {
  year: string;
  title: string;
  isLeft: boolean;
  content: ContentItem[];
}

function renderLinks(text: string, links?: Array<{ text: string; url: string }>) {
  if (!links || links.length === 0) return text;

  let result = text;
  links.forEach((link) => {
    const linkRegex = new RegExp(`\\b${link.text}\\b`);
    result = result.replace(
      linkRegex,
      `<a href="${link.url}" target="_blank" rel="noopener noreferrer" class="text-[#80ced7] hover:text-[#5eb5bf]">${link.text}</a>`
    );
  });

  return result;
}

function renderContent(item: ContentItem) {
  switch (item.type) {
    case "paragraph":
      return (
        <p key={Math.random()} className="mb-4">
          <span
            dangerouslySetInnerHTML={{
              __html: renderLinks(item.text || "", item.links),
            }}
          />
        </p>
      );
    case "image":
      return (
        <div key={Math.random()} className="mt-4">
          <Image
            src={item.src || ""}
            alt={item.alt || ""}
            width={item.width || 150}
            height={item.height || 150}
            className="rounded"
          />
        </div>
      );
    case "iframe":
      return (
        <div key={Math.random()} className="mt-4">
          <iframe
            width={item.width || "100%"}
            height={item.height || 300}
            style={{ border: 0 }}
            src={item.src}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      );
    default:
      return null;
  }
}

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-[#263d42] mb-12 text-center">
        About {aboutData.name}
      </h1>

      {/* Timeline */}
      <div className="relative">
        {/* Center line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-secondary via-accent to-secondary opacity-30" />

        {/* Timeline Items */}
        <div className="relative z-0">
          {(aboutData.timeline as TimelineItemData[]).map((item, index) => (
            <TimelineItem
              key={index}
              year={item.year}
              title={item.title}
              isLeft={item.isLeft}
            >
              {item.content.map((contentItem) => renderContent(contentItem))}
            </TimelineItem>
          ))}
        </div>
      </div>
    </div>
  );
}
