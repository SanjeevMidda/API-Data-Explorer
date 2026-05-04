import "./index.css";
import Header from "./components/Header";
import Search from "./components/Search";
import Refetch from "./components/Refetch";

import useFetchData from "./hooks/useFetchData";
import { useState } from "react";

function App() {
  const { data, appStatus } = useFetchData(
    "https://jsonplaceholder.typicode.com/posts"
  );

  console.log(appStatus);

  return (
    <div className="App">
      <Header title="API Data Explorer" />

      <div className="mainPostContainer">
        {appStatus === "loading" && <p>Loading data...</p>}
        {appStatus === "error" && <p>Error loading data. Please try again</p>}
        {appStatus === "success" &&
          data &&
          data.map((item) => <p>{item.title}</p>)}
      </div>
      <div className="searchAndRefreshContainer">
        <Search />
        <Refetch />
      </div>
    </div>
  );
}

export default App;
