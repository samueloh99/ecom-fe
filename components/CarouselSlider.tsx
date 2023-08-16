import NextImage from "next/image";
import { useRouter } from "next/navigation";
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
  const router = useRouter();

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
              onClick={() => router.push(item.slug)}
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
                <div className="flex flex-col items-start py-5 px-3 gap-2 justify-center h-full w-full border-x border-b border-[#ccc]">
                  <p className="capitalize text-[15px] xl:text-[17px] h-full">
                    {item.nome}
                  </p>
                  <div className="flex flex-col xl:flex-row justify-start gap-2 items-start xl:items-end w-full">
                    <p className="text-[12px] xl:text-[14px] font-normal">
                      A partir de
                    </p>
                    <p className="uppercase text-[14px] xl:text-[18px] font-medium">
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
    </section>
  );
};
