import { APIData } from "../types/APIData";

export function filterPosts(posts: APIData[], search: string): APIData[] {
  if (!search) return posts;

  return posts.filter((post) =>
    post.title.toLowerCase().includes(search.toLowerCase())
  );
}
