import React from "react";
import Head from "../../header/Head";
import Header from "../../header/Header";
import Footer from "../../footer/Footer";

const DhaDefenceRayaLahore = () => {
  window.scrollTo(0, 0);
  const Data = [
    {
      id: 1,
      Images: [
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/1-DHA+DEFENCE+RAYA+LAHORE/1.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/1-DHA+DEFENCE+RAYA+LAHORE/2.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/1-DHA+DEFENCE+RAYA+LAHORE/3.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/1-DHA+DEFENCE+RAYA+LAHORE/4.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/1-DHA+DEFENCE+RAYA+LAHORE/5.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/1-DHA+DEFENCE+RAYA+LAHORE/6.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/1-DHA+DEFENCE+RAYA+LAHORE/7.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/1-DHA+DEFENCE+RAYA+LAHORE/8.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/1-DHA+DEFENCE+RAYA+LAHORE/9.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/1-DHA+DEFENCE+RAYA+LAHORE/10.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/1-DHA+DEFENCE+RAYA+LAHORE/11.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/1-DHA+DEFENCE+RAYA+LAHORE/12.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/1-DHA+DEFENCE+RAYA+LAHORE/13.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/1-DHA+DEFENCE+RAYA+LAHORE/14.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/1-DHA+DEFENCE+RAYA+LAHORE/15.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/1-DHA+DEFENCE+RAYA+LAHORE/16.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/1-DHA+DEFENCE+RAYA+LAHORE/17.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/1-DHA+DEFENCE+RAYA+LAHORE/18.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/1-DHA+DEFENCE+RAYA+LAHORE/19.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/1-DHA+DEFENCE+RAYA+LAHORE/20.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/1-DHA+DEFENCE+RAYA+LAHORE/21.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/1-DHA+DEFENCE+RAYA+LAHORE/22.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/1-DHA+DEFENCE+RAYA+LAHORE/23.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/1-DHA+DEFENCE+RAYA+LAHORE/24.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/1-DHA+DEFENCE+RAYA+LAHORE/25.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/1-DHA+DEFENCE+RAYA+LAHORE/26.JPG",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/1-DHA+DEFENCE+RAYA+LAHORE/27.JPG",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/1-DHA+DEFENCE+RAYA+LAHORE/28.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/1-DHA+DEFENCE+RAYA+LAHORE/29.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/1-DHA+DEFENCE+RAYA+LAHORE/30.jpg",
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
                DHA DEFENCE RAYA LAHORE
              </h2>

              <h1 className="mb-4">
                Number of DHA DEFENCE RAYA LAHORE Images{" "}
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
  );
};

export default DhaDefenceRayaLahore;
