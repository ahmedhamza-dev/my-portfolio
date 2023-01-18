import React, { useEffect, useState } from "react";
import "./App.css";
import Contact from "./components/Contact";
import DotGroup from "./components/DotGroup";
import Footer from "./components/Footer";
import Landing from "./components/Landing";
import Experience from "./components/Experience";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import GradiantLine from "./components/shared/GradiantLine";
import useMediaQuery from "./hooks/useMediaQuery";
import {motion} from 'framer-motion';

function App() {
  const [selectedPage, setSelectedPage] = useState("home");
  const isAboveMeduimScreen = useMediaQuery("(min-width: 1060px)");
  const [isTopOfThePage, setIsTopOfThePage] = useState(true);

  useEffect(() => {
    const scrollHandling = () => {
      window.scrollY === 0 ? setIsTopOfThePage(true) : setIsTopOfThePage(false);
    };
    window.addEventListener("scroll", scrollHandling);
    return () => window.removeEventListener("scroll", scrollHandling);
  }, []);
  
  return (
    <div className="App bg-deep-blue">
      <Navbar
        isTop={isTopOfThePage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <div className="w-5/6 mx-auto md:h-full ">
        <>
          {isAboveMeduimScreen && (
            <DotGroup
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          )}
          <Landing setSelectedPage={setSelectedPage} />
          <GradiantLine />
          <div className="w-5/6 mx-auto md:h-full">
            <Experience />
          </div>
          <div className="w-5/6 mx-auto">
            <Project />
          </div>
          <div className="w-5/6 mx-auto md:h-full">
          <motion.div
            onViewportEnter={() => setSelectedPage("contact")}
          >
            <Contact />
          </motion.div>
        </div>
        <Footer />
        </>
      </div>
    </div>
  );
}

export default App;
