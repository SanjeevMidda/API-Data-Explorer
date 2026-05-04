import "./index.css";
import Header from "./components/Header";
import Search from "./components/Search";
import Refresh from "./components/Refresh";

function App() {
  return (
    <div className="App">
      <Header title="API Data Explorer" />

      <div className="searchAndRefreshContainer">
        <Search />
        <Refresh />
      </div>
    </div>
  );
}

export default App;
