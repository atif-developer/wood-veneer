import React from "react";
import Head from "../../header/Head";
import Header from "../../header/Header";
import Footer from "../../footer/Footer";
import Card from "../CardProject/Card";

const DhaDPhase8Lahore = () => {
  window.scrollTo(0, 0);
  const Data = [
    {
      id: 1,
      Images: [
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/3-DHA+PHASE+8+LAHORE/IMG-20230105-WA0025.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/3-DHA+PHASE+8+LAHORE/IMG-20230105-WA0024.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/3-DHA+PHASE+8+LAHORE/Mr+Zaheer+Laundry+-v2.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/3-DHA+PHASE+8+LAHORE/Mr+Zaheer+Laundry+-v1.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/3-DHA+PHASE+8+LAHORE/Mr+Zaheer+Kitchen-v3.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/3-DHA+PHASE+8+LAHORE/Mr+Zaheer+Kitchen-v2.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/3-DHA+PHASE+8+LAHORE/Mr+Zaheer+Kitchen-v1.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/3-DHA+PHASE+8+LAHORE/IMG-20230212-WA0006.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/3-DHA+PHASE+8+LAHORE/IMG-20230126-WA0014.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/3-DHA+PHASE+8+LAHORE/IMG-20230212-WA0005.jpg",
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
                DHA PHASE 8 LAHORE
              </h2>
              <h1 className="mb-4 font-themeFont">
                Number of DHA PHASE 8 LAHORE Images {Data[0]?.Images.length}
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

export default DhaDPhase8Lahore;
