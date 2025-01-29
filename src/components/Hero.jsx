import React from "react";

const Hero = () => {
  return (
    <div className="black-grad h-full w-screen text-white lg:pl-20" id="home">
      <div className="flex flex-col lg:flex-row">
        <div className="flex flex-col gap-2 px-4 pt-20">
          <h1 className="text-3xl lg:text-5xl">
            We Provide <br />
            Architectural design and Construction
          </h1>
          <p className="p-color lg:text-lg">
            More than 100 building and housing projects that we have built. The
            building owner chose us over other contractors in Jakarta, because
            our work is different
          </p>
          <button className="blue-grad mt-2 w-[125px] cursor-pointer rounded-sm border-0 px-3 py-1.5 text-left text-[14px]">
            Discover More
          </button>
        </div>
        <div className="-mt-32 flex justify-end">
          <img
            src="background-house.png"
            alt="house"
            className="max-w-64 lg:min-w-xl"
          />
        </div>
      </div>

      <div className="hidden lg:flex lg:justify-between lg:gap-16">
        <div className="mb-10 flex items-start gap-14 pt-2 pb-2 text-center">
          <div>
            <span className="text-2xl font-bold">300+</span>
            <p className="text-sm font-semibold">
              Happy <br />
              Clients
            </p>
          </div>
          <div>
            <span className="text-2xl font-bold">900+</span>
            <p className="text-sm font-semibold">
              Amazing <br />
              Projects
            </p>
          </div>
          <div>
            <span className="text-2xl font-bold">20+</span>
            <p className="text-sm font-semibold">
              Awards <br />
              Received
            </p>
          </div>
        </div>
        <div className="blue-grad flex max-w-2xl items-center gap-10 px-10 py-4">
          <div>
            <div>
              <span className="text-2xl font-semibold">25 </span>
              <span className="text-sm">Years</span>
            </div>
            <div className="font-semibold">Operated</div>
          </div>
          <div className="text-lg">
            As a trusted general project that has been operating for 25 years,
            our commitment is always to prioritize our client satisfaction
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
