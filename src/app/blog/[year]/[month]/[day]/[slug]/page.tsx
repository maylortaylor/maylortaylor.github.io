import { getPostBySlug, getAllPostParams } from "@/lib/posts";
import { formatDate } from "@/lib/utils";
import { Metadata, ResolvingMetadata } from "next";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

interface BlogPostPageProps {
  params: Promise<{
    year: string;
    month: string;
    day: string;
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const params = getAllPostParams();
  return params.map((param) => ({
    year: param.year,
    month: param.month,
    day: param.day,
    slug: param.slug,
  }));
}

export async function generateMetadata(
  { params }: BlogPostPageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const p = await params;
  const post = await getPostBySlug(p.year, p.month, p.day, p.slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: `${post.title} | Matt Maylor Taylor`,
    description: post.description || post.title,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const p = await params;
  const post = await getPostBySlug(p.year, p.month, p.day, p.slug);

  if (!post) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold text-[#263d42] mb-4">Post Not Found</h1>
        <p className="text-gray-600 mb-8">
          The blog post you're looking for doesn't exist.
        </p>
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 bg-[#80ced7] text-[#263d42] px-6 py-3 rounded-lg font-semibold hover:bg-[#5eb5bf] transition-colors"
        >
          <ChevronLeft size={20} />
          Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <article className="max-w-3xl mx-auto px-4 py-16">
      {/* Header */}
      <div className="mb-8">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-[#80ced7] hover:text-[#5eb5bf] transition-colors mb-4"
        >
          <ChevronLeft size={20} />
          Back to Blog
        </Link>

        <h1 className="text-4xl md:text-5xl font-bold text-[#263d42] mb-4">
          {post.title}
        </h1>

        {post.description && (
          <p className="text-xl text-gray-600 mb-4">{post.description}</p>
        )}

        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 border-t border-b border-gray-200 py-4">
          <time>{formatDate(post.date)}</time>

          {post.tags && (
            <div className="flex gap-2 flex-wrap">
              {(() => {
                let tags: string[] = [];
                if (Array.isArray(post.tags)) {
                  tags = post.tags;
                } else {
                  tags = (post.tags as string)
                    .split(/[,\s]+/)
                    .map((t) => t.trim())
                    .filter((t) => t.length > 0);
                }
                return tags.map((tag) => (
                  <Link
                    key={tag}
                    href={`/tags/${tag.toLowerCase().replace(/\s+/g, "-")}/`}
                    className="bg-[#ccdbdc] text-[#263d42] px-2 py-1 rounded hover:bg-[#a8c5c7] transition-colors"
                  >
                    {tag}
                  </Link>
                ));
              })()}
            </div>
          )}
        </div>
      </div>

      {/* Content */}
      <div
        className="prose prose-sm md:prose lg:prose-lg max-w-none
          prose-h1:text-3xl prose-h1:font-bold prose-h1:text-[#263d42] prose-h1:mt-8 prose-h1:mb-4
          prose-h2:text-2xl prose-h2:font-bold prose-h2:text-[#263d42] prose-h2:mt-6 prose-h2:mb-3
          prose-h3:text-xl prose-h3:font-bold prose-h3:text-[#263d42] prose-h3:mt-4 prose-h3:mb-2
          prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-4
          prose-a:text-[#80ced7] prose-a:hover:text-[#5eb5bf] prose-a:transition-colors
          prose-ul:text-gray-700 prose-ol:text-gray-700
          prose-li:text-gray-700 prose-li:mb-1
          prose-code:bg-gray-100 prose-code:text-[#263d42] prose-code:px-1 prose-code:rounded prose-code:text-sm
          prose-pre:bg-gray-900 prose-pre:text-gray-100 prose-pre:rounded-lg prose-pre:p-4
          prose-blockquote:border-l-4 prose-blockquote:border-[#80ced7] prose-blockquote:pl-4 prose-blockquote:italic
          prose-table:w-full prose-th:text-left prose-th:font-bold prose-th:bg-gray-100
          prose-td:border prose-td:border-gray-200 prose-td:p-2"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </article>
  );
}
