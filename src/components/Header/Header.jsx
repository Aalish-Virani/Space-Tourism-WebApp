import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import Logo from "../../assets/shared/logo.svg";
import NavOpenBtn from "../../assets/shared/icon-hamburger.svg";
import NavCloseBtn from "../../assets/shared/icon-close.svg";

const Header = React.memo( () => {

  const pages = [
    { name: "Home", route: "/" },
    { name: "Destination", route: "/destination" },
    { name: "Crew", route: "/crew" },
    { name: "Technology", route: "/technology" },
  ];

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768 ? true : false) 

  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    
    <header className="py-6 md:py-0 md:pb-5 lg:py-7 xl:py-10 | font-primary text-primary tracking-3xl flex items-center justify-between">
      {console.log("header")}
      <NavLink to={"/"} className="px-6 md:px-9 lg:px-14">
        <img className="aspect-square h-10 md:h-12" src={Logo} alt="logo" />
      </NavLink>

      {/* header line */}
      <div className="hidden lg:block absolute left-36 right-0 ml-2 mr-[58vw] xl:left-40 xl:ml-10 xl:mr-[57vw] h-px z-20 bg-primary opacity-25 backdrop-blur-lg"></div>

      <button onClick={toggleNav} className="px-6 z-20 md:hidden">
        <img
          src={NavOpenBtn}
          className={`${isNavOpen ? "hidden" : "block"} aspect-square`}
        />
        <img
          src={NavCloseBtn}
          className={`${isNavOpen ? "block" : "hidden"} aspect-square`}
        />
      </button>

      <nav
        className={`z-10 fixed inset-0 md:static  ${
          isNavOpen ? "translate-x-1/3" : "translate-x-full md:translate-x-0"
        } transition-transform duration-300 bg-white bg-opacity-10 backdrop-blur-lg`}
      >
        <ol className=" flex flex-col ps-8 py-36 gap-8 | md:flex-row md:px-12 md:py-10 md:gap-9 md:min-w-[50vw] md:justify-center | lg:px-[max(48px,4.65vw)] lg:gap-10 lg:min-w-[60vw] lg:justify-start | xl:px-[max(123px,8.5vw)] xl:gap-12 2xl:px-[max(128px,10.5vw)] 2xl:gap-14 ">
          {pages.map((page, index) => (
            <li
              key={index}
              className=" | font-primary text-primary uppercase text-base tracking-2xl md:text-xs md:tracking-xl lg:text-base lg:tracking-2xl xl:text-base xl:tracking-2xl"
            >
              <NavLink
                to={page.route}
                onClick={isNavOpen ? toggleNav : ""}
                className={({ isActive }) =>
                  `  | border-primary md:py-[38px] md:border-b  ${
                    isActive
                      ? "border-opacity-100"
                      : "border-opacity-0 hover:border-opacity-25"
                  }  `
                }
              >
                <span className="font-bold pr-3 md:hidden lg:inline">{`0${index}`}</span>
                {page.name}
              </NavLink>
            </li>
          ))}
        </ol>
      </nav>
    </header>
  );
}
);