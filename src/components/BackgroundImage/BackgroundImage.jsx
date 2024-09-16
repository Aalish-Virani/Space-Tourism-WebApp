import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const homeDesktop = lazy(() =>
  import("../../assets/home/background-home-desktop.jpg")
);
const homeTablet = lazy(() =>
  import("../../assets/home/background-home-tablet.jpg")
);
const homeMobile = lazy(() =>
  import("../../assets/home/background-home-mobile.jpg")
);

const destinationDesktop = lazy(() =>
  import("../../assets/destination/background-destination-desktop.jpg")
);
const destinationTablet = lazy(() =>
  import("../../assets/destination/background-destination-tablet.jpg")
);
const destinationMobile = lazy(() =>
  import("../../assets/destination/background-destination-mobile.jpg")
);

const crewDesktop = lazy(() =>
  import("../../assets/crew/background-crew-desktop.jpg")
);
const crewTablet = lazy(() =>
  import("../../assets/crew/background-crew-tablet.jpg")
);
const crewMobile = lazy(() =>
  import("../../assets/crew/background-crew-mobile.jpg")
);

const technologyDesktop = lazy(() =>
  import("../../assets/technology/background-technology-desktop.jpg")
);
const technologyTablet = lazy(() =>
  import("../../assets/technology/background-technology-tablet.jpg")
);
const technologyMobile = lazy(() =>
  import("../../assets/technology/background-technology-mobile.jpg")
);

const images = {
  "home-desktop": homeDesktop,
  "home-tablet": homeTablet,
  "home-mobile": homeMobile,

  "destination-desktop": destinationDesktop,
  "destination-tablet": destinationTablet,
  "destination-mobile": destinationMobile,

  "crew-desktop": crewDesktop,
  "crew-tablet": crewTablet,
  "crew-mobile": crewMobile,

  "technology-desktop": technologyDesktop,
  "technology-tablet": technologyTablet,
  "technology-mobile": technologyMobile,

};

const BackgroundImage = () => {
  const location = useLocation();
  // const imagesPreloaded = useRef(false);

  const getScreenSize = () => {
    if (window.innerWidth >= 1024) return "desktop";
    if (window.innerWidth >= 640) return "tablet";
    return "mobile";
  };

  // const preloadImages = () => {
  //   if (!imagesPreloaded.current) {
  //     Object.values(images).forEach((src) => {
  //       const img = new Image();
  //       img.src = src;
  //     });
  //     imagesPreloaded.current = true;
  //   }
  // };

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
