import "./styles/index.css";
import Header from "./components/Header";
import Refetch from "./components/Refetch";
import Post from "./components/Post";

import useFetchData from "./hooks/useFetchData";
import { useState } from "react";
import { APIData } from "./types/APIData";

function App() {
  const url = "https://jsonplaceholder.typicode.com/posts";
  const { data, appStatus, refetch } = useFetchData(url);

  const [selectedPost, setSelectedPost] = useState<APIData | null>(null);
  const [userInput, setUserInput] = useState("");

  const filteredData =
    data?.filter((item) =>
      item.title.toLowerCase().includes(userInput.toLowerCase())
    ) ?? [];

  return (
    <div className="App">
      <Header title="API Data Explorer" />

      <div className="mainPostContainer">
        {appStatus === "loading" && <p>Loading data...</p>}
        {appStatus === "error" && <p>Error loading data. Please try again</p>}
        {appStatus === "success" &&
          data &&
          filteredData.map((item) => (
            <Post
              post={item}
              key={item.id}
              selectedPost={selectedPost}
              onSelectPost={setSelectedPost}
            />
          ))}

        {appStatus === "success" && filteredData.length === 0 && (
          <p>No posts found.</p>
        )}
      </div>
      <div className="searchAndRefreshContainer">
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          disabled={appStatus === "loading"}
        />
        <Refetch refetch={refetch} />
      </div>
    </div>
  );
}

export default App;
