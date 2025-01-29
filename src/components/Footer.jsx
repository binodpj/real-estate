import {
  faFacebook,
  faLinkedin,
  faSquareInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Footer = () => {
  return (
    <div className="black-grad flex flex-col lg:flex-row gap-10 px-8 sm:px-30 py-20 text-white">
      <div className="lg:w-[65%]">
        <h1 className="mb-4 text-xl font-semibold">LOGO</h1>
        <p className="text-lg">
          We are general contractor company based in Jakarta. More than 25 years
          of experience in building and carving out Indonesia's development.
        </p>

        <div className="mt-8 flex gap-2">
          <FontAwesomeIcon
            icon={faTwitter}
            className="cursor-pointer rounded-full bg-gray-700 p-3 ease-in hover:text-gray-400"
          />
          <FontAwesomeIcon
            icon={faSquareInstagram}
            className="cursor-pointer rounded-full bg-gray-700 p-3 ease-in hover:text-gray-400"
          />
          <FontAwesomeIcon
            icon={faLinkedin}
            className="cursor-pointer rounded-full bg-gray-700 p-3 ease-in hover:text-gray-400"
          />
          <FontAwesomeIcon
            icon={faFacebook}
            className="cursor-pointer rounded-full bg-gray-700 p-3 ease-in hover:text-gray-400"
          />
        </div>
      </div>

      <div className="flex lg:w-[35%] justify-evenly">
        <div>
          <h2 className="font-semibold-bold mb-6 text-lg font-semibold">Company</h2>
          <div>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href="#"
                  className="cursor-pointer ease-in hover:text-gray-400"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="cursor-pointer ease-in hover:text-gray-400"
                >
                  How it Works
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="cursor-pointer ease-in hover:text-gray-400"
                >
                  Team
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="cursor-pointer ease-in hover:text-gray-400"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div>
          <h2 className="font-semibold-bold mb-6 text-lg font-semibold">More</h2>
          <div>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href="#"
                  className="cursor-pointer ease-in hover:text-gray-400"
                >
                  Documentation
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="cursor-pointer ease-in hover:text-gray-400"
                >
                  License
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
