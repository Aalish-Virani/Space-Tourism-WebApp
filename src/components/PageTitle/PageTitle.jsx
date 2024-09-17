import { motion } from "framer-motion";
import React from "react";

const PageTitle = React.memo(({ pageNumber, pageHeading }) => {
  return (
    <motion.div>
      <h1 className="overflow-hidden font-primary text-primary uppercase  text-base tracking-2xl  sm:text-xl sm:tracking-3xl  xl:text-3xl xl:tracking-4xl">
        <span className="font-bold opacity-25  me-0.5 pe-4  xl:pe-7">
          {pageNumber}
        </span>
        <motion.span
        initial={{ opacity: 0.9, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.15 }}
        className="inline-block"
        >{pageHeading}</motion.span>
      </h1>
    </motion.div>
  );
});

export default PageTitle;
