import Link from "next/link";
import { formatDate } from "@/lib/utils";
import { BlogPost } from "@/types/blog";

interface PostCardProps {
  post: BlogPost;
}

export default function PostCard({ post }: PostCardProps) {
  const url = `/blog/${post.year}/${post.month}/${post.day}/${post.slug}/`;

  return (
    <Link href={url}>
      <article className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md hover:border-[#80ced7] transition-all duration-200">
        <h2 className="text-2xl font-bold text-[#263d42] mb-2 hover:text-[#80ced7] transition-colors">
          {post.title}
        </h2>

        {post.description && (
          <p className="text-gray-600 mb-4">{post.description}</p>
        )}

        <div className="flex items-center justify-between">
          <time className="text-sm text-gray-500">
            {formatDate(post.date)}
          </time>

          {post.tags && (
            <div className="flex gap-2 flex-wrap justify-end">
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
                  <span
                    key={tag}
                    className="text-xs bg-[#ccdbdc] text-[#263d42] px-2 py-1 rounded"
                  >
                    {tag}
                  </span>
                ));
              })()}
            </div>
          )}
        </div>
      </article>
    </Link>
  );
}
