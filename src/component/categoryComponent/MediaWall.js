import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";

const MediaWall = () => {
  window.scrollTo(0, 0);
  const MediaData = [
    {
      id: 1,
      Images: [
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/Media+Wall++No+4/LCD+console/0.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/Media+Wall++No+4/LCD+console/1.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/Media+Wall++No+4/LCD+console/2.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/Media+Wall++No+4/LCD+console/3.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/Media+Wall++No+4/LCD+console/5.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/Media+Wall++No+4/LCD+console/6.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/Media+Wall++No+4/LCD+console/7.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/Media+Wall++No+4/LCD+console/8.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/Media+Wall++No+4/LCD+console/9.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/Media+Wall++No+4/LCD+console/10.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/Media+Wall++No+4/LCD+console/11.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/Media+Wall++No+4/LCD+console/12.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/Media+Wall++No+4/LCD+console/13.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/Media+Wall++No+4/LCD+console/14.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/Media+Wall++No+4/LCD+console/15.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/Media+Wall++No+4/LCD+console/16.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/Media+Wall++No+4/LCD+console/17.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/Media+Wall++No+4/LCD+console/18.jpeg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/Media+Wall++No+4/LCD+console/19.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/Media+Wall++No+4/LCD+console/20.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/Media+Wall++No+4/LCD+console/21.jpg",
        // "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/Media+Wall++No+4/LCD+console/22.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/Media+Wall++No+4/LCD+console/23.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/Media+Wall++No+4/LCD+console/24.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/Media+Wall++No+4/LCD+console/25.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/Media+Wall++No+4/LCD+console/26.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/Media+Wall++No+4/LCD+console/27.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/Media+Wall++No+4/LCD+console/28.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/Media+Wall++No+4/LCD+console/29.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/Media+Wall++No+4/LCD+console/30.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/Media+Wall++No+4/LCD+console/31.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/Media+Wall++No+4/LCD+console/32.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/Media+Wall++No+4/LCD+console/33.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/Media+Wall++No+4/LCD+console/34.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/Media+Wall++No+4/LCD+console/35.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/Media+Wall++No+4/LCD+console/36.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/Media+Wall++No+4/LCD+console/38.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/Media+Wall++No+4/LCD+console/41.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/Media+Wall++No+4/LCD+console/42.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/Media+Wall++No+4/LCD+console/44.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/Media+Wall++No+4/LCD+console/45.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/Media+Wall++No+4/LCD+console/46.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/Media+Wall++No+4/LCD+console/47.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/Media+Wall++No+4/LCD+console/48.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/Media+Wall++No+4/LCD+console/49.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/Media+Wall++No+4/LCD+console/50.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/Media+Wall++No+4/LCD+console/51.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/Media+Wall++No+4/LCD+console/52.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/Media+Wall++No+4/LCD+console/53.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/Media+Wall++No+4/LCD+console/54.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/Media+Wall++No+4/LCD+console/55.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/Media+Wall++No+4/LCD+console/56.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/Media+Wall++No+4/LCD+console/57.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/Media+Wall++No+4/LCD+console/58.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/Media+Wall++No+4/LCD+console/59.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/Media+Wall++No+4/LCD+console/60.jpg",

        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/Media+Wall++No+4/LCD+console/61.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/Media+Wall++No+4/LCD+console/62.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/Media+Wall++No+4/LCD+console/63.jpg",

        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/Media+Wall++No+4/LCD+console/64.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/Media+Wall++No+4/LCD+console/65.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/Media+Wall++No+4/LCD+console/66.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/Media+Wall++No+4/LCD+console/67.JPG",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/Media+Wall++No+4/LCD+console/68.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/Media+Wall++No+4/LCD+console/69.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/Media+Wall++No+4/LCD+console/70.jpg",

        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/Media+Wall++No+4/LCD+console/71.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/Media+Wall++No+4/LCD+console/72.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/Media+Wall++No+4/LCD+console/73.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/Media+Wall++No+4/LCD+console/74.jpg",
        // "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/Media+Wall++No+4/LCD+console/75.jpg",
        // "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/Media+Wall++No+4/LCD+console/76.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/Media+Wall++No+4/LCD+console/06.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/Media+Wall++No+4/LCD+console/07.jpg",
       
      ],
    },
  ];
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow mt-10">
        <div>
          <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-10">
              <h2 className="text-4xl text-center text-gray-900 font-themeFont">Tv Console</h2>
              <div></div>
              <h1 className="mb-2 font-themeFont">
                Number of Tv Console Images {MediaData[0]?.Images.length}
              </h1>
              <div className="border-b-2"></div>
              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {MediaData[0]?.Images.map((item, index) => {
                  return (
                    <div key={index}>
                      <img
                        className="h-80 w-96  max-w-full rounded-lg"
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

export default MediaWall;