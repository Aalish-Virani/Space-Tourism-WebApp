import React from "react";
import { NavLink, useParams } from "react-router-dom";

export default function DottedSlider({ baseRoute, destinations }) {
  const { id = "0" } = useParams();

  return (
    <>
      <ul className="flex  gap-4  xl:gap-6">
        {destinations.map((destination, index) => (
          <li key={index}>
            <NavLink
              to={`${baseRoute}${destination.route}`}
              end
              className={({ isActive }) =>
                `block bg-primary aspect-square rounded-full  h-[10px]  xl:h-[15px] ${
                  isActive ? "opacity-100" : "opacity-20"
                } `
              }
            ></NavLink>
          </li>
        ))}
      </ul>
    </>
  );
}
