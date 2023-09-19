import { BrowserRouter, Routes, Route } from "react-router-dom";

// pages components
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";

// components
import Header from "./components/Header";
import Footer from "./components/Footer";

// bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

// sass
import "./sass/main.scss";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
