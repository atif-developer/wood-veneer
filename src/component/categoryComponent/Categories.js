import React from "react";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div>
      <div className="bg-white" id="categories">
        <div className="mx-auto max-w-2xl px-4 py-2 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-center text-gray-900">
            Categories make the perfect furniture:
          </h2>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-2">
            {/* First Column with one div */}
            <div className="max-w-full bg-white border border-gray-200 rounded-lg shadow overflow-hidden flex flex-col">
              <Link to="/KitchenProjects" className="relative group flex-1">
                <img
                  alt="gallery"
                  className="object-cover w-full h-[540px]"
                  src="https://plus.unsplash.com/premium_photo-1661954525357-c4b79d333720?q=80&w=3342&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-25 transition-opacity duration-300"></div>
              </Link>
              <div className="p-2 bg-slate-400 text-center">
                <h5 className="mb-0 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Kitchen Furniture
                </h5>
              </div>
            </div>
            {/* Second Column with two divs (cards) */}
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-2">
              <div className="max-w-full bg-white border border-gray-200 rounded-lg shadow overflow-hidden flex flex-col">
                <Link to="/Kitchen" className="relative group flex-1">
                  <img
                    className="object-cover w-full h-[240px]"
                    src="https://plus.unsplash.com/premium_photo-1674815329032-421d305ad589?q=80&w=3438&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Wardrobe"
                  />
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-25 transition-opacity duration-300"></div>
                </Link>
                <div className="p-2 bg-slate-400 text-center">
                  <h5 className="mb-0 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Kitchen B
                  </h5>
                </div>
              </div>
              <div className="max-w-full bg-white border border-gray-200 rounded-lg shadow overflow-hidden flex flex-col">
                <Link to="/WardrobeList" className="relative group flex-1">
                  <img
                    className="object-cover w-full h-[240px]"
                    src="https://images.unsplash.com/photo-1701421047855-d7bafd8d6f69?q=80&w=3280&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Wardrobe"
                  />
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-25 transition-opacity duration-300"></div>
                </Link>
                <div className="p-2 bg-slate-400 text-center">
                  <h5 className="mb-0 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Kitchen Panels
                  </h5>
                </div>
              </div>
              <div className="max-w-full bg-white border border-gray-200 rounded-lg shadow overflow-hidden flex flex-col">
                <Link to="/WardrobeList" className="relative group flex-1">
                  <img
                    className="object-cover w-full h-[240px]"
                    src="https://plus.unsplash.com/premium_photo-1674815329032-421d305ad589?q=80&w=3438&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Wardrobe"
                  />
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-25 transition-opacity duration-300"></div>
                </Link>
                <div className="p-2 bg-slate-400 text-center">
                  <h5 className="mb-0 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Wardrobe
                  </h5>
                </div>
              </div>

              <div className="max-w-full bg-white border border-gray-200 rounded-lg shadow overflow-hidden flex flex-col">
                <a href="#" className="relative group flex-1">
                  <img
                    className="object-cover w-full h-[240px]"
                    src="https://images.unsplash.com/photo-1521607630287-ee2e81ad3ced?q=80&w=3272&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Media Wall"
                  />
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-25 transition-opacity duration-300"></div>
                </a>
                <div className="p-2 bg-slate-400 text-center">
                  <h5 className="mb-0 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Media Wall
                  </h5>
                </div>
              </div>

            </div>

            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-2">
              <div className="max-w-full bg-white border border-gray-200 rounded-lg shadow overflow-hidden flex flex-col">
                <Link to="/WardrobeList" className="relative group flex-1">
                  <img
                    className="object-cover w-full h-[240px]"
                    src="https://plus.unsplash.com/premium_photo-1682144668141-f72535882bcb?q=80&w=3269&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Wardrobe"
                  />
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-25 transition-opacity duration-300"></div>
                </Link>
                <div className="p-2 bg-slate-400 text-center">
                  <h5 className="mb-0 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Wood Venners
                  </h5>
                </div>
              </div>
              <div className="max-w-full bg-white border border-gray-200 rounded-lg shadow overflow-hidden flex flex-col">
                <Link to="/WardrobeList" className="relative group flex-1">
                  <img
                    className="object-cover w-full h-[240px]"
                    src="https://images.unsplash.com/photo-1484842641800-6767207f4220?q=80&w=3269&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Wardrobe"
                  />
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-25 transition-opacity duration-300"></div>
                </Link>
                <div className="p-2 bg-slate-400 text-center">
                  <h5 className="mb-0 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Corian
                  </h5>
                </div>
              </div>
              <div className="max-w-full bg-white border border-gray-200 rounded-lg shadow overflow-hidden flex flex-col">
                <Link to="/WardrobeList" className="relative group flex-1">
                  <img
                    className="object-cover w-full h-[240px]"
                    src="https://images.unsplash.com/photo-1550697318-929498858774?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Wardrobe"
                  />
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-25 transition-opacity duration-300"></div>
                </Link>
                <div className="p-2 bg-slate-400 text-center">
                  <h5 className="mb-0 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Doors
                  </h5>
                </div>
              </div>

              <div className="max-w-full bg-white border border-gray-200 rounded-lg shadow overflow-hidden flex flex-col">
                <a href="#" className="relative group flex-1">
                  <img
                    className="object-cover w-full h-[240px]"
                    src="https://images.unsplash.com/photo-1441105501384-23156f198d37?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Media Wall"
                  />
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-25 transition-opacity duration-300"></div>
                </a>
                <div className="p-2 bg-slate-400 text-center">
                  <h5 className="mb-0 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Windows
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
                  src="https://plus.unsplash.com/premium_photo-1671269943825-e45b177add8f?q=80&w=3426&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-25 transition-opacity duration-300"></div>
              </Link>
              <div className="p-2 bg-slate-400 text-center">
                <h5 className="mb-0 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Bedsets
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
