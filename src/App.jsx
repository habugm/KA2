import React, { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { About } from "./components/about";
import { Product } from "./components/product";
import { Footer } from "./components/footer";
import { Contact } from "./components/contact";

import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  const [isFixed, setIsFixed] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setLandingPageData(JsonData);
    const handleScroll = () => {
      setIsFixed(window.scrollY > 50); // adjust threshold if needed
    };
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll); // cleanup
  }, []);
  


  return (
    <div className="">
    
      <Navigation/>
      <About/>
      <Product/>
      <Contact/>
      <Footer/>
		
    </div>
  );
};

export default App;
