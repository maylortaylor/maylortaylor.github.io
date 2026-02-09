import { getAllTags, getPostsByTag } from "@/lib/posts";
import PostCard from "@/components/blog/PostCard";
import { Metadata, ResolvingMetadata } from "next";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

interface TagPageProps {
  params: Promise<{
    tag: string;
  }>;
}

export async function generateStaticParams() {
  const tags = await getAllTags();
  return tags.map((tag) => ({
    tag: tag.toLowerCase().replace(/\s+/g, "-"),
  }));
}

export async function generateMetadata(
  { params }: TagPageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const p = await params;
  const tag = p.tag.replace(/-/g, " ");

  return {
    title: `Posts tagged "${tag}" | Matt Maylor Taylor`,
    description: `Blog posts tagged with ${tag}.`,
  };
}

export default async function TagPage({ params }: TagPageProps) {
  const p = await params;
  // Convert slug back to tag name (replace hyphens with spaces and capitalize)
  const tagName = p.tag.replace(/-/g, " ");

  const posts = await getPostsByTag(tagName);

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <Link
        href="/tags"
        className="inline-flex items-center gap-2 text-[#80ced7] hover:text-[#5eb5bf] transition-colors mb-8"
      >
        <ChevronLeft size={20} />
        Back to Tags
      </Link>

      <h1 className="text-4xl font-bold text-[#263d42] mb-2 text-center">
        Tag: {tagName}
      </h1>
      <p className="text-center text-gray-600 mb-12">
        {posts.length} {posts.length === 1 ? "post" : "posts"}
      </p>

      {posts.length === 0 ? (
        <p className="text-center text-gray-600">
          No blog posts found with this tag.
        </p>
      ) : (
        <div className="space-y-6">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      )}
    </div>
  );
}
