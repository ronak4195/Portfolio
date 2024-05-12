// import logo from "./logo.svg";
import "./App.css";

// import Clock from "./components/Clock";
import Description from "./components/Description";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Work from "./components/Work";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div style={{ padding: "0 2vw" }}>
        <BrowserRouter>
          <Navbar />
          <div className="appContainer">
            <Description />

            <div className="appRoutes">
            <Routes>
              <Route exact path="/" element={<Intro />}></Route>
              <Route exact path="/work" element={<Work />}></Route>
              <Route exact path="/blog" element={<Blog />}></Route>
              <Route exact path="/contact" element={<Contact />}></Route>
            </Routes>
              </div>
          </div>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
