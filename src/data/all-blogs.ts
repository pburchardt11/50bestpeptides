import { blogPosts as originalPosts } from "./blogs";
import { extraBlogPosts } from "./blogs-extra";
import { questionBlogPosts } from "./blogs-questions";

export type { BlogPost } from "./blogs";

export const allBlogPosts = [
  ...originalPosts,
  ...extraBlogPosts,
  ...questionBlogPosts,
];
