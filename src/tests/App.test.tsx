import { render, screen } from "@testing-library/react";
import App from "../App";
import useFetchData from "../hooks/useFetchData";

jest.mock("../hooks/useFetchData");

describe("App UI behaviour", () => {
  test("shows loading initially", () => {
    (useFetchData as jest.Mock).mockReturnValue({
      data: null,
      appStatus: "loading",
      refetch: jest.fn(),
    });

    render(<App />);

    expect(screen.getByText(/loading data/i)).toBeInTheDocument();
  });

  test("shows no results when search has no results", () => {
    (useFetchData as jest.Mock).mockReturnValue({
      data: [],
      appStatus: "success",
      refetch: jest.fn(),
    });

    render(<App />);

    expect(screen.getByText(/No posts found./i)).toBeInTheDocument();
  });
});
