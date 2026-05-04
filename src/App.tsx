import "./index.css";
import Header from "./components/Header";
import Search from "./components/Search";
import Refetch from "./components/Refetch";

function App() {
  return (
    <div className="App">
      <Header title="API Data Explorer" />

      <div className="searchAndRefreshContainer">
        <Search />
        <Refetch />
      </div>
    </div>
  );
}

export default App;
