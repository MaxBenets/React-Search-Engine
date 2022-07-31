import { Route, Routes } from "react-router-dom";
import "./App.css";
import Output from "./component/Output/Output";
import SearchBar from "./component/SearchBar/SearchBar";

function App() {
   return (
      <div className="App">

        <Routes>
          <Route path = "/" element = {<SearchBar />} />
          <Route path = "/search/:searchData" element = {<Output />} />
        </Routes>

      </div>
   )
}

export default App;
