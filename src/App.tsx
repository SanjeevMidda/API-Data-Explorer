import "./index.css";
import Header from "./components/Header";
import Search from "./components/Search";
import Refetch from "./components/Refetch";

import useFetchData from "./components/hooks/useFetchData";
import { useState } from "react";

function App() {
  useFetchData("https://jsonplaceholder.typicode.com/posts");

  type status = "loading" | "error" | "success";

  const [appStatus, setAppStatus] = useState<status>("loading");

  return (
    <div className="App">
      <Header title="API Data Explorer" />

      <div className="mainPostContainer"></div>

      <div className="searchAndRefreshContainer">
        <Search />
        <Refetch />
      </div>
    </div>
  );
}

export default App;
