import React from "react";
import { Link } from "react-router-dom";

const Card = ({ pageUrd, img, title }) => {
  return (
    <div className="max-w-full bg-white border border-gray-200 rounded-lg shadow overflow-hidden flex flex-col">
      <Link to={pageUrd} className="relative group flex-1">
        <img
          className="object-cover w-full h-[250px]"
          src={img}
          alt="Wardrobe"
        />
        <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-25 transition-opacity duration-300"></div>
        {/* <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="bg-themeOranage text-white px-4 py-2 rounded">
            Learn More
          </button>
        </div> */}
      </Link>
      <div className="p-2 bg-themeOranage text-center">
        <h5 className="mb-0 font-themeFont font-bold tracking-tight text-white">
          {title}
        </h5>
      </div>
    </div>
  );
};

export default Card;
