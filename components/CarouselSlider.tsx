import NextImage from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

import { BiSolidUser } from "react-icons/bi";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { ProdutoType } from "@/types/produto";

interface ImageSliderProps {
  products: ProdutoType[];
}

export const CarouselSlider = ({ products }: ImageSliderProps) => {
  return (
    <section className="flex flex-col relative container my-[100px] h-full">
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          425: {
            slidesPerView: 2,
          },
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 4,
          },
          1440: {
            slidesPerView: 4,
          },
        }}
        loop={true}
        navigation={true}
        modules={[Navigation, Pagination]}
        className="max-w-full w-full h-full"
      >
        {products.map((item, index) => {
          const { skus } = item;
          let colors = [
            ...new Set(skus.map((item) => item.cor.hexadecimal)),
          ];

          let sizes = [...new Set(skus.map((item) => item.tamanho))];

          const lowestPrice = skus.reduce((lowest, sku) => {
            return sku.precoVenda < lowest ? sku.precoVenda : lowest;
          }, skus[0].precoVenda);

          return (
            <SwiperSlide
              key={index}
              onClick={() => console.log("AQUI", index)}
              className="w-full max-h-4/5 h-full flex flex-col pb-10 items-center justify-center text-center"
            >
              <div className="flex flex-col cursor-pointer overflow-hidden">
                <div className="flex h-full w-full">
                  <NextImage
                    draggable={false}
                    src={skus[0].foto1}
                    alt={item.nome}
                    style={{
                      objectFit: "fill",
                    }}
                    width={635}
                    height={952}
                  />
                </div>
                <div className="flex flex-col items-start py-5 px-3 gap-2 justify-start w-full border-x border-b border-[#ccc]">
                  <p className="capitalize text-[17px]">
                    {item.nome}
                  </p>
                  <div className="flex flex-row justify-start gap-2 items-end w-full">
                    <p className="text-[14px] font-normal">
                      A partir de
                    </p>
                    <p className="uppercase text-[18px] font-medium">
                      R$
                      {lowestPrice.toString().replace(".", ",")}
                    </p>
                  </div>
                  <div className="flex flex-col justify-start items-start w-full gap-2 mt-3">
                    <div className="flex flex-row gap-2">
                      {colors.map((color, index) => {
                        return (
                          <div
                            key={index}
                            className={`flex w-[18px] md:w-[21px] h-[18px] md:h-[21px] border border-black rounded-full`}
                            style={{
                              backgroundColor: color,
                            }}
                          />
                        );
                      })}
                    </div>
                    <div className="flex flex-row gap-2">
                      {sizes.map((size, index) => {
                        return (
                          <div
                            key={index}
                            className={`flex w-[18px] md:w-[21px] h-[18px] md:h-[21px] text-[15px] border border-black rounded-full justify-center items-center`}
                          >
                            {size}
                          </div>
                        );
                      })}
                    </div>
                  </div>
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
