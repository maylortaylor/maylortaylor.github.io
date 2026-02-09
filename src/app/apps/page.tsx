import AppCard from "@/components/apps/AppCard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Apps | Matt Maylor Taylor",
  description: "Interactive applications and tools created by Matt Taylor.",
};

const apps = [
  {
    name: "SecPlus Study",
    description:
      "A comprehensive study guide for CompTIA Security+ (SY0-701) certification. Features flashcards, practice exams, and study materials organized by domain.",
    path: "/secplusstudy/",
    icon: "🧠",
    tags: ["Security+", "Study Tool", "CompTIA", "Certification"],
    isExternal: true,
  },
];

export default function AppsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-[#263d42] mb-4 text-center">
        Applications
      </h1>
      <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
        A collection of interactive applications and tools I've built. Feel
        free to explore and use them!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {apps.map((app) => (
          <AppCard
            key={app.name}
            name={app.name}
            description={app.description}
            path={app.path}
            icon={app.icon}
            tags={app.tags}
            isExternal={app.isExternal}
          />
        ))}
      </div>
    </div>
  );
}
