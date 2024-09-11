import React from 'react'
import Head from "../../header/Head";
import Header from "../../header/Header";
import Footer from "../../footer/Footer";

const PUNJABUNIVERSITY = () => {
  window.scrollTo(0, 0);
    const Data = [
      {
        id: 1,
        Images: [
          "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/13-PUNJAB+UNIVERSITY/1.jpg",
          "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/13-PUNJAB+UNIVERSITY/2.jpg",
          "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/13-PUNJAB+UNIVERSITY/3.jpg",
          "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/13-PUNJAB+UNIVERSITY/4.jpg",
          "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/13-PUNJAB+UNIVERSITY/5.jpg",
          "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/13-PUNJAB+UNIVERSITY/6.jpg",
          "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/13-PUNJAB+UNIVERSITY/7.jpg",
          "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/13-PUNJAB+UNIVERSITY/8.jpg",
          "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/13-PUNJAB+UNIVERSITY/9.jpg",
          "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/13-PUNJAB+UNIVERSITY/10.jpg",
          "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/13-PUNJAB+UNIVERSITY/11.jpg",
          "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/13-PUNJAB+UNIVERSITY/12.jpg",
          "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/13-PUNJAB+UNIVERSITY/13.jpg",
          "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/13-PUNJAB+UNIVERSITY/14.jpg",
          "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/13-PUNJAB+UNIVERSITY/15.jpg",
          "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/13-PUNJAB+UNIVERSITY/16.jpg",
          "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/13-PUNJAB+UNIVERSITY/18.jpg",
          "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/13-PUNJAB+UNIVERSITY/19.jpg",
          "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/13-PUNJAB+UNIVERSITY/20.jpg",
          "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/13-PUNJAB+UNIVERSITY/21.jpg",
          "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/13-PUNJAB+UNIVERSITY/22.jpg",
          "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/13-PUNJAB+UNIVERSITY/23.jpg",
          "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/13-PUNJAB+UNIVERSITY/24.bmp",
          "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/13-PUNJAB+UNIVERSITY/25.bmp",
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
              <h2 className="mb-4 text-4xl text-center text-gray-900 font-themeFont">
              PUNJAB UNIVERSITY
              </h2>

              <h1 className="mb-4 font-themeFont">
                Number of PUNJAB UNIVERSITY Images{" "}
                {Data[0]?.Images.length}
              </h1>
              <div className="border-b-2"></div>
              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {Data[0]?.Images.map((item, index) => {
                  return (
                    <div key={index}>
                      <img
                        className="h-96 w-96  max-w-full rounded-lg"
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

export default PUNJABUNIVERSITY