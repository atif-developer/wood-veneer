import React from 'react'
import Header from "../header/Header";
import Footer from "../footer/Footer";

const WoodVenner = () => {
    window.scrollTo(0, 0);
  const Wood = [
    {
      id: 1,
      Images: [
        
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/Wood-Veneer-img/1.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/Wood-Veneer-img/2.JPG",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/Wood-Veneer-img/3.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/Wood-Veneer-img/4.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/Wood-Veneer-img/5.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/Wood-Veneer-img/6.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/Wood-Veneer-img/7.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/Wood-Veneer-img/8.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/Wood-Veneer-img/9.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/Wood-Veneer-img/10.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/Wood-Veneer-img/11.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/Wood-Veneer-img/12.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/Wood-Veneer-img/13.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/Wood-Veneer-img/14.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/Wood-Veneer-img/15.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/Wood-Veneer-img/16.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/Wood-Veneer-img/17.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/Wood-Veneer-img/18.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/Wood-Veneer-img/19.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/Wood-Veneer-img/20.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/Wood-Veneer-img/21.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/Wood-Veneer-img/22.jpg",
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
              <h2 className="text-4xl text-center text-gray-900 font-themeFont">Wood Veener</h2>
              <div></div>
              <h1 className="mb-2 font-themeFont">
                Number of Wood Veener Images {Wood[0]?.Images.length}
              </h1>
              <div className="border-b-2"></div>
              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {Wood[0]?.Images.map((item, index) => {
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
  )
}

export default WoodVenner