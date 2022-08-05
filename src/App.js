import React from "react"
import Nav from "./components/Nav"
import About from "./components/About"
import Interests from "./components/Interests"
import Footer from "./components/Footer"

export default function App() {
  return (
    <div className="main-container">
        <Nav />
        <About/>
        <Interests/> 
        <Footer/> 
    </div>
  );
}


