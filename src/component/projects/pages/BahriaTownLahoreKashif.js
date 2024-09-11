import React from 'react'
import Head from "../../header/Head";
import Header from "../../header/Header";
import Footer from "../../footer/Footer";
import Card from "../CardProject/Card";

const BahriaTownLahoreKashif = () => {
    window.scrollTo(0, 0);
    const Data = [
      {
        id: 1,
        Images: [
          "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/10-BAHRIA+TOWN+LAHORE+KASHIF/1.jpg",
          "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/10-BAHRIA+TOWN+LAHORE+KASHIF/2.jpg",
          "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/10-BAHRIA+TOWN+LAHORE+KASHIF/3.jpg",
          "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/10-BAHRIA+TOWN+LAHORE+KASHIF/4.jpg",
          "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/10-BAHRIA+TOWN+LAHORE+KASHIF/5.jpg",
          "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/10-BAHRIA+TOWN+LAHORE+KASHIF/6.jpg",
          "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/10-BAHRIA+TOWN+LAHORE+KASHIF/7.jpg",
          "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/10-BAHRIA+TOWN+LAHORE+KASHIF/8.jpg",
          "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/10-BAHRIA+TOWN+LAHORE+KASHIF/9.jpg",
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
              BAHRIA TOWN LAHORE KASHIF
              </h2>

              <h1 className="mb-4 font-themeFont">
                Number of BAHRIA TOWN LAHORE KASHIF Images{" "}
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

export default BahriaTownLahoreKashif