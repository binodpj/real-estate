import React from "react";

const NewsAndUpdate = () => {
  return (
    <div className="px-5 lg:px-24" id="articles">
      <h1 className="mb-4 text-2xl font-semibold lg:text-4xl">News & Update</h1>
      <div className="flex justify-between gap-4 overflow-x-auto lg:gap-10">
        <div className="max-w-80 min-w-64">
          <div>
            <img src="paint.png" alt="" className="h-48 w-[250px]" />
          </div>
          <div>
            <div className="flex items-center gap-4 py-2">
              <div>
                <p className="text-3xl">12</p>
                <p className="text-sm">Jan</p>
              </div>
              <h3 className="text-lg">Elements of Content in Epoxy Paint </h3>
            </div>
            <p className="p-color text-sm lg:text-lg">
              Epoxy paint and epoxy floor contractor. Have you heard the two
              terms? And what does that have to do with the construction of
              existing buildings? Epoxy itself is included in the type of
              resin...{" "}
              <a href="#" className="text-blue-400">
                Read more
              </a>
            </p>
          </div>
        </div>

        <div className="max-w-80 min-w-64">
          <div>
            <img src="warehouse.png" alt="" className="h-48 w-[250px]" />
          </div>
          <div>
            <div className="flex items-center gap-4 py-2">
              <div>
                <p className="text-3xl">12</p>
                <p className="text-sm">Jan</p>
              </div>
              <h3 className="text-lg">5 Right Steps in Warehouse Planning</h3>
            </div>
            <p className="p-color text-sm lg:text-lg">
              Planning the construction of a warehouse for both industrial,
              personal and other goods storage must be done carefully. When the
              planning is done properly, the construction is..{" "}
              <a href="#" className="text-blue-400">
                Read more
              </a>
            </p>
          </div>
        </div>

        <div className="max-w-80 min-w-64">
          <div>
            <img src="house.png" alt="" className="h-48 w-[250px]" />
          </div>
          <div>
            <div className="flex items-center gap-4 py-2">
              <div>
                <p className="text-3xl">12</p>
                <p className="text-sm">Jan</p>
              </div>
              <h3 className="text-lg">
                The Right Solution to Build a Sturdy House{" "}
              </h3>
            </div>
            <p className="p-color text-sm lg:text-lg">
              Having a solid home is certainly everyone' s dream. How not, the
              house is a place where the residents can rest and take shelter
              from the bad weather...
              <a href="#" className="text-blue-400">
                Read more
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsAndUpdate;
