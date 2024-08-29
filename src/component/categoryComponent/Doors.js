import React from "react";
import Head from "../header/Head";
import Header from "../header/Header";
import Footer from "../footer/Footer";

const Doors = () => {
  window.scrollTo(0, 0);
  const DoorsData = [
    {
      id: 1,
      Images: [
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/Door-img/0.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/Door-img/1.JPG",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/Door-img/2.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/Door-img/3.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/Door-img/4.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/Door-img/5.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/Door-img/6.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/Door-img/7.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/Door-img/8.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/Door-img/9.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/Door-img/10.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/Door-img/11.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/Door-img/12.jpeg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/Door-img/13.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/Door-img/14.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/Door-img/15.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/Door-img/16.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/Door-img/17.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/Door-img/18.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/Door-img/19.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/Door-img/20.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/Door-img/21.jpg",
      ],
    },
  ];
  return (
    <div className="flex flex-col min-h-screen">
      <Head />
      <Header />
      <div className="flex-grow mt-14">
        <div>
          <div className="bg-white mt-20">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-10">
              <h2 className="text-4xl text-center text-gray-900">Doors</h2>
              <div></div>
              <h1 className="mb-2">
                Number of Door Images {DoorsData[0]?.Images.length}
              </h1>
              <div className="border-b-2"></div>
              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {DoorsData[0]?.Images.map((item, index) => {
                  return (
                    <div key={index}>
                      <img
                        className="h-full w-96  max-w-full rounded-lg"
                        src={item}
                        alt=""
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

export default Doors;
