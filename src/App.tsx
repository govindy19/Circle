//import React from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import Header from "./components/Header";
import Program from "./components/Program";
import Courses from "./components/Courses";
import Reviews from "./components/Reviews";
import Questions from "./components/Questions";
import Footer from "./components/Footer";
//import StackScrollWrapper from "./components/StackScrollWrapper";

const App = () => {
  return (
    <ParallaxProvider>
      
        <Header />
        <Program />
        <Courses />
        <Reviews />
        <Questions />
        <Footer />
      
    </ParallaxProvider>
  );
};

export default App;
