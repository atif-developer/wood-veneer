import React from "react";
import Head from "../header/Head";
import Header from "../header/Header";
import Footer from "../footer/Footer";

const Sofa = () => {
  window.scrollTo(0, 0);
  const SofaData = [
    {
      id: 1,
      Images: [
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/SofeSeat-img/1.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/SofeSeat-img/2.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/SofeSeat-img/3.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/SofeSeat-img/5.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/SofeSeat-img/6.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/SofeSeat-img/7.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/SofeSeat-img/8.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/SofeSeat-img/9.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/SofeSeat-img/10.png",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/SofeSeat-img/11.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/SofeSeat-img/12.JPG",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/SofeSeat-img/13.JPG",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/SofeSeat-img/14.JPG",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/SofeSeat-img/15.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/SofeSeat-img/16.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/SofeSeat-img/17.JPG",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/SofeSeat-img/18.JPG",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/SofeSeat-img/19.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/SofeSeat-img/20.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/SofeSeat-img/21.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/SofeSeat-img/22.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/SofeSeat-img/23.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/SofeSeat-img/24.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/SofeSeat-img/25.png",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/SofeSeat-img/26.JPG",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/SofeSeat-img/27.png",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/SofeSeat-img/28.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/SofeSeat-img/29.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/SofeSeat-img/30.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/SofeSeat-img/31.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/SofeSeat-img/32.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/SofeSeat-img/33.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/SofeSeat-img/34.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/SofeSeat-img/35.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/SofeSeat-img/36.JPG",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/SofeSeat-img/38.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/SofeSeat-img/41.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/SofeSeat-img/42.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/SofeSeat-img/44.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/SofeSeat-img/45.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/SofeSeat-img/46.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/SofeSeat-img/47.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/SofeSeat-img/48.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/SofeSeat-img/49.JPG",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/SofeSeat-img/50.JPG",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/SofeSeat-img/51.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/SofeSeat-img/52.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/SofeSeat-img/53.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/SofeSeat-img/54.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/SofeSeat-img/55.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/SofeSeat-img/56.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/SofeSeat-img/57.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/SofeSeat-img/58.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/SofeSeat-img/59.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/SofeSeat-img/60.jpg",

        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/SofeSeat-img/61.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/SofeSeat-img/62.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/SofeSeat-img/63.jpg",

        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/SofeSeat-img/64.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/SofeSeat-img/65.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/SofeSeat-img/66.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/SofeSeat-img/67.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/SofeSeat-img/68.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/SofeSeat-img/69.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/SofeSeat-img/70.jpg",

        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/SofeSeat-img/71.JPG",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/SofeSeat-img/72.JPG",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/SofeSeat-img/73.JPG",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/SofeSeat-img/74.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/SofeSeat-img/75.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/SofeSeat-img/76.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/SofeSeat-img/77.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/SofeSeat-img/78.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/SofeSeat-img/79.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/SofeSeat-img/80.jpg",

        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/SofeSeat-img/81.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/SofeSeat-img/82.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/SofeSeat-img/83.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/SofeSeat-img/84.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/SofeSeat-img/86.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/SofeSeat-img/87.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/SofeSeat-img/88.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/SofeSeat-img/89.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/SofeSeat-img/90.jpg",

        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/SofeSeat-img/91.JPG",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/SofeSeat-img/92.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/SofeSeat-img/93.JPG",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/SofeSeat-img/94.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/SofeSeat-img/95.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/SofeSeat-img/96.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/SofeSeat-img/97.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/SofeSeat-img/98.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/SofeSeat-img/99.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/SofeSeat-img/100.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/SofeSeat-img/artwoodveener-sofa.jpg",
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
              <h2 className="text-4xl text-center text-gray-900">Sofa Seat</h2>
              <div></div>
              <h1 className="mb-2">
                Number of Sofa Images {SofaData[0]?.Images.length}
              </h1>
              <div className="border-b-2"></div>
              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {SofaData[0]?.Images.map((item, index) => {
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

export default Sofa;
