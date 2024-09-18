import { motion } from "framer-motion";
import React from "react";
import ExploreButton from "../../components/ExploreButton/ExploreButton";

export default function Home() {
  return (
    <section className=" | container mx-auto flex   flex-col p-6 gap-14 justify-around items-center    md:my-1 md:py-20 md:gap-36 md:justify-evenly   lg:flex-row lg:p-14 lg:gap-56 lg:justify-between lg:items-center lg:max-h-svh   xl:px-20 xl:my-0.5 xl:py-32 xl:gap-96 xl:items-end | 2xl:max-w-[82vw]">
      <motion.article
      initial ={{opacity:0.1}}
      animate={{opacity:1}}
      transition={{duration:0.2}}
      className=" | text-center lg:text-start">
        <h1 className="text-secondary font-primary uppercase  text-base tracking-2xl  sm:text-xl sm:tracking-3xl  xl:text-4xl">
          So, You want to travel to
          <span className="block py-4 md:py-6 text-primary font-secondary  text-7xl tracking-normal  sm:text-10xl  xl:leading-tighter">
            Space
          </span>
        </h1>

        <p className="mx-auto text-secondary font-tertiary text-sm min-h-[125px] max-w-[45ch]  | sm:text-base sm:leading-7 sm:max-w-[49ch] | xl:text-lg xl:max-w-[45ch]">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </motion.article>

      <motion.div
        initial={{ opacity: 0.9, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.1, duration:0.1 }}
        className=" | py-6  md:py-0  lg:grid lg:place-items-end"
      >
        <ExploreButton />
      </motion.div>
    </section>
  );
}
