import React from "react";
import Head from "../header/Head";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { projectData } from "../../db/project-db";
import Card from "../cardProject/Card";

const ProjectList = () => {
    window.scrollTo(0, 0);
  return (
    <div>
      <Head />
      <Header />
      <div className="bg-white mt-16">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-10">
          <h2 className="text-4xl text-center text-gray-900">
            Furniture Projects
          </h2>
          <p className="leading-relaxed my-6">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
          <h1 className="mb-2">
            Number of Furniture Projects {projectData?.length}{" "}
          </h1>
          <div className="border-b-2"></div>
          <div className="mt-4 grid grid-cols-1 gap-x-4 gap-y-5 sm:grid-cols-2 md:grid-cols-2 md:gap-x-2 lg:grid-cols-4 xl:gap-x-3">
            {projectData.map((item) => (
              <div key={item.id}>
                <Card img={item.img} title={item.title} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProjectList;
