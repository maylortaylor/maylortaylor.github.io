import { getAllPosts } from "@/lib/posts";
import PostCard from "@/components/blog/PostCard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Matt Maylor Taylor",
  description: "Technical blog posts about web development, C#, and more.",
};

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-[#263d42] mb-12 text-center">Blog</h1>

      {posts.length === 0 ? (
        <p className="text-center text-gray-600">No blog posts found.</p>
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
