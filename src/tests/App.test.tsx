import { render, screen, fireEvent } from "@testing-library/react";
import App from "../App";
import useFetchData from "../hooks/useFetchData";

jest.mock("../hooks/useFetchData");

const mockData = [
  { id: 1, title: "Tom", body: "...", userId: 1 },
  { id: 2, title: "John", body: "...", userId: 2 },
];

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
});
