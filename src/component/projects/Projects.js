import React from "react";
import Card from '../cardProject/Card'
import { Link } from "react-router-dom";
import { projectData } from "../../db/project-db";

const Projects = () => {
  const proImage1 =
  "https://images.unsplash.com/photo-1513716875652-59c99449ee70?q=80&w=3051&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const proImage2 = "https://plus.unsplash.com/premium_photo-1672883552313-17a6f34ff1a0?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  const proImage3 =
   "https://images.unsplash.com/photo-1496180727794-817822f65950?q=80&w=2200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  const proImage4 = 
  "https://plus.unsplash.com/premium_photo-1677456382584-a29513071920?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  const proImage5 =
   "https://images.unsplash.com/photo-1521607630287-ee2e81ad3ced?q=80&w=3272&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  const proImage6 = 
  "https://images.unsplash.com/photo-1521401292936-0a2129a30b1c?q=80&w=2416&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

  return (
    <div className="bg-white" id="projects">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-10">
        <h2 className="text-4xl text-center text-gray-900">Projects</h2>
        <div className="mt-4 grid grid-cols-1 gap-x-4 gap-y-5 sm:grid-cols-2 md:grid-cols-2 md:gap-x-2 lg:grid-cols-3 xl:gap-x-4">
        {projectData.slice(0,6).map((item) => (
              <div key={item.id}>
                <Card img={item.img} title={item.title} />
              </div>
            ))}
        {/* <Card 
          img={proImage1}
          title="Mirror"
        />
        <Card 
          img={proImage2}
          title="Shoerack"
        />
         <Card 
          img={proImage3}
          title="Decor"
        />
        <Card 
          img={proImage4}
          title="Shelf"
        />
        <Card 
          img={proImage5}
          title="Tv Console"
        />
        <Card 
          img={proImage6}
          title="Coffee Table"
        /> */}
          {/* <div className="relative w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow overflow-hidden transition duration-300">
            <div className="relative group">
              <img
                className="w-full h-96 object-cover transition-transform duration-300 ease-in-out group-hover:brightness-75"
                src="https://images.unsplash.com/photo-1513716875652-59c99449ee70?q=80&w=3051&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="product image"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-xl font-semibold text-white bg-gray-900 bg-opacity-50 px-4 py-2 rounded-md">
                  Mirror
                </h3>
              </div>
              <div className="absolute inset-0 bg-gray-100 opacity-0 group-hover:opacity-50 transition duration-300 ease-in-out"></div>
            </div>
          </div> */}
        </div>
        <div className="text-center mt-4">
            <Link to='/ProjectList' className="px-6 py-2 border rounded-lg border-slate-400 bg-white text-slate-500 hover:bg-slate-400 hover:text-white">View More</Link>
        </div>
      </div>
    </div>
  );
};

export default Projects;
