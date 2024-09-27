// // animation = 0.7 

import UseIsMobile from "../../CustomHooks/UseIsMobile.jsx";

import { motion } from "framer-motion";

import React from "react";
import DottedSlider from "../../components/DottedSlider/DottedSlider";
import { useParams } from "react-router-dom";
import PageTitle from "../../components/PageTitle/PageTitle";

const Crew = React.memo(({ data }) => {
  const { id = "0" } = useParams();

  const isMobile = UseIsMobile();

  const crew = [
    { name: "Moon", route: "" },
    { name: "Mars", route: "/1" },
    { name: "Europa", route: "/2" },
    { name: "Titan", route: "/3" },
  ];

  return (
    <section className=" overflow-hidden | w-full grid  | gap-8 px-6 items-start justify-items-center | sm:px-20 |  md:gap-10 md:px-9 md:items-center | lg:gap-0 lg:px-0 lg:py-0 lg:grid-rows-12 lg:grid-cols-9 lg:items-center lg:justify-items-start | ">
      <div className=" order-1 | md:py-5 md:justify-self-start | lg:order-none lg:row-start-1 lg:row-span-2 lg:col-start-2 lg:col-span-4 | xl:row-start-1 xl:row-span-2 ">
        <PageTitle pageNumber="02" pageHeading="meet your crew" />
      </div>

      <article className=" overflow-hidden order-4 min-h-72 max-w-96 text-center | sm:min-h-56 sm:max-w-[550px] | md:order-2 md:px-[119px] md:min-h-[210px] md:max-w-[750px] | lg:px-0 lg:max-w-[450px] lg:min-h-[210px]  lg:order-none lg:row-start-3 lg:row-span-7 lg:col-start-2 lg:col-span-4  lg:text-start | xl:max-w-full xl:min-h-[305px] xl:row-start-3 xl:row-span-7">
        <motion.h3
          animate={{ opacity: [0.25, 0.4, 0.55, 0.7, 0.85, 1] }}
          transition={{ delay: 0.1, duration: 0.6 }}
          key={id}
          className="font-secondary text-primary opacity-50 uppercase  text-base  sm:text-2xl  xl:text-4xl"
        >
          {data[id].role}
        </motion.h3>
        <div className="pt-2 pb-4 | xl:pt-4 xl:pb-7">
          <motion.h2
            animate={{ opacity: [0.15, 0.3, 0.45, 0.6, 0.75, 1] }}
            transition={{ delay: 0.2, duration: 0.5 }}
            key={id}
            className="font-secondary text-primary uppercase  text-2xl  sm:text-5xl  xl:text-6xl"
          >
            {data[id].name}
          </motion.h2>
        </div>
        <motion.p
          animate={{ opacity: [0.05, 0.2, 0.35, 0.5, 0.65, 1] }}
          transition={{ delay: 0.25, duration: 0.45 }}
          key={id + 1}
          className="font-tertiary text-secondary text-sm   sm:text-base sm:leading-7  xl:text-lg xl:max-w-[45ch] "
        >
          {data[id].bio}
        </motion.p>
      </article>

      <nav className="order-3 | lg:order-none lg:row-end-13 lg:row-span-3 lg:col-start-2 lg:col-span-4 | xl:row-end-13 xl:row-span-3">
        <DottedSlider destinations={crew} baseRoute={"/crew"} />
      </nav>

      <motion.picture className=" overflow-hidden order-2 w-full py-[1px]  | md:order-4 md:self-end | lg:order-none  lg:row-start-1 lg:row-span-full lg:col-end-10 lg:col-span-4 ">
        <motion.img
          initial={isMobile ? { y: "50%" } : { y: "25%" }}
          animate={{ y: 0 }}
          transition={{ duration: 0.7 }}
          key={id}
          src={`${data[id].images.webp}`}
          className="mx-auto min-h-56 h-[30vh] | md:min-h-[532px] md:h-[50vh] | lg:mx-0 lg:me-auto lg:min-h-[450px] lg:h-[75vh] lg:max-h-[615px] | xl:min-h-[550px] xl:max-h-[760px] "
          alt=""
        />
        <motion.div
          initial={{ scaleX: 0.5 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          key={id + 1}
          className="w-full h-[1px] bg-secondary opacity-25 md:opacity-0"
        ></motion.div>
      </motion.picture>
    </section>
  );
});

export default Crew;
