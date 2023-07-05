import { StaticImageData } from "next/image";
import NextImage from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

interface ImageSliderProps {
  products: {
    img: StaticImageData;
    alt: string;
  }[];
}

export const CarouselSlider = ({ products }: ImageSliderProps) => {
  return (
    <section className="flex flex-col relative container my-[100px]">
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        loop={true}
        navigation={true}
        modules={[Navigation, Pagination]}
        className="max-w-full min-h-[800px] md:min-h-[500px] lg:min-h-[600px] xl:min-h-[700px] 2xl:min-h-[800px] h-full border border-black py-[200px]"
      >
        {products.map((item, index) => {
          return (
            <SwiperSlide
              key={index}
              onClick={() => console.log("AQUI", index)}
              className="w-1/4 max-h-[700px] md:max-h-[400px] lg:max-h-[500px] xl:max-h-[600px] 2xl:max-h-[700px] h-full border border-[#ccc] flex flex-col cursor-pointer items-center justify-center text-center"
            >
              <NextImage
                draggable={false}
                src={item.img}
                alt={item.alt}
                layout="responsive"
                objectFit="cover"
                width={500}
                height={500}
              />
              <div className="flex flex-col gap-3 py-5 items-center justify-center">
                <h4>Product 1</h4>
                <h4>R$400.00</h4>
                <div className="flex flex-row gap-2">
                  <div className="flex w-[25px] md:w-[20px] h-[25px] md:h-[20px] border border-black rounded-full bg-black" />
                  <div className="flex w-[25px] md:w-[20px] h-[25px] md:h-[20px] border border-black rounded-full bg-red-500" />
                  <div className="flex w-[25px] md:w-[20px] h-[25px] md:h-[20px] border border-black rounded-full bg-pink-500" />
                  <div className="flex w-[25px] md:w-[20px] h-[25px] md:h-[20px] border border-black rounded-full bg-purple-500" />
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      {/* <Carousel showArrows={true} infiniteLoop={true}>
        {products.map((item, index) => {
          return (
            <div
              key={index}
              onClick={() => console.log("AQUI", index)}
              className="w-1/4 border border-[#ccc] flex flex-col cursor-pointer"
            >
              <NextImage
                draggable={false}
                src={item.img}
                alt={item.alt}
                layout="responsive"
                objectFit="cover"
                width={500}
                height={500}
              />
              <div className="flex flex-col gap-3 py-5 items-center justify-center">
                <h4>Product 1</h4>
                <h4>R$400.00</h4>
                <div className="flex flex-row gap-2">
                  <div className="flex w-[25px] h-[25px] border border-black rounded-full bg-black" />
                  <div className="flex w-[25px] h-[25px] border border-black rounded-full bg-red-500" />
                  <div className="flex w-[25px] h-[25px] border border-black rounded-full bg-pink-500" />
                  <div className="flex w-[25px] h-[25px] border border-black rounded-full bg-purple-500" />
                </div>
              </div>
            </div>
          );
        })}
      </Carousel> */}
      {/* <div className="flex w-full h-full relative duration-[0.5s] flex-col">
        {chunkedProducts.map((bannerGroup, index) => (
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
            <div className="flex gap-5 justify-around w-full h-full">
              {bannerGroup.map((banner, bannerIndex) => (
                <div
                  key={bannerIndex}
                  onClick={() => console.log("AQUI", bannerIndex)}
                  className="w-1/4 border border-[#ccc] flex flex-col cursor-pointer"
                >
                  <NextImage
                    draggable={false}
                    src={banner.img}
                    alt={banner.alt}
                    layout="responsive"
                    objectFit="cover"
                    width={500}
                    height={500}
                  />
                  <div className="flex flex-col gap-3 py-5 items-center justify-center">
                    <h4>Product 1</h4>
                    <h4>R$400.00</h4>
                    <div className="flex flex-row gap-2">
                      <div className="flex w-[25px] h-[25px] border border-black rounded-full bg-black" />
                      <div className="flex w-[25px] h-[25px] border border-black rounded-full bg-red-500" />
                      <div className="flex w-[25px] h-[25px] border border-black rounded-full bg-pink-500" />
                      <div className="flex w-[25px] h-[25px] border border-black rounded-full bg-purple-500" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
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
      <div className="flex top-4 justify-center py-2 z-[10]">
        {chunkedProducts.map((_slide, slideIndex) => (
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
      </div> */}
    </section>
  );
};
