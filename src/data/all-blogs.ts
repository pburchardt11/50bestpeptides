import { blogPosts as originalPosts } from "./blogs";

// Will import extra posts once the file is created
let allBlogPosts = [...originalPosts];

try {
  // Dynamic import handled at build time
  const { extraBlogPosts } = require("./blogs-extra");
  allBlogPosts = [...originalPosts, ...extraBlogPosts];
} catch {
  // Extra blogs not yet available
}

export type { BlogPost } from "./blogs";
export { allBlogPosts };
