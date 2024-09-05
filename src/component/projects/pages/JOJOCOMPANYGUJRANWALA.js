import React from 'react'
import Head from "../../header/Head";
import Header from "../../header/Header";
import Footer from "../../footer/Footer";

const JOJOCOMPANYGUJRANWALA = () => {
  window.scrollTo(0, 0);
    const Data = [
      {
        id: 1,
        Images: [
          "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/15-JOJO+COMPANY+GUGRANWALA/1.jpg",
          "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/15-JOJO+COMPANY+GUGRANWALA/2.jpg",
          "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/15-JOJO+COMPANY+GUGRANWALA/3.jpg",
          "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/15-JOJO+COMPANY+GUGRANWALA/4.jpg",
          "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/15-JOJO+COMPANY+GUGRANWALA/5.jpg",
          "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/15-JOJO+COMPANY+GUGRANWALA/6.jpg",
          "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/15-JOJO+COMPANY+GUGRANWALA/7.jpg",
          "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/15-JOJO+COMPANY+GUGRANWALA/8.jpg",
          "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/15-JOJO+COMPANY+GUGRANWALA/9.jpg",
          "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/15-JOJO+COMPANY+GUGRANWALA/10.jpg",
          "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/15-JOJO+COMPANY+GUGRANWALA/11.jpg",
          "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/15-JOJO+COMPANY+GUGRANWALA/12.jpg",
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
              <h2 className="mb-4 text-4xl text-center text-gray-900">
                JOJO COMPANY GUJRANWALA
              </h2>

              <h1 className="mb-4">
                Number of JOJO COMPANY GUJRANWALA Images{" "}
                {Data[0]?.Images.length}
              </h1>
              <div className="border-b-2"></div>
              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {Data[0]?.Images.map((item, index) => {
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
  )
}

export default JOJOCOMPANYGUJRANWALA