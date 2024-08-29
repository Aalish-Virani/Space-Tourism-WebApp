import React from "react";
import { NavLink, useParams } from "react-router-dom";

export default function NumberedSlider({ baseRoute, destinations }) {
  return (
    <ul className="flex gap-4  lg:flex-col  xl:gap-8">
      {destinations.map((destination, index) => (
        <li key={index}>
          <NavLink
            to={`${baseRoute}${destination.route}`}
            end
            className={({ isActive }) =>
              `grid place-items-center font-secondary border border-primary border-opacity-25   aspect-square rounded-full  h-10 text-base tracking-[1px]  sm:h-[60px] sm:text-2xl sm:tracking-[1.5px]  xl:h-20 xl:text-4xl xl:tracking-[2px] ${
                isActive
                  ? "bg-primary text-primary-dark"
                  : "bg-primary-dark bg-opacity-25 text-primary"
              }`
            }
          >
            {index + 1}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}
