import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { BlogPost, BlogPostMetadata } from "@/types/blog";
import { markdownToHtml } from "./markdown";

const postsDirectory = path.join(process.cwd(), "src/content/posts");

interface PostFile {
  filename: string;
  slug: string;
  year: string;
  month: string;
  day: string;
}

function getPostFiles(): PostFile[] {
  const files = fs.readdirSync(postsDirectory);

  return files
    .filter((file) => file.endsWith(".md"))
    .map((file) => {
      const match = file.match(/^(\d{4})-(\d{2})-(\d{2})-(.+)\.md$/);
      if (!match) return null;

      const [, year, month, day, slug] = match;
      return { filename: file, slug, year, month, day };
    })
    .filter((item): item is PostFile => item !== null)
    .sort((a, b) => {
      const dateA = new Date(`${a.year}-${a.month}-${a.day}`);
      const dateB = new Date(`${b.year}-${b.month}-${b.day}`);
      return dateB.getTime() - dateA.getTime();
    });
}

function readPostFile(filename: string) {
  const fullPath = path.join(postsDirectory, filename);
  return fs.readFileSync(fullPath, "utf8");
}

export async function getAllPosts(): Promise<BlogPost[]> {
  const postFiles = getPostFiles();

  const posts = await Promise.all(
    postFiles.map(async (postFile) => {
      const fileContents = readPostFile(postFile.filename);
      const { data, content } = matter(fileContents);

      return {
        slug: postFile.slug,
        year: postFile.year,
        month: postFile.month,
        day: postFile.day,
        ...(data as BlogPostMetadata),
        content,
      } as BlogPost;
    })
  );

  return posts;
}

export async function getPostBySlug(
  year: string,
  month: string,
  day: string,
  slug: string
): Promise<BlogPost | null> {
  const postFiles = getPostFiles();
  const postFile = postFiles.find(
    (f) => f.year === year && f.month === month && f.day === day && f.slug === slug
  );

  if (!postFile) return null;

  const fileContents = readPostFile(postFile.filename);
  const { data, content } = matter(fileContents);
  const htmlContent = await markdownToHtml(content);

  return {
    slug: postFile.slug,
    year: postFile.year,
    month: postFile.month,
    day: postFile.day,
    ...(data as BlogPostMetadata),
    content: htmlContent,
  } as BlogPost;
}

export async function getAllTags(): Promise<string[]> {
  const posts = await getAllPosts();
  const tagsSet = new Set<string>();

  posts.forEach((post) => {
    if (post.tags) {
      let tags: string[] = [];
      if (Array.isArray(post.tags)) {
        tags = post.tags;
      } else {
        // Handle space-separated or comma-separated tags
        tags = post.tags
          .split(/[,\s]+/)
          .map((t) => t.trim())
          .filter((t) => t.length > 0);
      }
      tags.forEach((tag) => tagsSet.add(tag));
    }
  });

  return Array.from(tagsSet).sort();
}

export async function getPostsByTag(tag: string): Promise<BlogPost[]> {
  const posts = await getAllPosts();

  return posts.filter((post) => {
    if (!post.tags) return false;
    let tags: string[] = [];
    if (Array.isArray(post.tags)) {
      tags = post.tags;
    } else {
      tags = post.tags
        .split(/[,\s]+/)
        .map((t) => t.trim())
        .filter((t) => t.length > 0);
    }
    return tags.includes(tag);
  });
}

export function getAllPostParams(): Array<{
  year: string;
  month: string;
  day: string;
  slug: string;
}> {
  const postFiles = getPostFiles();
  return postFiles.map((f) => ({
    year: f.year,
    month: f.month,
    day: f.day,
    slug: f.slug,
  }));
}

export async function getAllTagParams(): Promise<string[]> {
  const tags = await getAllTags();
  return tags;
}
