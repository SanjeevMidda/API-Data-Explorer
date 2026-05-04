import "./index.css";
import Header from "./components/Header";
import Search from "./components/Search";

function App() {
  return (
    <div className="App">
      <Header title="API Data Explorer" />

      <div className="searchAndRefreshContainer">
        <Search />
      </div>
    </div>
  );
}

export default App;
