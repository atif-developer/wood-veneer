import React from "react";
import Head from "../../header/Head";
import Header from "../../header/Header";
import Footer from "../../footer/Footer";
import Card from "../CardProject/Card";

const ApartmentShadmanCanalBankRoad = () => {
  window.scrollTo(0, 0);
  const Data = [
    {
      id: 1,
      Images: [
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/11-APARTMENT+SHADMAN+CANAL+BANK+ROAD/1.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/11-APARTMENT+SHADMAN+CANAL+BANK+ROAD/2.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/11-APARTMENT+SHADMAN+CANAL+BANK+ROAD/3.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/11-APARTMENT+SHADMAN+CANAL+BANK+ROAD/4.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/11-APARTMENT+SHADMAN+CANAL+BANK+ROAD/5.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/11-APARTMENT+SHADMAN+CANAL+BANK+ROAD/6.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/11-APARTMENT+SHADMAN+CANAL+BANK+ROAD/7.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/11-APARTMENT+SHADMAN+CANAL+BANK+ROAD/8.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/11-APARTMENT+SHADMAN+CANAL+BANK+ROAD/9.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/11-APARTMENT+SHADMAN+CANAL+BANK+ROAD/10.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/11-APARTMENT+SHADMAN+CANAL+BANK+ROAD/11.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/11-APARTMENT+SHADMAN+CANAL+BANK+ROAD/12.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/11-APARTMENT+SHADMAN+CANAL+BANK+ROAD/13.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/11-APARTMENT+SHADMAN+CANAL+BANK+ROAD/14.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/11-APARTMENT+SHADMAN+CANAL+BANK+ROAD/15.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/11-APARTMENT+SHADMAN+CANAL+BANK+ROAD/16.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/11-APARTMENT+SHADMAN+CANAL+BANK+ROAD/17.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/11-APARTMENT+SHADMAN+CANAL+BANK+ROAD/18.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/11-APARTMENT+SHADMAN+CANAL+BANK+ROAD/19.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/11-APARTMENT+SHADMAN+CANAL+BANK+ROAD/20.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/11-APARTMENT+SHADMAN+CANAL+BANK+ROAD/21.jpg",
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
                APARTMENT SHADMAN CANAL BANK ROAD
              </h2>

              <h1 className="mb-4 font-themeFont">
                Number of PARTMENT SHADMAN CANAL BANK ROAD Images {Data[0]?.Images.length}
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

export default ApartmentShadmanCanalBankRoad;
