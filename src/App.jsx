import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "@/pages/Home";
import Tips from "@/pages/Tips";
import Destination from "@/pages/Destination";
import About from "@/pages/About";
import Navbar from "./components/global/Navbar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tips" element={<Tips />} />
          <Route path="/destination" element={<Destination />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
