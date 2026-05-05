import { filterPosts } from "../utils/filterPosts";
import { APIData } from "../types/APIData";

const mockPosts: APIData[] = [
  { id: 1, title: "Hello World", body: "...", userId: 1 },
  { id: 2, title: "React Testing", body: "...", userId: 2 },
  { id: 3, title: "Jest Basics", body: "...", userId: 3 },
];

describe("filter posts", () => {
  test("returns all posts when search is empty", () => {
    const posts = mockPosts;

    const search = "";

    const result = filterPosts(posts, search);

    expect(result).toEqual(posts);
  });
});
