import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Recipe from "./components/Recipe";
import Services from "./components/Services";
import UserReviewCarousel from "./components/UserReviewCarousel";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    <BrowserRouter >
      <Navbar />
      <Home />
      <Recipe />
      <Services />
      <UserReviewCarousel />
      <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
