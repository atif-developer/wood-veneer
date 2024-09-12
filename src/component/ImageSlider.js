import React, { useState, useEffect } from "react";
import { GrFormNext,GrFormPrevious } from "react-icons/gr";

const images = [
  {
    url: "https://plus.unsplash.com/premium_photo-1678752717095-08cd0bd1d7e7?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "WHERE WOOD MEET ARTIST",
    description:
      "We just dont create things, we build them with our bare hands.",
    buttonText: "Learn More",
  },
  {
    url: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=3269&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "CRAFTING WITH PASSION",
    description: "Every piece we create tells a story of dedication and timeless craftsmanship.",
    buttonText: "Learn More",
  },
  {
    url: "https://plus.unsplash.com/premium_photo-1676823553207-758c7a66e9bb?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "DESIGNING LEGACY",
    description: "More than just products, we shape works of art that stand the test of time.",
    buttonText: "Learn More",
  },
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, []);

  return (
    <div className="mt-[100px] relative w-full h-[30vh] sm:h-[40vh] md:h-[40vh] lg:h-[100vh]">
      <div className="overflow-hidden relative w-full h-full">
        <div className="relative w-full h-full">
          <img
            src={images[currentIndex].url}
            alt={`Slide ${currentIndex}`}
            className="w-full h-full object-cover duration-500"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4 bg-black bg-opacity-50">
            <h2 className="text-xl sm:text-2xl md:text-4xl font-bold mb-4 font-themeFont">
              {images[currentIndex].title}
            </h2>
            <p className="text-base sm:text-lg md:text-xl mb-4 font-themeFont">
              {images[currentIndex].description}
            </p>
            {/* <button className="bg-white text-gray-500 px-4 py-2 rounded hover:bg-slate-300">
              {images[currentIndex].buttonText}
            </button> */}
          </div>
        </div>
      </div>
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-themeOranage text-white px-4 py-2 rounded-r"
      >
        <GrFormPrevious />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-themeOranage text-white px-4 py-2 rounded-l"
      >
        <GrFormNext />
      </button>
    </div>
  );
};

export default ImageSlider;
