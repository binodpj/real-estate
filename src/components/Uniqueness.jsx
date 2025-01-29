import React from "react";

const Uniqueness = () => {
  return (
    <div className="pb-5 lg:px-24 lg:pb-10">
      <div className="flex flex-col items-center px-5 py-8 lg:flex-row lg:justify-evenly lg:gap-10">
        <h1 className="mb-2 text-center text-2xl font-semibold lg:text-4xl">
          What Make Us <br />
          Different?
        </h1>
        <p className="p-color max-w-sm text-center lg:text-left">
          Check out our best service you can possibly orders in building your
          company and don't forget to ask via our email or our customer service
          if you are interested in using our services
        </p>
      </div>

      <div className="flex flex-col gap-2 lg:flex-row justify-evenly">
        <div className="flex flex-col items-center gap-4 p-4 lg:max-w-3xs lg:items-start">
          <div>
            <img src="experience-icon.svg" alt="" />
          </div>
          <h1 className="text-2xl font-semibold">Experienced</h1>
          <p className="text-center text-[#b6b6b6] lg:text-left">
            Our experience of 25 years of building and making achievements in
            the world of development
          </p>
        </div>

        <div className="flex flex-col items-center gap-4 p-4 lg:max-w-3xs lg:items-start">
          <div>
            <img src="time-icon.svg" alt="" />
          </div>
          <h1 className="text-2xl font-semibold">On Time</h1>
          <p className="text-center text-[#b6b6b6] lg:text-left">
            We prioritize the quality of our work and finish it on time
          </p>
        </div>

        <div className="flex flex-col items-center gap-4 p-4 lg:max-w-3xs lg:items-start">
          <div>
            <img src="price-icon.svg" alt="" />
          </div>
          <h1 className="text-2xl font-semibold">Competitive Price</h1>
          <p className="text-center text-[#b6b6b6] lg:text-left">
            The prices we offer you are very competitive without reducing the
            quality of the company's work in the slightest
          </p>
        </div>

        <div className="flex flex-col items-center gap-4 p-4 lg:max-w-3xs lg:items-start">
          <div>
            <img src="quality-icon.svg" alt="" />
          </div>
          <h1 className="text-2xl font-semibold">Best Materials</h1>
          <p className="text-center text-[#b6b6b6] lg:text-left">
            The material determines the building itself so we recommend that you
            use the best & quality materials in its class.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Uniqueness;
