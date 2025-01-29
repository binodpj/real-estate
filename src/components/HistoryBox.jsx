import React from "react";

const HistoryBox = () => {
  return (
    <div className="blue-grad flex flex-col gap-4 p-6 text-white lg:hidden">
      <div className="flex justify-between">
        <div>
          <span className="text-4xl font-semibold">25</span>
          <span className="text-2xl font-semibold">
            Years <br />
            Operated
          </span>
        </div>
        <span className="text-2xl font-semibold">LOGO</span>
      </div>
      <div>
        <p className="text-sm">
          As a trusted general project that has been operating for 25 years, our
          commitment is always to prioritize our client satisfaction.
        </p>
      </div>
      <div className="flex justify-evenly pt-2 pb-2 text-center">
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
    </div>
  );
};

export default HistoryBox;
