import React from "react";

const Brands = () => {
  return (
    <div className="flex gap-2 overflow-x-auto justify-evenly">
      <div className="mt-4 mb-2 grid min-w-40 place-items-center">
        <img src="brands/logo1.png" alt="brand" />
      </div>
      <div className="mt-4 mb-2 grid min-w-40 place-items-center">
        <img src="brands/logo2.png" alt="brand" />
      </div>
      <div className="mt-4 mb-2 grid min-w-40 place-items-center">
        <img src="brands/logo3.png" alt="brand" />
      </div>
      <div className="mt-4 mb-2 grid min-w-40 place-items-center">
        <img src="brands/logo4.png" alt="brand" />
      </div>
      <div className="mt-4 mb-2 grid min-w-40 place-items-center">
        <img src="brands/logo5.png" alt="brand" />
      </div>
    </div>
  );
};

export default Brands;
