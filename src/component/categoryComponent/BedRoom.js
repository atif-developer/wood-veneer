import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";

const BedRoom = () => {
  window.scrollTo(0, 0);
  const bedRoom = [
    {
      id: 1,
      Images: [
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/BedRoomImges/bedset/1.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/BedRoomImges/bedset/2.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/BedRoomImges/bedset/3.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/BedRoomImges/bedset/4.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/BedRoomImges/bedset/5.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/BedRoomImges/bedset/6.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/BedRoomImges/bedset/7.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/BedRoomImges/bedset/8.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/BedRoomImges/bedset/9.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/BedRoomImges/bedset/10.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/BedRoomImges/bedset/11.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/BedRoomImges/bedset/12.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/BedRoomImges/bedset/13.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/BedRoomImges/bedset/14.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/BedRoomImges/bedset/15.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/BedRoomImges/bedset/16.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/BedRoomImges/bedset/17.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/BedRoomImges/bedset/18.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/BedRoomImges/bedset/19.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/BedRoomImges/bedset/20.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/BedRoomImges/bedset/21.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/BedRoomImges/bedset/22.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/BedRoomImges/bedset/23.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/BedRoomImges/bedset/24.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/BedRoomImges/bedset/25.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/BedRoomImges/bedset/26.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/BedRoomImges/bedset/27.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/BedRoomImges/bedset/28.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/BedRoomImges/bedset/29.jpeg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/BedRoomImges/bedset/30.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/BedRoomImges/bedset/31.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/BedRoomImges/bedset/32.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/BedRoomImges/bedset/33.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/BedRoomImges/bedset/34.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/BedRoomImges/bedset/35.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/BedRoomImges/bedset/36.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/BedRoomImges/bedset/37.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/BedRoomImges/bedset/38.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/BedRoomImges/bedset/39.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/BedRoomImges/bedset/40.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/BedRoomImges/bedset/41.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/BedRoomImges/bedset/42.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/BedRoomImges/bedset/43.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/BedRoomImges/bedset/44.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/BedRoomImges/bedset/45.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/BedRoomImges/bedset/46.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/BedRoomImges/bedset/47.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/BedRoomImges/bedset/48.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/BedRoomImges/bedset/49.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/BedRoomImges/bedset/50.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/BedRoomImges/bedset/51.JPG",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/BedRoomImges/bedset/52.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/BedRoomImges/bedset/53.jpg",
        "https://wood-veneer-new.s3.ap-northeast-1.amazonaws.com/BedRoomImges/bedset/54.jpg",
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
              <h2 className="text-4xl text-center text-gray-900 font-themeFont">Bed Room</h2>
              <div></div>
              <h1 className="mb-2 font-themeFont">
                Number of Bed Room Images {bedRoom[0]?.Images.length}
              </h1>
              <div className="border-b-2"></div>
              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {bedRoom[0]?.Images.map((item, index) => {
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
  );
};

export default BedRoom;
