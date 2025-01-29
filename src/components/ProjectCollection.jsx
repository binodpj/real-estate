import React from "react";

const ProjectCollection = () => {
  return (
    <div className="px-5 py-8 lg:px-24" id="projects">
      <h1 className="text-2xl pb-4 lg:text-4xl font-semibold">
        Our collection best project
      </h1>
      <div className="flex flex-wrap justify-evenly gap-5">
        <div className="lg:h-96 lg:w-[20%]">
          <img src="project1.png" alt="project_img" className="h-full w-full" />
        </div>
        <div className="lg:h-96 lg:w-[20%]">
          <img src="project2.png" alt="project_img" className="h-full w-full" />
        </div>
        <div className="lg:h-96 lg:w-[20%]">
          <img src="project3.png" alt="project_img" className="h-full w-full" />
        </div>
        <div className="lg:h-96 lg:w-[20%]">
          <img src="project4.png" alt="project_img" className="h-full w-full" />
        </div>
        {/* <img src="project2.png" alt="project_img" />
        <img src="project3.png" alt="project_img" />
        <img src="project4.png" alt="project_img" /> */}
      </div>
    </div>
  );
};

export default ProjectCollection;
