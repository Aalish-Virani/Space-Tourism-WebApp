import { useEffect } from "react";

const UsePreloadImages = (images) => {
  useEffect(() => {
    const preloadImage = (src) => {
      const img = new Image();
      img.src = src;
      console.log(src);
    };

    images.forEach((image) => preloadImage(image));

    return () => {};
  }, [images]);
};

export default UsePreloadImages;
