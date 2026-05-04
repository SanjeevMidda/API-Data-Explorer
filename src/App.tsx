import "./index.css";
import Header from "./components/Header";
import Search from "./components/Search";
import Refetch from "./components/Refetch";

import useFetchData from "./components/hooks/useFetchData";

function App() {
  useFetchData("https://jsonplaceholder.typicode.com/posts");

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
