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
                `block box-content bg-primary aspect-square rounded-full h-2 xl:h-3 border border-primary ${
                  isActive
                    ? "opacity-100 border-opacity-100"
                    : "bg-opacity-20 border-opacity-0 hover:border-opacity-50"
                } `
              }
            ></NavLink>
          </li>
        ))}
      </ul>
    </>
  );
}
