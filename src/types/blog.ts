export interface BlogPostMetadata {
  layout?: string;
  title: string;
  description?: string;
  date: string;
  tags?: string | string[];
  share?: boolean;
}

export interface BlogPost extends BlogPostMetadata {
  slug: string;
  content: string;
  year: string;
  month: string;
  day: string;
}

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
}
