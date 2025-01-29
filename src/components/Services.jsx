import React from "react";

const Services = () => {
  return (
    <div id="services">
      <div className="p-4">
        <h1 className="pb-2 text-center text-2xl font-semibold">
          Our Excellent Services
        </h1>
        <p className="text-center text-[#b6b6b6]">
          Check out our best service you can possibly orders in building your
          company and don't forget to ask via our email or our customer service
          if you are interested in using our services
        </p>
      </div>

      <div className="flex gap-5 overflow-x-auto p-5">
        <div className="min-w-96">
          <img src="industry.png" alt="Industry" className="h-72 min-w-96" />
          <h1 className="pl-2 text-[1.2rem] font-semibold">Industrial</h1>
          <p className="p-color pl-2 text-sm">
            Industrial development is our main line of business. We do Factory
            Construction, Warehouse and others
          </p>
        </div>

        <div className="min-w-96">
          <img src="commerce.png" alt="Industry" className="h-72 min-w-96" />
          <h1 className="pl-2 text-[1.2rem] font-semibold">Commercial</h1>
          <p className="p-color pl-2 text-sm">
            Our experience building in the Commercial field includes Showrooms,
            Supermalls and Office Buildings
          </p>
        </div>

        <div className="min-w-96">
          <img src="residence.png" alt="Industry" className="h-72 min-w-96" />
          <h1 className="pl-2 text-[1.2rem] font-semibold">Resedential</h1>
          <p className="p-color pl-2 text-sm">
            Residential development is the beginning that has shaped us to this
            day. Our development includes Houses & Apartments
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
