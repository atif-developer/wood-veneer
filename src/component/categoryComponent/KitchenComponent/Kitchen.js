import React, { useState } from "react";
import Head from "../../header/Head";
import Header from "../../header/Header";
import Footer from "../../footer/Footer";
import { KitchenPriceList } from "../../../db/kitchen-db";
import { FaEye } from "react-icons/fa6";

const Kitchen = () => {
  window.scrollTo(0, 0);
  const [searchText, setSearchText] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
  };

  const filteredData = KitchenPriceList.filter((card) =>
    card.model.toLowerCase().includes(searchText.toLowerCase())
  );

  const openModal = (content) => {
    setModalContent(content);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent(null);
  };

  return (
    <div>
      {/* <Head /> */}
      <Header />
      <div className="bg-white mt-10">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-10">
          <h2 className="text-4xl text-center text-gray-900 font-themeFont">
            Kitchen Price list
          </h2>
          <p className="leading-relaxed my-6 font-themeFont">
            Discover our latest wardrobe projects that combine style,
            functionality, and innovation to create perfect storage solutions
            for your home. Explore various designs and find the perfect fit for
            your space.
          </p>
          <div>
            <form className="max-w-md mx-auto my-4">
              <label
                htmlFor="default-search"
                className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-400"
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
                  className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-themeOranage focus:border-themeOranage dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-themeOranage dark:focus:border-themeOranage"
                  placeholder="Search Kitchen By Model Number..."
                />
              </div>
            </form>
          </div>
          <h1 className="mb-2 font-themeFont">
            Number of Kitchen Projects {KitchenPriceList.length}
          </h1>
          <div className="border-b-2"></div>
          {filteredData.length > 0 ? (
            <div className="mt-4 grid gap-x-4 gap-y-5 sm:grid-cols-1 md:grid-cols-2 md:gap-x-2 lg:grid-cols-4 xl:gap-3">
              {filteredData.map((card) => (
                <div
                  key={card?.id}
                  className="max-w-full bg-white border border-gray-200 rounded-lg shadow overflow-hidden flex flex-col"
                >
                  <div className="relative group flex-1">
                    <img
                      className="object-cover w-full h-[250px]"
                      src={card?.img}
                      alt="Wardrobe"
                    />
                    <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-25 transition-opacity duration-300"></div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button
                        className="bg-themeOranage text-white px-4 py-2 rounded"
                        onClick={() => openModal(card)}
                      >
                        <FaEye />
                      </button>
                    </div>
                  </div>
                  <div className="p-2 bg-themeOranage text-center">
                    <h5 className="mb-0 font-themeFont font-bold tracking-tight text-white">
                      Model {card?.model}
                    </h5>
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
        <div
          id="static-modal"
          tabIndex="-1"
          aria-hidden={!isModalOpen}
          className={`${
            isModalOpen ? "flex" : "hidden"
          } overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full bg-gray-900 bg-opacity-75`}
        >
          <div className="relative w-full max-w-4xl max-h-full">
            <div className="relative bg-white rounded-lg shadow dark:bg-white">
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 className="text-xl font-themeFont text-gray-900 dark:text-dark text-center">
                  {modalContent?.model || "Modal Title"}
                </h3>
                <button
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-themeOranage hover:text-white rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-themeOranage dark:hover:text-white"
                  onClick={closeModal}
                >
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              <div className="p-6 md:p-8 space-y-6">
                <h3 className="text-2xl font-themeFont text-gray-900 dark:text-dark text-center mb-6">
                  Project
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                  <div>
                    <img
                      className="h-auto max-w-full rounded-lg shadow-md"
                      src={modalContent?.img}
                      alt="Featured Image"
                    />
                  </div>
                  <div className="flex flex-col justify-between p-4">
                    <h5 className="text-lg font-themeFont font-semibold text-gray-900 mb-2">
                      Model: {modalContent?.model}
                    </h5>
                    <h5 className="text-xl md:text-2xl font-themeFont font-bold text-gray-900 mb-4">
                      Price: Rs {modalContent?.price}
                    </h5>
                    <ul className="space-y-2 text-gray-600 list-disc list-inside dark:text-gray-400">
                      {modalContent &&
                        modalContent.Data.map((detail, index) => (
                          <li
                            key={index}
                            className="text-sm md:text-base font-themeFont"
                          >
                            {detail?.title}
                          </li>
                        ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Kitchen;
