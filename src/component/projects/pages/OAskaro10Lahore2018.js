import React from "react";
import Head from "../../header/Head";
import Header from "../../header/Header";
import Footer from "../../footer/Footer";
import Card from "../CardProject/Card";

const OAskaro10Lahore2018 = () => {
  window.scrollTo(0, 0);
  const Data = [
    {
      id: 1,
      Images: [
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/7-0ASKARI+10+LAHORE+2018/1.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/7-0ASKARI+10+LAHORE+2018/2.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/7-0ASKARI+10+LAHORE+2018/3.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/7-0ASKARI+10+LAHORE+2018/4.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/7-0ASKARI+10+LAHORE+2018/5.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/7-0ASKARI+10+LAHORE+2018/6.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/7-0ASKARI+10+LAHORE+2018/7.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/7-0ASKARI+10+LAHORE+2018/8.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/7-0ASKARI+10+LAHORE+2018/9.jpg",
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
                0ASKARI 10 LAHORE 2018
              </h2>

              <h1 className="mb-4 font-themeFont">
                Number of 0ASKARI 10 LAHORE 2018 Images {Data[0]?.Images.length}
              </h1>
              <div className="border-b-2"></div>
              <div>
                <Card Data={Data[0]} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default OAskaro10Lahore2018;
