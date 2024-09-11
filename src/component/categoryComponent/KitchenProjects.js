import React, { useState } from "react";
import CardKitchen from "./kitchenCard/CardKitchen";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { IoLogoWhatsapp } from "react-icons/io";
import { Link } from "react-router-dom";
import { kitchenData } from "../../db/kitchen-db";

const KitchenProjects = () => {
  window.scrollTo(0, 0);
  const openModal = (content) => {
    // Add your modal opening logic here
    setModalContent(content);
    setMainImage(content.images[0]);
    setIsModalOpen(true);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [mainImage, setMainImage] = useState(null);
  const [searchText, setSearchText] = useState("");

  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent(null);
    setMainImage(null);
  };

  const handleImageClick = (image) => {
    setMainImage(image);
  };

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
  };

  const filteredData = kitchenData.filter((card) =>
    card.title.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div>
      <Header />
      <div className="bg-white mt-10">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-10">
          <h2 className="text-4xl text-center text-gray-900 font-themeFont">
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
            Number of Kitchen Projects {filteredData.length}
          </h1>
          <div className="border-b-2"></div>
          {filteredData.length > 0 ? (
            <div className="mt-4 grid grid-cols-1 gap-x-4 gap-y-5 sm:grid-cols-2 md:grid-cols-2 md:gap-x-2 lg:grid-cols-4 xl:gap-x-3">
              {filteredData.map((card, index) => (
                <CardKitchen
                  key={index}
                  img={card.img}
                  title={card.title}
                  openModal={() => openModal(card.projectPerson)}
                />
              ))}
            </div>
          ) : (
            <div className="my-16">
              <h1 className="text-themeOranage text-3xl text-center font-themeFont">
                No Data Found Search another project
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
                <h3 className="text-xl font-semibold text-gray-900 dark:text-dark">
                  {modalContent?.name || "Modal Title"}
                </h3>
                <button
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
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

              <div className="p-4 md:p-5 space-y-4">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-dark text-center">
                  {/* {modalContent?.title || "Modal Title"} */} Project
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-2">
                  <div>
                    <div className="grid gap-4">
                      <div>
                        {mainImage && (
                          <img
                            className="h-auto max-w-full rounded-lg"
                            src={mainImage}
                            alt="Featured Image"
                          />
                        )}
                      </div>
                      <div className="grid grid-cols-5 gap-4">
                        {modalContent?.images.slice(1).map((image, index) => (
                          <div
                            key={index}
                            onClick={() => handleImageClick(image)}
                            className="cursor-pointer"
                          >
                            <img
                              className="h-auto max-w-full rounded-lg"
                              src={image}
                              alt={`Gallery Image ${index + 1}`}
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  {/* <div>
                    <div className="text-center">
                      <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          className="w-10 h-10"
                          viewBox="0 0 24 24"
                        >
                          <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                          <circle cx={12} cy={7} r={4} />
                        </svg>
                      </div>
                      <div className="flex flex-col items-center text-center justify-center">
                        <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">
                          {modalContent?.name || "Modal Title"}
                        </h2>
                        <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4" />
                        <Link
                          to={`https://wa.me/${modalContent?.number}`}
                          className="flex items-center justify-center"
                        >
                          <IoLogoWhatsapp
                            className="text-white bg-green-600 p-2 rounded-full me-2"
                            size={40}
                          />{" "}
                          Chat with Us
                        </Link>
                        <p className="text-base mt-3">
                          {modalContent?.description || "Modal Description"}
                        </p>
                      </div>
                    </div>
                  </div> */}
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

export default KitchenProjects;
