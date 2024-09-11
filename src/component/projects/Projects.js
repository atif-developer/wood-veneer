import React from "react";
import Card from "../cardProject/Card";
import { Link } from "react-router-dom";
import { projectData } from "../../db/project-db";

const Projects = () => {
  return (
    <div className="bg-white" id="projects">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-10">
        <h2 className="text-4xl text-gray-900">Projects make the perfect furniture:</h2>
        <div className="mt-4 grid grid-cols-1 gap-x-4 gap-y-5 sm:grid-cols-2 md:grid-cols-2 md:gap-x-2 lg:grid-cols-3 xl:gap-x-4">
          {projectData.slice(0, 6).map((item) => (
            <div key={item.id}>
              <Card pageUrd={item.pageUrd} img={item.img} title={item.title} />
            </div>
          ))}
        </div>
        <div className="text-center mt-4">
          <Link
            to="/ProjectList"
            className="px-6 py-2 border rounded-lg border-[#D67F31] bg-white text-[#D67F31] hover:bg-[#D67F31] hover:text-white"
          >
            View More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Projects;
