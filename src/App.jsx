import React from "react";
import Cursor from "./components/Cursor";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Services from "./components/compo/service";
import WorkProcess from "./components/compo/WorkProcess";
import Education from "./components/Education";
import Experience from "./components/Experience";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
// import ChatWidget from "./components/compo/ChatWidget";


function App() {

  return (
    <>
      <Cursor/>
      <Header/>
      <Hero/>
      <Projects/>
      <Skills/>
      <Services/>
      <WorkProcess/>
      <Education/>
      <Experience/>
      <About/>
      <Contact/>
      <Footer/>
      {/* <ChatWidget/> */}
    </>
  );
}

export default App
