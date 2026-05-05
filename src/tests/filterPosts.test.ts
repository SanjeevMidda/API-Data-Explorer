import { filterPosts } from "../utils/filterPosts";
import { APIData } from "../types/APIData";

const mockPosts: APIData[] = [
  { id: 1, title: "Tom", body: "...", userId: 1 },
  { id: 2, title: "John", body: "...", userId: 2 },
  { id: 3, title: "Lisa", body: "...", userId: 3 },
];

describe("filter posts", () => {
  test("should return all posts when search is empty", () => {
    const posts = mockPosts;

    const search = "";

    const result = filterPosts(posts, search);

    expect(result).toEqual(posts);
  });

  test("should return only posts that match the search term in the title", () => {
    const posts = mockPosts;

    const search = "John";

    const result = filterPosts(posts, search);

    const expected = [{ id: 2, title: "John", body: "...", userId: 2 }];
    expect(result).toEqual(expected);
  });

  test("should match posts regardless of letter case in the search term", () => {
    const posts = mockPosts;
    const search = "tOm";
    const result = filterPosts(posts, search);
    const expected = [{ id: 1, title: "Tom", body: "...", userId: 1 }];
    expect(result).toEqual(expected);
  });

  test("", () => {
    const posts = mockPosts;
    const search = "noMatch";
    const result = filterPosts(posts, search);
    const expected: [] = [];
    expect(result).toEqual(expected);
  });
});
