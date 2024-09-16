import { motion } from "framer-motion";

import React from "react";
import DottedSlider from "../../components/DottedSlider/DottedSlider";
import { Outlet, useParams } from "react-router-dom";
import PageTitle from "../../components/PageTitle/PageTitle";

const Crew = React.memo(({ data }) => {
  const { id = "0" } = useParams();

  const crew = [
    { name: "Moon", route: "" },
    { name: "Mars", route: "/1" },
    { name: "Europa", route: "/2" },
    { name: "Titan", route: "/3" },
  ];

  const crewImage = import(`${data[id].images.webp}`);

  return (
    <section className="w-full grid  | gap-8 px-6 items-start justify-items-center | sm:px-20 |  md:gap-10 md:px-9 md:items-center | lg:gap-0 lg:px-0 lg:py-0 lg:grid-rows-12 lg:grid-cols-9 lg:items-center lg:justify-items-start | ">
      {console.log("crew")}
      <div className=" order-1 | md:py-5 md:justify-self-start | lg:order-none lg:row-start-1 lg:row-span-2 lg:col-start-2 lg:col-span-4 | xl:row-start-1 xl:row-span-2 ">
        <PageTitle pageNumber="02" pageHeading="meet your crew" />
      </div>

      <article className=" order-4 min-h-72 max-w-96 text-center | sm:min-h-56 sm:max-w-[550px] | md:order-2 md:px-[119px] md:min-h-[210px] md:max-w-[750px] | lg:px-0 lg:max-w-[450px] lg:min-h-[210px]  lg:order-none lg:row-start-3 lg:row-span-7 lg:col-start-2 lg:col-span-4  lg:text-start | xl:max-w-full xl:min-h-[305px] xl:row-start-3 xl:row-span-7">
        <h3 className="font-secondary text-primary opacity-50 uppercase  text-base  sm:text-2xl  xl:text-4xl">
          {data[id].role}
        </h3>
        <div className="pt-2 pb-4 | xl:pt-4 xl:pb-7">
          <h2 className="font-secondary text-primary uppercase  text-2xl  sm:text-5xl  xl:text-6xl">
            {data[id].name}
          </h2>
        </div>
        <p className="font-tertiary text-secondary text-sm   sm:text-base sm:leading-7  xl:text-lg xl:max-w-[45ch] ">
          {data[id].bio}
        </p>
      </article>

      <nav className="order-3 | lg:order-none lg:row-end-13 lg:row-span-3 lg:col-start-2 lg:col-span-4 | xl:row-end-13 xl:row-span-3">
        <DottedSlider destinations={crew} baseRoute={"/crew"} />
      </nav>

      <motion.picture className=" overflow-hidden order-2 w-full py-[1px] border-b border-secondary border-opacity-25 | md:order-4 md:self-end md:border-none | lg:order-none  lg:row-start-1 lg:row-span-full lg:col-end-10 lg:col-span-4 ">
        <motion.img
          initial={{ y: 100, opacity: 1 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 3 }}
          src={`${data[id].images.webp}`}
          className="mx-auto min-h-56 h-[30vh] | md:min-h-[532px] md:h-[50vh] | lg:mx-0 lg:me-auto lg:min-h-[450px] lg:h-[75vh] lg:max-h-[615px] | xl:min-h-[550px] xl:max-h-[760px] "
          alt=""
        />
      </motion.picture>
    </section>
  );
});

export default Crew;
