import React from "react";
import Head from "../header/Head";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { CorianImg } from "../../db/project-db";

export const Corian = () => {
  window.scrollTo(0, 0);
  return (
    <div className="flex flex-col min-h-screen">
      <Head />
      <Header />
      <div className="flex-grow mt-14">
        <div>
          <div className="bg-white mt-20">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-10">
              <h2 className="text-4xl text-center text-gray-900">
                Corian Vinity
              </h2>
              <div>
              </div>
              <h1 className="mb-2">
                Number of Corian Images {CorianImg[0].images.length}
              </h1>
              <div className="border-b-2"></div>
              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {CorianImg[0].images.map((item, index) => {
                  return (
                    <div key={index}>
                      <img
                        className="h-full w-96  max-w-full rounded-lg"
                        src={item}
                        alt=''
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Corian;