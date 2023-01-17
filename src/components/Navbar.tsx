import React, { useState } from "react";
import useMediaQuery from "../hooks/useMediaQuery";
import AnchorLink from "react-anchor-link-smooth-scroll";
import menuIcon from '../assets/menu-icon.svg';
import closeIcon from '../assets/close-icon.svg';

const Link = ({ selectedPage, setSelectedPage, page }: any) => {
  const loweCasePage = page.toLowerCase();
  return (
    <AnchorLink
      className={`${
        selectedPage === loweCasePage ? "text-yellow" : ""
      } hover:text-yellow transition duration-500`}
      href={`#${loweCasePage}`}
      onClick={() => setSelectedPage(loweCasePage)}
    >
        {page}
    </AnchorLink>
  );
};

const Navbar = ({isTop, selectedPage, setSelectedPage }: any) => {
  const [IsMenuToggled, setIsMenuToggled] = useState(false);
  const isAboveSmallScreen = useMediaQuery("(min-width: 768px)");
    const navBackground = isTop ? "" : "bg-red"; 
  return (
    <nav className={`${navBackground} z-40 w-full fixed top-0 py-6`}>
      <div className="flex items-center mx-auto justify-between w-5/6">
        <h4 className="font-playfair text-3xl font-bold uppercase">Hamza</h4>
        {isAboveSmallScreen ? (
          <div className="flex justify-between gap-16 font-opensans text-sm font-semibold">
            <Link page="Home" selectedPage={selectedPage}  setSelectedPage={setSelectedPage}/>
            <Link page="Skills" selectedPage={selectedPage}  setSelectedPage={setSelectedPage}/>
            <Link page="Projects" selectedPage={selectedPage}  setSelectedPage={setSelectedPage}/>
            <Link page="Contact" selectedPage={selectedPage}  setSelectedPage={setSelectedPage}/> 
          </div>
        ) : (
          <button className="rounded-full bg-red p-2" onClick={() => setIsMenuToggled(!IsMenuToggled)}>
            <img src={menuIcon} alt="menu-icon" />
          </button>
        )}
        {/* Mobile Menu for toggling */}
        {!isAboveSmallScreen && IsMenuToggled && (
            <div className="fixed right-0 bottom-0 h-full bg-blue w-[300px] transition">
                <div className="flex justify-end p-12">
                    <button onClick={() => setIsMenuToggled(!IsMenuToggled)}>
                        <img src={closeIcon} alt="close Icon" />
                    </button>
                </div>
                {/* Menu items */}
                <div className="flex flex-col gap-10 ml-[33%] text-2xl text-deep-blue">
                <Link page="Home" selectedPage={selectedPage}  setSelectedPage={setSelectedPage}/>
                <Link page="Skills" selectedPage={selectedPage}  setSelectedPage={setSelectedPage}/>
                <Link page="Projects" selectedPage={selectedPage}  setSelectedPage={setSelectedPage}/>
                <Link page="Contact" selectedPage={selectedPage}  setSelectedPage={setSelectedPage}/> 
                </div>
            </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
