import React from "react";
import { NavLink } from "react-router-dom";

const UnderlinedIndicators = (({ baseRoute, destinations }) => {
  return (
    <>
      <ul className="flex  py-3 gap-7 | sm:gap-8 | md:py-4 md:gap-9  ">
        {destinations.map((destination, index) => (
          <li
            key={index}
            className="font-primary uppercase  text-xs tracking-xl  sm:text-base sm:tracking-2xl"
          >
            <NavLink
              to={`${baseRoute}${destination.route}`}
              end
              className={({ isActive }) =>
                `py-2  md:py-3  border-b-[3px] border-primary border-opacity-0 ${
                  isActive
                    ? "text-primary border-opacity-100"
                    : "text-secondary hover:border-opacity-25 focus:border-opacity-25"
                }`
              }
            >
              {destination.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </>
  );
});

export default UnderlinedIndicators;
