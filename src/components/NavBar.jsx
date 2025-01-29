import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const MobileNav = ({ isOpen, toggleOpen }) => {
  return (
    <div className="black-grad z-50 h-screen w-3xs px-10 py-5 text-white">
      <span>
        <FontAwesomeIcon
          icon={faXmark}
          onClick={toggleOpen}
          className="cursor-pointer pb-6 text-2xl"
        />
      </span>
      <ul className="flex flex-col gap-10">
        <li>
          <a href="#home" className="hover:border-b-[1px]" onClick={toggleOpen}>
            Home
          </a>
        </li>
        <li>
          <a
            href="#services"
            className="hover:border-b-[1px]"
            onClick={toggleOpen}
          >
            Services
          </a>
        </li>

        <li>
          <a
            href="#about-us"
            className="hover:border-b-[1px]"
            onClick={toggleOpen}
          >
            About Us
          </a>
        </li>

        <li>
          <a
            href="#articles"
            className="hover:border-b-[1px]"
            onClick={toggleOpen}
          >
            Articles
          </a>
        </li>

        <li>
          <a
            href="#projects"
            className="hover:border-b-[1px]"
            onClick={toggleOpen}
          >
            Our Projects
          </a>
        </li>
      </ul>
    </div>
  );
};

const NavBar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div>
      {isOpen && (
        <div className="absolute top-0 left-0 h-screen w-screen bg-[#000000a3]"></div>
      )}

      <div className="fixed top-0 left-0 z-50 min-h-10 w-full">
        <div>
          <div className="flex cursor-pointer items-center justify-between bg-[#2B2B2B] px-5 py-1 text-2xl text-white lg:hidden">
            <p className="font-semibold">LOGO</p>
          </div>
          <div className="absolute top-0 right-0 text-xl text-white lg:hidden">
            {isOpen ? (
              <MobileNav isOpen={isOpen} toggleOpen={toggleOpen} />
            ) : (
              <FontAwesomeIcon
                icon={faBars}
                onClick={toggleOpen}
                className="px-5 py-2"
              />
            )}
          </div>
        </div>

        <div className="fixed hidden w-full items-center justify-between bg-[#2B2B2B] px-10 py-2 text-white lg:flex">
          <p className="text-2xl font-semibold">LOGO</p>
          <ul className="flex gap-10">
            <li>
              <a href="#home" className="hover:border-b-[1px]">
                Home
              </a>
            </li>
            <li>
              <a href="#services" className="hover:border-b-[1px]">
                Services
              </a>
            </li>

            <li>
              <a href="#about-us" className="hover:border-b-[1px]">
                About Us
              </a>
            </li>

            <li>
              <a href="#articles" className="hover:border-b-[1px]">
                Articles
              </a>
            </li>

            <li>
              <a href="#projects" className="hover:border-b-[1px]">
                Our Projects
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
