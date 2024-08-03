import React from "react";

const Card = ({ img, title }) => {
  return (
    <div className="bg-white">
      <div className="relative w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow overflow-hidden transition duration-300">
        <div className="relative group">
          <img
            className="w-full h-96 object-cover transition-transform duration-300 ease-in-out group-hover:brightness-75"
            src={img}
            alt="product image"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <h3 className="text-xl font-semibold text-white bg-gray-900 bg-opacity-50 px-4 py-2 rounded-md">
              {title}
            </h3>
          </div>
          <div className="absolute inset-0 bg-gray-100 opacity-0 group-hover:opacity-50 transition duration-300 ease-in-out">
            {/* <button className="px-5 py-3 bg-slate-400 text-white">Eye</button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
