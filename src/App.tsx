import "./index.css";
import Header from "./components/Header";
import Search from "./components/Search";
import Refetch from "./components/Refetch";

import useFetchData from "./components/hooks/useFetchData";
import { useState } from "react";

function App() {
  useFetchData("https://jsonplaceholder.typ");

  type status = "loading" | "error" | "success";

  const [appStatus, setAppStatus] = useState<status>("loading");

  return (
    <div className="App">
      <Header title="API Data Explorer" />

      <div className="mainPostContainer">
        {appStatus === "loading" && <p>loading data...</p>}
        {appStatus === "error" && <p>error loading data. Please try again</p>}
        {appStatus === "success" && <p>data loaded!</p>}
      </div>

      <div className="searchAndRefreshContainer">
        <Search />
        <Refetch />
      </div>
    </div>
  );
}

export default App;
