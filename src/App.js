import React, { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";
import Preloader from "./components/Preloader/Preloader";


function App() {
  const [contentLoaded, setContentLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setContentLoaded(true);
    }, 1500)
  }, [])



  return (
    <>
      {contentLoaded ? (
        <>
          <Header />
          <Main />
          <About />
          <Skills />
          <Projects />
          <Footer />
        </>
      ) : (
        <Preloader />
      )}
    </>
  );
}

export default App;
