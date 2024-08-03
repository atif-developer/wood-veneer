'use client'
import React from "react";
import { FaEye } from "react-icons/fa6";

const CardKitchen = ({ img, title, buttonColor, openModal }) => {
  return (
    <div className="bg-white">
      <div className="relative w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow overflow-hidden transition duration-300">
        <div className="relative group">
          {img ? (
            <img
              className="w-full h-96 object-cover transition-transform duration-300 ease-in-out group-hover:brightness-75"
              src={img}
              alt="product image"
            />
          ) : (
            <div className="w-full h-96 bg-gray-200 flex items-center justify-center">
              <span className="text-gray-500">No Image Available</span>
            </div>
          )}
          <div className="absolute inset-0 flex items-center justify-center">
            <h3 className="text-xl font-semibold text-white bg-gray-900 bg-opacity-50 px-4 py-2 rounded-md">
              {title || "No Title"}
            </h3>
          </div>
          <div className="absolute inset-0 bg-gray-100 opacity-0 group-hover:opacity-50 transition duration-300 ease-in-out">
            <button
              className={`px-5 py-3 bg-orange-500 text-white`}
              onClick={openModal}
            >
              <FaEye />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardKitchen;
