import { blogPosts as originalPosts } from "./blogs";
import { extraBlogPosts } from "./blogs-extra";

export type { BlogPost } from "./blogs";

export const allBlogPosts = [...originalPosts, ...extraBlogPosts];
