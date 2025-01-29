import React from "react";

const OurStory = () => {
  return (
    <div className="flex flex-col items-center px-2 py-10 lg:flex-row-reverse lg:gap-10 lg:px-24" id="about-us">
      <div className="flex justify-center px-4 border-white shadow-xl">
        <img src="story-house.png" alt="" className="max-h-80 min-w-96" />
      </div>

      <div className="flex flex-col gap-4 px-4 py-8">
        <h1 className="text-2xl font-semibold lg:text-4xl">
          Our Story <br /> Who we are
        </h1>
        <p className="p-color lg:text-lg">
          Established in 1992, PT. Wahana Cipta operates as a General
          Contracting company with a footprint that we have planted throughout
          Indonesia. Initially, we focused on construction in the field of
          residential housing development in Jakarta. As the company grows, now
          we are present as a reliable...
        </p>
        <button className="blue-grad w-fit cursor-pointer rounded-sm px-3 py-1.5 text-white drop-shadow-xl">
          See More
        </button>
      </div>
    </div>
  );
};

export default OurStory;
