import { StaticImageData } from "next/image";
import NextImage from "next/image";
import { useState } from "react";

import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import { GoDotFill, GoDot } from "react-icons/go";

interface ImageSliderProps {
  banners: {
    img: StaticImageData;
    alt: string;
  }[];
}

export const ImageSlider = ({ banners }: ImageSliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide
      ? banners.length - 1
      : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === banners.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };
  return (
    <section className="flex flex-col relative border border-black container">
      <div className="flex w-full h-full relative duration-[0.5s] flex-col">
        {banners.map((banner, index) => (
          <div
            key={index}
            className={`flex w-full h-full duration-[0.5s] transition-opacity ease-in-out ${
              currentIndex === index ? "opacity-100" : "opacity-0"
            }`}
            style={{
              position:
                currentIndex === index ? "relative" : "absolute",
            }}
          >
            <NextImage
              draggable={false}
              src={banner.img}
              alt={banner.alt}
            />
          </div>
        ))}
      </div>
      <div
        className="absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 rounded-full p-2 bg-black/20 cursor-pointer"
        onClick={prevSlide}
      >
        <AiOutlineLeft size={40} color="white" />
      </div>
      <div
        className="absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 rounded-full p-2 bg-black/20 cursor-pointer"
        onClick={nextSlide}
      >
        <AiOutlineRight size={40} color="white" />
      </div>
      <div className="flex top-4 justify-center py-2">
        {banners.map((_slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className="text-2xl cursor-pointer"
          >
            {slideIndex === currentIndex ? (
              <GoDot size={20} />
            ) : (
              <GoDotFill size={20} />
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
