import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Team = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:px-24 lg:gap-32 items-center">
      <div className="relative m-auto mt-4 h-80 w-86 bg-[url(expert-background.png)] bg-cover lg:min-w-[420px]">
        <div className="absolute top-39 left-12 flex h-63 w-63 flex-col items-center justify-center gap-2 bg-[#474747] p-6 text-white lg:top-10 lg:left-64">
          <div>
            <img src="expert.png" alt="" />
          </div>
          <h1 className="pt-1 text-xl font-semibold">Dianne Russell</h1>
          <p className="text-center text-sm">
            More than 20 years of experience in the fieldarchitecture and has
            worked on project up to 100+
          </p>
        </div>
      </div>

      <div className="mx-5 mt-38 lg:mt-0">
        <h1 className="text-2xl font-semibold">
          Meet and talk with our best architecture
        </h1>
        <p className="p-color my-4 lg:text-lg">
          All our teams are professional and competent in their fields and will
          help you realize your dream building with the excellent result.
        </p>
        <div className="flex justify-between">
          <button className="blue-grad cursor-pointer rounded-sm px-3 py-1.5 text-white drop-shadow-2xl">
            See all team
          </button>
          <div>
            <a
              href="#"
              className="flex cursor-pointer items-center gap-2 font-semibold hover:border-b-1"
            >
              How it works <FontAwesomeIcon icon={faArrowRight} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
