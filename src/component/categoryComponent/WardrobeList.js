import React, { useState } from "react";
import Head from "../header/Head";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { WardrobeData } from "../../db/Wardrobe-db";
import { FaEye } from "react-icons/fa6";

const WardrobeList = () => {
  window.scrollTo(0, 0);
  const openModal = (content) => {
    setModalContent(content);
    setMainImage(content.projectPerson.images[0]);
    setIsModalOpen(true);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [mainImage, setMainImage] = useState(null);
  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent(null);
    setMainImage(null);
  };

  const handleImageClick = (image) => {
    setMainImage(image);
  };
  return (
    <div>
      <Head />
      <Header />
      <div className="bg-white mt-20">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-10">
          <h2 className="text-4xl text-center text-gray-900">
            Wardrobe Project
          </h2>
          <p className="leading-relaxed my-6">
            Discover our latest wardrobe projects that combine style,
            functionality, and innovation to create perfect storage solutions
            for your home. Explore various designs and find the perfect fit for
            your space.
          </p>
          <h1 className="mb-2">
            Number of Wardrobe Projects {WardrobeData?.length}
          </h1>
          <div className="border-b-2"></div>

          {WardrobeData.length > 0 ? (
            <div className="mt-4 grid grid-cols-1 gap-x-4 gap-y-5 sm:grid-cols-2 md:grid-cols-2 md:gap-x-2 lg:grid-cols-4 xl:gap-x-3">
              {WardrobeData.map((card) => (
                <div
                  className="relative w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow overflow-hidden transition duration-300"
                  key={card.id}
                >
                  <div className="relative group">
                    {card.img ? (
                      <img
                        className="w-full h-96 object-cover transition-transform duration-300 ease-in-out group-hover:brightness-75"
                        src={card?.img}
                        alt="product image"
                      />
                    ) : (
                      <div className="w-full h-96 bg-gray-200 flex items-center justify-center">
                        <span className="text-gray-500">
                          No Image Available
                        </span>
                      </div>
                    )}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <h3 className="text-xl font-semibold text-white bg-gray-900 bg-opacity-50 px-4 py-2 rounded-md">
                        {card?.title || "No Title"}
                      </h3>
                    </div>
                    <div className="absolute inset-0 bg-gray-100 opacity-0 group-hover:opacity-50 transition duration-300 ease-in-out">
                      <button
                        className={`px-5 py-3 bg-orange-500 text-white`}
                        onClick={() => openModal(card)}
                      >
                        <FaEye />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="my-16">
              <h1 className="text-red-500 text-3xl text-center">
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
                  Project
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
                        {modalContent?.projectPerson?.images
                          .slice(1)
                          .map((image, index) => (
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

export default WardrobeList;
