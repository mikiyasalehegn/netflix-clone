import { useState } from "react";
import Home from "./Home";
import Nav from "./nav/Nav";
import TVshows from "./TV shows/TVshows";
import "./row/row.css";
import "./App.css";
import "./banner/banner.css";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tv" element={<TVshows />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
