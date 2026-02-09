import { getAllTags, getPostsByTag } from "@/lib/posts";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tags | Matt Maylor Taylor",
  description: "Browse blog posts by tag.",
};

interface TagInfo {
  name: string;
  slug: string;
  count: number;
}

export default async function TagsPage() {
  const tags = await getAllTags();

  // Get count for each tag
  const tagInfos: TagInfo[] = await Promise.all(
    tags.map(async (tag) => {
      const posts = await getPostsByTag(tag);
      return {
        name: tag,
        slug: tag.toLowerCase().replace(/\s+/g, "-"),
        count: posts.length,
      };
    })
  );

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-[#263d42] mb-12 text-center">Tags</h1>

      {tagInfos.length === 0 ? (
        <p className="text-center text-gray-600">No tags found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {tagInfos.map((tagInfo) => (
            <Link key={tagInfo.slug} href={`/tags/${tagInfo.slug}/`}>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md hover:border-[#80ced7] transition-all duration-200 h-full flex flex-col items-center justify-center text-center">
                <h2 className="text-xl font-bold text-[#263d42] mb-2 hover:text-[#80ced7] transition-colors">
                  {tagInfo.name}
                </h2>
                <p className="text-sm text-gray-600">
                  {tagInfo.count} {tagInfo.count === 1 ? "post" : "posts"}
                </p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
