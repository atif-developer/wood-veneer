import React,{ useEffect, useState } from 'react'
import Head from "../../header/Head";
import Header from "../../header/Header";
import Footer from "../../footer/Footer";
import Card2 from "../CardProject/Card2";
import AWS from 'aws-sdk';

const config = {
    bucketName: process.env.REACT_APP_AWS_BUCKET_NAME,
    region: process.env.REACT_APP_AWS_REGION,
    accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.REACT_APP_AWS_SCRET_ACCESS_KEY,
};
const HushPuppies = () => {
    window.scrollTo(0, 0);
    const [images, setImages] = useState([]);
  useEffect(() => {
    // Configure AWS S3
    AWS.config.update({
      region: config.region,
      accessKeyId: config.accessKeyId,
      secretAccessKey: config.secretAccessKey,
    });

    const s3 = new AWS.S3();
    const params = {
      Bucket: config.bucketName,
      Prefix: '17-HUSH-PUPPIES/', // folder path inside the bucket (if any)
    };

    // List objects from S3
    s3.listObjectsV2(params, (err, data) => {
      if (err) {
        console.log('Error fetching images from S3', err);
      } else {
        const imageUrls = data.Contents.map((item) => {
          return `https://${config.bucketName}.s3.${config.region}.amazonaws.com/${item.Key}`;
        });
        setImages(imageUrls);
      }
    });
  }, []);
  return (
    <div className="flex flex-col min-h-screen">
    <Head />
    <Header />
    <div className="flex-grow mt-14">
      <div>
        <div className="bg-white mt-20">
          <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-10">
            <h2 className="mb-4 text-4xl text-center text-gray-900 font-themeFont">
              HUSH PUPPIES
            </h2>
            <h1 className="mb-4 font-themeFont">
              Number of HUSH PUPPIES Images{" "}
              {images?.length}
            </h1>
            <div className="border-b-2"></div>
            <div>
              <Card2 Data={images} />
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
  )
}

export default HushPuppies