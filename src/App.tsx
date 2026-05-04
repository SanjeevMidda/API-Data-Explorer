import "./index.css";
import Header from "./components/Header";
import Refetch from "./components/Refetch";
import Post from "./components/Post";

import useFetchData from "./hooks/useFetchData";
import { useState } from "react";

function App() {
  const { data, appStatus, refetch } = useFetchData(
    "https://jsonplaceholder.typicode.com/posts"
  );

  // disable input on load

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
              title={item.title}
              body={item.body}
              id={item.id}
              userId={item.userId}
              key={item.id}
            />
          ))}

        {appStatus === "success" && "success" && filteredData.length === 0 && (
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
