import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Hero from "./containers/Home/Hero";
import Navber from "./containers/Navber/Header";
import Footer from "./containers/footer/Footer";
import { Link } from 'react-router-dom'
function App() {
  
  return (
    <>
      <Navber />
      <Hero />
      <Footer/>
    </>
  );
}

export default App;
