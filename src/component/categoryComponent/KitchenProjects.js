import React, { useState } from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { kitchenProjectsData } from "../../db/kitchen-db";
import Card from "../categoryComponent/KitchenProject/Card/Card";

const KitchenProjects = () => {
  window.scrollTo(0, 0);
  const [searchText, setSearchText] = useState("");

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
  };

  const filteredData = kitchenProjectsData.filter((card) =>
    card.title.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div>
      <Header />
      <div className="bg-white mt-10">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-10">
          <h2 className="text-4xl text-center text-gray-900">
            Kitchen Projects
          </h2>
          <p className="leading-relaxed my-6 font-themeFont">
            Our kitchen furniture collection brings both style and functionality
            to your cooking space. Whether you're looking for modern or
            traditional designs, our range offers something to suit every taste.
            From sleek cabinets and spacious countertops to comfortable seating
            and practical storage solutions, each piece is crafted to enhance
            your kitchen's efficiency and aesthetics. Transform your kitchen
            into the heart of your home with our expertly designed furniture.
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
                  value={searchText}
                  onChange={handleSearchChange}
                  className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-themeOranage focus:border-themeOranage dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-themeOranage dark:focus:border-themeOranage"
                  placeholder="Search Kitchen Projects..."
                />
              </div>
            </form>
          </div>
          <h1 className="mb-2 font-themeFont">
            Number of Kitchen Projects {kitchenProjectsData?.length}
          </h1>
          <div className="border-b-2"></div>
          {filteredData.length > 0 ? (
            <div className="mt-4 grid grid-cols-1 gap-x-4 gap-y-5 sm:grid-cols-2 md:grid-cols-2 md:gap-x-2 lg:grid-cols-3 xl:gap-x-3">
              {filteredData.map((item) => (
                <div key={item.id}>
                  <Card title={item.title} img={item.img} pageUrl={item.pageUrl} />
                </div>
              ))}
            </div>
          ) : (
            <div className="my-16">
              <h1 className="text-themeOranage text-3xl text-center font-themeFont th">
                No Data Found Search another project
              </h1>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default KitchenProjects;
