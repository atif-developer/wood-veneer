import React from "react";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div>
      <div className="bg-white" id="categories">
        <div className="mx-auto max-w-2xl px-4 py-2 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-10">
          <h2 className="text-2xl font-themeFont sm:text-3xl md:text-4xl text-gray-900">
            Categories:
          </h2>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-2">
            {/* First Column with one div */}
            <div className="max-w-full bg-white border border-gray-200 rounded-lg shadow overflow-hidden flex flex-col">
              <Link to="/KitchenProjects" className="relative group flex-1">
                <img
                  alt="gallery"
                  className="object-cover w-full h-[540px]"
                  src="https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/2K1/1.jpg"
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-25 transition-opacity duration-300"></div>
              </Link>
              <div className="p-2 bg-themeOranage text-center">
                <h5 className="mb-0 font-themeFont text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Kitchen
                </h5>
              </div>
            </div>
            {/* Second Column with two divs (cards) */}
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-2">
              <div className="max-w-full bg-white border border-gray-200 rounded-lg shadow overflow-hidden flex flex-col">
                <Link to="/Kitchen" className="relative group flex-1">
                  <img
                    className="object-container w-full h-[240px]"
                    src="https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/kitchen-test.jpeg"
                    alt="Wardrobe"
                  />
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-25 transition-opacity duration-300"></div>
                </Link>
                <div className="p-2 bg-themeOranage text-center">
                  <h5 className="mb-0 font-themeFont text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Kitchen Appliances
                  </h5>
                </div>
              </div>
              <div className="max-w-full bg-white border border-gray-200 rounded-lg shadow overflow-hidden flex flex-col">
                <Link to="/WardrobeList" className="relative group flex-1">
                  <img
                    className="object-container w-full h-[240px]"
                    src="https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/0/2.jpg"
                    alt="Wardrobe"
                  />
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-25 transition-opacity duration-300"></div>
                </Link>
                <div className="p-2 bg-themeOranage text-center">
                  <h5 className="mb-0 font-themeFont text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Wardrobes
                  </h5>
                </div>
              </div>
              <div className="max-w-full bg-white border border-gray-200 rounded-lg shadow overflow-hidden flex flex-col">
                <Link to="/MediaWall" className="relative group flex-1">
                  <img
                    className="object-container w-full h-[240px]"
                    src="https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/Media+Wall++No+4/LCD+console/19.jpg"
                    alt="Wardrobe"
                  />
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-25 transition-opacity duration-300"></div>
                </Link>
                <div className="p-2 bg-themeOranage text-center">
                  <h5 className="mb-0 font-themeFont text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Media Wall
                  </h5>
                </div>
              </div>

              <div className="max-w-full bg-white border border-gray-200 rounded-lg shadow overflow-hidden flex flex-col">
                <Link to="/Corian" className="relative group flex-1">
                  <img
                    className="object-container w-full h-[240px]"
                    src="https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/Corian-img/2.jpg"
                    alt="Media Wall"
                  />
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-25 transition-opacity duration-300"></div>
                </Link>
                <div className="p-2 bg-themeOranage text-center">
                  <h5 className="mb-0 font-themeFont text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Corian Vinity
                  </h5>
                </div>
              </div>

            </div>

            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-2">
              <div className="max-w-full bg-white border border-gray-200 rounded-lg shadow overflow-hidden flex flex-col">
                <Link to="/BedRoom" className="relative group flex-1">
                  <img
                    className="object-cover w-full h-[240px]"
                    src="https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/BedRoomImges/bedset/25.jpg"
                    alt="Wardrobe"
                  />
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-25 transition-opacity duration-300"></div>
                </Link>
                <div className="p-2 bg-themeOranage text-center">
                  <h5 className="mb-0 font-themeFont font-bold tracking-tight text-gray-900 dark:text-white">
                    Bed Room
                  </h5>
                </div>
              </div>
              <div className="max-w-full bg-white border border-gray-200 rounded-lg shadow overflow-hidden flex flex-col">
                <Link to="/Sofa" className="relative group flex-1">
                  <img
                    className="object-cover w-full h-[240px]"
                    src="https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/SofeSeat-img/2.jpg"
                    alt="Wardrobe"
                  />
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-25 transition-opacity duration-300"></div>
                </Link>
                <div className="p-2 bg-themeOranage text-center">
                  <h5 className="mb-0 font-themeFont font-bold tracking-tight text-gray-900 dark:text-white">
                      Sofa Seat
                  </h5>
                </div>
              </div>
              <div className="max-w-full bg-white border border-gray-200 rounded-lg shadow overflow-hidden flex flex-col">
                <Link to="/Doors" className="relative group flex-1">
                  <img
                    className="object-contain w-full h-[240px]"
                    src="https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/Door-img/1.JPG"
                    alt="Wardrobe"
                  />
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-25 transition-opacity duration-300"></div>
                </Link>
                <div className="p-2 bg-themeOranage text-center">
                  <h5 className="mb-0 font-themeFont font-bold tracking-tight text-gray-900 dark:text-white">
                      Door
                  </h5>
                </div>
              </div>

              <div className="max-w-full bg-white border border-gray-200 rounded-lg shadow overflow-hidden flex flex-col">
                <Link to="/WoodVenner" className="relative group flex-1">
                  <img
                    className="object-cover w-full h-[240px]"
                    src="https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/Wood-Veneer-img/1.jpg"
                    alt="Media Wall"
                  />
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-25 transition-opacity duration-300"></div>
                </Link>
                <div className="p-2 bg-themeOranage text-center">
                  <h5 className="mb-0 font-themeFont font-bold tracking-tight text-gray-900 dark:text-white">
                      Wood Veneer
                  </h5>
                </div>
              </div>
            </div>
            
            {/* First Column with one div */}
            <div className="max-w-full bg-white border border-gray-200 rounded-lg shadow overflow-hidden flex flex-col">
              <Link to="#" className="relative group flex-1">
                <img
                  alt="gallery"
                  className="object-cover w-full h-[540px]"
                  src="https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/0/1.jpg"
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-25 transition-opacity duration-300"></div>
              </Link>
              <div className="p-2 bg-themeOranage text-center">
                <h5 className="mb-0 font-themeFont font-bold tracking-tight text-gray-900 dark:text-white">
                  kitchen & Wardrobe 
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;