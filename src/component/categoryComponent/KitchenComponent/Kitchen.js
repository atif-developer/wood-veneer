import React, { useState } from "react";
import Head from "../../header/Head";
import Header from "../../header/Header";
import Footer from "../../footer/Footer";
import { KitchenPriceList } from "../../../db/kitchen-db";

const Kitchen = () => {
  window.scrollTo(0, 0);
  const [searchText, setSearchText] = useState("");

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
  };
  
  const filteredData = KitchenPriceList.filter((card) =>
    card.model.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div>
      <Head />
      <Header />
      <div className="bg-white mt-32">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-10">
          <h2 className="text-4xl text-center text-gray-900">
            Kitchen Price list
          </h2>
          <p className="leading-relaxed my-6">
            Discover our latest wardrobe projects that combine style,
            functionality, and innovation to create perfect storage solutions
            for your home. Explore various designs and find the perfect fit for
            your space.
          </p>
          <div>
            <form className="max-w-md mx-auto">
              <label
                htmlFor="default-search"
                className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
              >
                Search
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search"
                  autoComplete="off"
                  value={searchText}
                  onChange={handleSearchChange}
                  className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search Kitchen Projects..."
                />
              </div>
            </form>
          </div>
          <h1 className="mb-2">
            Number of Kitchen Projects {KitchenPriceList.length}
          </h1>
          <div className="border-b-2"></div>
          {filteredData.length > 0 ? (
            <div className="mt-4 grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4">
              {filteredData.map((card) => (
                <div key={card.id} className="">
                  <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-slate-600 dark:hover:bg-slate-600">
                    <img
                      className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg lg:h-[210px]"
                      src={card?.img}
                      alt=""
                    />
                    <div className="flex flex-col justify-between p-4 leading-normal">
                      <h5 className=" text-md font-bold tracking-tight text-gray-900 dark:text-white">
                        Model {card?.model}
                      </h5>
                      <h5 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Price Rs {card?.price}
                      </h5>
                      <ul className="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
                        {card &&
                          card.Data.map((detail, index) => (
                            <li key={index}>{detail?.title}</li>
                          ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="my-16">
              <h1 className="text-red-500 text-3xl text-center">
                No Data Found Search another Model
              </h1>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Kitchen;
