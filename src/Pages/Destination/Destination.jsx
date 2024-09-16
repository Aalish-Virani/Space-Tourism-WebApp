import React, { Children, useEffect } from "react";
import PageTitle from "../../components/PageTitle/PageTitle";
import UnderlinedIndicators from "../../components/UnderlinedIndicators/UnderlinedIndicators";

import { useNavigate, useParams } from "react-router-dom";

const Destination = React.memo(({ data }) => {
  const navigate = useNavigate();
  const { id = "0" } = useParams();

  const planets = [
    { name: "Moon", route: "" },
    { name: "Mars", route: "/1" },
    { name: "Europa", route: "/2" },
    { name: "Titan", route: "/3" },
  ];

  
  return (
    <div className=" w-full mx-auto  grid place-items-center px-6 pb-7 gap-5 | sm:px-20 | md:px-[max(36px,4.5vw)] md:pt-5 md:pb-6 md:gap-8 | lg:px-0 lg:pt-0 lg:pb-0 lg:gap-0 lg:grid-rows-12 lg:grid-cols-9 lg:justify-items-start lg:items-center">
      <div className="order-1 | md:justify-self-start md:ps-0.5 | lg:row-start-1 lg:row-span-1 lg:col-start-2 lg:col-span-full | xl:row-start-1 xl:row-span-2">
        <PageTitle pageNumber="01" pageHeading="Pick Your Destination" />
      </div>
      <picture className="order-2 |  pt-3 pb-0.5 | md:pt-7 md:pb-1.5 | lg:py-0 lg:pt-0 lg:row-start-2 lg:row-end-12 lg:col-start-2 lg:col-span-3 lg:justify-self-end | xl:row-start-3 xl:row-end-12 ">
        <img
          className="aspect-square min-h-[170px] h-[20vh] max-h-[200px] | sm:min-h-[200px] sm:h-[25vh] sm:max-h-[260px] | md:min-h-[300px] md:h-[300px] md:max-h-[300px] | lg:min-h-[300px] lg:h-[50vh] lg:max-h-[345px] | xl:min-h-[415px] xl:h-[49.5vh] xl:max-h-[460px] "
          src={data[id].images.webp}
          alt="Image"
        />
      </picture>
      <nav className="order-3 | lg:row-start-2 lg:row-span-1 lg:col-start-6 lg:col-span-3  |  xl:row-start-2 xl:row-span-2">
        <UnderlinedIndicators baseRoute="/destination" destinations={planets} />
      </nav>
      <article className="order-4 text-center min-h-[442px] max-w-[492px] | sm:min-h-[465px] sm:max-w-[550px] | md:mx-16 md:min-h-[360px] md:max-w-[600px] | lg:row-start-3 lg:row-end-12 lg:col-start-6 lg:col-span-3 lg:text-start lg:mx-0 lg:max-w-[372px] lg:min-h-[400px] |  xl:max-w-[450px] xl:min-h-[430px] xl:row-start-4 xl:row-end-12">
        {console.log("des...")}
        <div className="">
          <h2 className=" font-secondary uppercase  text-6xl | sm:text-7xl | xl:text-8xl">
            {data[id].name}
          </h2>
        </div>
        {/* info */}
        <div className=" mx-auto border-b border-primary   pt-0.5 pb-8 | md:pt-2 md:pb-12 | lg:pb-14  ">
          <p className=" font-tertiary text-secondary text-sm  | sm:text-base sm:leading-7 | xl:text-lg ">
            {data[id].description}
          </p>
        </div>
        <section className="flex flex-col  py-8 gap-8 | md:flex-row md:justify-center md:py-7 md:gap-24 | lg:pb-0 lg:justify-start lg:gap-10 | xl:gap-20">
          <div className="">
            <h3 className="pb-3 font-primary text-secondary uppercase   text-xs tracking-xl ">
              avg. distance
            </h3>
            <p className="font-secondary uppercase  text-3xl leading-8">
              {data[id].distance}
            </p>
          </div>

          <div className="">
            <h3 className="pb-3 font-primary text-secondary  uppercase  text-xs tracking-xl">
              est. travel time
            </h3>
            <p className="font-secondary uppercase  text-3xl leading-8">
              {data[id].travel}
            </p>
          </div>
        </section>
      </article>
    </div>
  );
});

export default Destination;
