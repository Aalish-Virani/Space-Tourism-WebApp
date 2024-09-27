import React from "react";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

import data from "../../data.json";

export default function ExploreButton() {
  const [images, setImages] = useState([]);

  const loadImages = (pageNumber) => {
    const newImages = [];
    const page = data[Object.keys(data)[pageNumber]];

    for (let items in page) {
      const image = page[items].images;

      for (let index in image) {
        newImages.push(image[index]);
      }
    }
    setImages(newImages);
  };

  useEffect(() => {
    const preloadImage = (src) => {
      const img = new Image();
      img.src = src;
    };

    images.forEach((image) => preloadImage(image));

    return () => {};
  }, [images]);

  return (
    <>
      <div className="font-secondary">
        <NavLink
          to="/destination"
          onMouseEnter={() => loadImages(0)}
          onFocus={() => loadImages(0)}
          onClick={() => loadImages(0)}
          className=" bg-primary inline-grid place-items-center aspect-square rounded-full | min-w-[150px] | sm:min-w-[215px] | md:min-w-[242px] | xl:min-w-[274px]  |  relative after:absolute z-0 after:-z-10 after:bg-secondary after:h-full after:aspect-square after:rounded-full after:hover:scale-150 after:focus:scale-150 after:opacity-0 after:hover:opacity-15 after:focus:opacity-15 after:transition after:duration-500 after:ease-in-out focus:outline-none"
        >
          <span className="text-primary-dark uppercase  text-xl tracking-[1.25px] | sm:text-3xl sm:tracking-[1.75px] | md:text-4xl md:tracking-[2px]">
            Explore
          </span>
        </NavLink>
      </div>
    </>
  );
}
