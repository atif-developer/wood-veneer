import React from "react";
import Head from "../../header/Head";
import Header from "../../header/Header";
import Footer from "../../footer/Footer";

const DhaPhase6 = () => {
    window.scrollTo(0, 0);
    const Data = [
      {
        id: 1,
        Images: [
          "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/5-DHA+PHASE+6/1.jpg",
          "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/5-DHA+PHASE+6/2.jpg",
          "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/5-DHA+PHASE+6/3.jpg",
          "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/5-DHA+PHASE+6/4.jpg",
          "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/5-DHA+PHASE+6/5.jpg",
          "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/5-DHA+PHASE+6/6.JPG",
          "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/5-DHA+PHASE+6/7.JPG",
          "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/5-DHA+PHASE+6/8.JPG",
          "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/5-DHA+PHASE+6/9.JPG",
          "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/5-DHA+PHASE+6/10.JPG",
          "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/5-DHA+PHASE+6/11.jpg",
          "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/5-DHA+PHASE+6/12.jpg",
          "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/5-DHA+PHASE+6/13.jpg",
          "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/5-DHA+PHASE+6/14.jpg",
          "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/5-DHA+PHASE+6/15.jpg",
          "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/5-DHA+PHASE+6/16.jpg",
          "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/5-DHA+PHASE+6/Mr+Adeel+FF+Kitchen+TV.jpg"
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
              DHA PHASE 6
              </h2>

              <h1 className="mb-4">
                Number of DHA PHASE 6 Images{" "}
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

export default DhaPhase6