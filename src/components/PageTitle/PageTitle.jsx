import React from "react";

const PageTitle = React.memo(({ pageNumber, pageHeading }) => {
  return (
    <div>
      {console.log("pt..")}
      <h1 className="font-primary text-primary uppercase  text-base tracking-2xl  sm:text-xl sm:tracking-3xl  xl:text-3xl xl:tracking-4xl">
        <span className="font-bold opacity-25  me-0.5 pe-4  xl:pe-7">
          {pageNumber}
        </span>
        {pageHeading}
      </h1>
    </div>
  );
});

export default PageTitle;
