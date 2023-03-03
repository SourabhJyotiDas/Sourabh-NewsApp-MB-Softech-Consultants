import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home.js"
import Navbar from "./components/Navbar.js";
import data from "./data/data.json"


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home data={data.data} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
