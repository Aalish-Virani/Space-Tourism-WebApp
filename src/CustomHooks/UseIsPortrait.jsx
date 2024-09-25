import React, { useState } from "react";
import { useEffect } from "react";

function UseIsPortrait() {
  const [isPortrait, setIsPortrait] = useState(
    window.innerHeight > window.innerWidth
  );

  useEffect(() => {
    handleOrientation = () => {
      setIsPortrait(window.innerHeight > window.innerWidth);
    };

    document.addEventListener("resize", handleOrientationChange);

    return window.removeEventListener("resize", handleOrientationChange);
  }, []);

  return isPortrait;
}


export default UseIsPortrait;
