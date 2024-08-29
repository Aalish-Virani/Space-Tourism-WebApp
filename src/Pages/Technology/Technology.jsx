import React, { useState } from "react";
import PageTitle from "../../components/PageTitle/PageTitle";
import NumberedSlider from "../../components/NumberedSlider/NumberedSlider";

import { useNavigate, useParams } from "react-router-dom";

export default function Technology({ data }) {
  const { id = "0" } = useParams();

  const technologies = [];

  for (let index = 0; index < 3; index++) {
    technologies.push({
      name: data[index].name,
      route: index === 0 ? `` : `/${index}`,
    });
  }

  return (
    <div className="w-screen grid  pb-[max(80px,11.25vh)] gap-6 justify-items-center | sm:items-center | md:pt-5 md:pb-24 md:gap-11 |  lg:px-0 lg:py-0 lg:gap-0 lg:grid-rows-12 lg:grid-cols-9 lg:justify-items-start lg:items-center ">
      <div className="  | order-1 | md:justify-self-start md:ps-9 | lg:ps-0 lg:order-none lg:row-start-1 lg:row-span-2 lg:col-start-2 lg:col-span-full  ">
        <PageTitle pageNumber="03" pageHeading="Space Launch 101" />
      </div>

      <div className=" | order-3 | lg:order-none lg:row-start-4 lg:row-end-10 lg:col-start-2 lg:col-span-1 | xl:row-start-4 xl:row-end-10 ">
        <NumberedSlider baseRoute={"/technology"} destinations={technologies} />
      </div>

      <article className=" | order-4 px-3 min-h-[220px] max-w-[400px] text-center | sm:min-h-[230px] sm:max-w-[500px] | md:px-40 md:min-h-[230px] md:max-w-[850px] | lg:px-0 lg:min-h-64 lg:max-w-[400px] lg:order-none lg:row-start-4 lg:row-end-10 lg:col-start-3 lg:col-span-4 lg:justify-self-start lg:text-start | xl:px-0 xl:min-h-[275px] xl:max-w-[500px] xl:row-start-4 xl:row-end-10 | 2xl:max-w-[520px]">
        <h3 className="font-primary text-secondary uppercase  text-xs tracking-xl  sm:text-base sm:tracking-2xl">
          THE TERMINOLOGY…
        </h3>
        <div className="pt-2 pb-4 | md:py-3 | xl:pt-3 xl:pb-4">
          <h2 className="font-secondary text-primary uppercase  text-2xl | sm:text-5xl  xl:text-6xl">
            {data[id].name}
          </h2>
        </div>
        <p className="font-tertiary text-secondary  text-sm | sm:text-base sm:leading-7  xl:text-lg">
          {data[id].description}
        </p>
      </article>

{/* mobile image */}
      <picture
        style={{ backgroundImage: `url(${data[id].images.landscape})` }}
        className=" | order-2 w-full min-h-[170px] h-[24vh] mx-auto my-3 bg-cover bg-no-repeat bg-center | sm:min-h-[310px] sm:h-[30.25vh] |  md:mt-4 md:mb-3 | lg:hidden "
      ></picture>

{/* desktop ima0e */}
      <picture
        style={{ backgroundImage: `url(${data[id].images.portrait})` }}
        className="hidden  | lg:block w-full h-full   bg-contain bg-no-repeat bg-right lg:row-start-3 lg:row-end-11 lg:col-end-11 lg:col-span-4 lg:min-h-[350px] lg:max-h-[550px]"
      ></picture>

    </div>
  );
}
