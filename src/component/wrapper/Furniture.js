import React from "react";

export const Furniture = () => {
  return (
    <div className="bg-slate-100">
      <div className="mx-auto max-w-2xl px-4 py-2 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl text-center text-gray-900">
          We'll help you make the perfect furniture:
        </h2>
        <div className="mt-4 grid grid-cols-1 gap-x-4 gap-y-5 sm:grid-cols-2 md:grid-cols-2 md:gap-x-2 lg:grid-cols-3 xl:gap-x-4">
          <div className="mt-4 text-center max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-white dark:border-yellow-800 h-[300px]">
            <div className="text-bold text-4xl mt-5">1</div>
            <h5 className="my-6 text-2xl font-semibold tracking-tight text-gray-900 dark:text-gray-900">
              SCHEDULE AN APPOINTMENT TODAY
            </h5>
            <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
              (866) 000-0000 Work with our design consultants or bring your own.
            </p>
          </div>
          <div className="mt-4 text-center max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-white dark:border-yellow-800 h-[300px]">
            <div className="text-bold text-4xl mt-5">2</div>
            <h5 className="my-6 text-2xl font-semibold tracking-tight text-gray-900 dark:text-gray-900">
              GET INSPIRED
            </h5>
            <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
              Images, catalogs, or blueprints. We'll use these to develop
              stunning furniture that will perfectly fit your home.
            </p>
          </div>
          <div className="mt-4 text-center max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-white dark:border-yellow-800 h-[300px]">
            <div className="text-bold text-4xl mt-5">3</div>
            <h5 className="my-6 text-2xl font-semibold tracking-tight text-gray-900 dark:text-gray-900">
              WE'LL HANDLE THE REST
            </h5>
            <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
              We'll help you design and personalize every aspect of your
              furniture.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Furniture;
