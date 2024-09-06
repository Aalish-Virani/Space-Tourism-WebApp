import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

import homeDesktop from "../../assets/home/background-home-desktop.jpg"
import homeTablet from "../../assets/home/background-home-tablet.jpg"
import homeMobile from "../../assets/home/background-home-mobile.jpg"

import destinationDesktop from "../../assets/destination/background-destination-desktop.jpg"
import destinationTablet from "../../assets/destination/background-destination-tablet.jpg"
import destinationMobile from "../../assets/destination/background-destination-mobile.jpg"

import crewDesktop from "../../assets/crew/background-crew-desktop.jpg"
import crewTablet from "../../assets/crew/background-crew-tablet.jpg"
import crewMobile from "../../assets/crew/background-crew-mobile.jpg"

import technologyDesktop from "../../assets/technology/background-technology-desktop.jpg"
import technologyTablet from "../../assets/technology/background-technology-tablet.jpg"
import technologyMobile from "../../assets/technology/background-technology-mobile.jpg"

const images = {
  "home-desktop": homeDesktop,
  "home-tablet": homeTablet,
  "home-mobile": homeMobile,

  "destination-desktop":
    "../src/assets/destination/background-destination-desktop.jpg",
  "destination-tablet":
    "../src/assets/destination/background-destination-tablet.jpg",
  "destination-mobile":
    "../src/assets/destination/background-destination-mobile.jpg",

  "technology-desktop":
    "../src/assets/technology/background-technology-desktop.jpg",
  "technology-tablet":
    "../src/assets/technology/background-technology-tablet.jpg",
  "technology-mobile":
    "../src/assets/technology/background-technology-mobile.jpg",

  "crew-desktop": "../src/assets/crew/background-crew-desktop.jpg",
  "crew-tablet": "../src/assets/crew/background-crew-tablet.jpg",
  "crew-mobile": "../src/assets/crew/background-crew-mobile.jpg",
};

const BackgroundImage = () => {
  const location = useLocation();
  const imagesPreloaded = useRef(false);

  const getScreenSize = () => {
    if (window.innerWidth >= 1024) return "desktop";
    if (window.innerWidth >= 640) return "tablet";
    return "mobile";
  };

  const preloadImages = () => {
    if (!imagesPreloaded.current) {
      Object.values(images).forEach((src) => {
        const img = new Image();
        img.src = src;
      });
      imagesPreloaded.current = true;
    }
  };

  const setBackground = () => {
    const screenSize = getScreenSize();
    const path = location.pathname;

    let backgroundImage = "";

    if (path === "/") {
      backgroundImage = images[`home-${screenSize}`];
      preloadImages();
    } else if (path.startsWith("/destination")) {
      backgroundImage = images[`destination-${screenSize}`];
    } else if (path.startsWith("/crew")) {
      backgroundImage = images[`crew-${screenSize}`];
    } else if (path.startsWith("/technology")) {
      backgroundImage = images[`technology-${screenSize}`];
    } else {
      backgroundImage = "none";
    }

    document.body.className = `bg-slate-950 transition-opacity min-h-screen duration-500 ease-in-out  bg-center bg-cover bg-no-repeat opacity-100 after:opacity-0 after:transition-opacity`;
    document.body.style.backgroundImage = `url(${backgroundImage})`;
  };

  useEffect(() => {
    setBackground();

    const handleResize = () => {
      setBackground();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      document.body.style.backgroundImage = "";
      document.body.className = "";
    };
  }, [location]);

  return null;
};

export default BackgroundImage;
