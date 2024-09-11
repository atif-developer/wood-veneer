import React from 'react'
import Head from "../../header/Head";
import Header from "../../header/Header";
import Footer from "../../footer/Footer";
import Card from "../CardProject/Card";

const PCHOTELLAHORE = () => {
  window.scrollTo(0, 0);
    const Data = [
      {
        id: 1,
        Images: [
          "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/12-PC+HOTEL+LAHORE/1.JPG",
          "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/12-PC+HOTEL+LAHORE/2.JPG",
          "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/12-PC+HOTEL+LAHORE/3.JPG",
          "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/12-PC+HOTEL+LAHORE/4.JPG",
          "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/12-PC+HOTEL+LAHORE/5.JPG",
          "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/12-PC+HOTEL+LAHORE/6.JPG",
          "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/12-PC+HOTEL+LAHORE/7.JPG",
          "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/12-PC+HOTEL+LAHORE/8.JPG",
          "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/12-PC+HOTEL+LAHORE/9.JPG",
          "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/12-PC+HOTEL+LAHORE/10.JPG",
          // "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/12-PC+HOTEL+LAHORE/11.JPG",
          "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/12-PC+HOTEL+LAHORE/12.JPG",
          "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/12-PC+HOTEL+LAHORE/13.JPG",
          "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/12-PC+HOTEL+LAHORE/14.JPG",
          "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/12-PC+HOTEL+LAHORE/15.JPG",
          "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/12-PC+HOTEL+LAHORE/16.JPG",
          "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/12-PC+HOTEL+LAHORE/17.JPG",
          "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/12-PC+HOTEL+LAHORE/18.JPG",
          "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/12-PC+HOTEL+LAHORE/19.JPG",
          "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/12-PC+HOTEL+LAHORE/20.JPG",
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
              PC HOTEL LAHORE
              </h2>

              <h1 className="mb-4 font-themeFont">
                Number of PC HOTEL LAHORE Images{" "}
                {Data[0]?.Images.length}
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
  )
}

export default PCHOTELLAHORE