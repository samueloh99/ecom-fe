"use client";

import NextImage from "next/image";
import { usePathname } from "next/navigation";

import { AiFillCaretDown } from "react-icons/ai";

import Product1 from "@/public/product1.webp";
import { products } from "@/config/mock";

import { Breadcrumbs } from "@/components/Breadcrumbs";

export default function CategoryPage() {
  const pathName = usePathname();
  const path = pathName.split("/").slice(1);
  return (
    <main className="flex container flex-col w-full min-h-screen gap-10 flex-col items-center">
      <Breadcrumbs paths={path} />
      <section className="flex flex-col lg:flex-row gap-5 w-full">
        <section className="flex flex-col w-full lg:w-2/5 gap-5">
          <div className="flex flex-col rounded-md border border-[#ccc]">
            <div className="flex w-full gap-2 bg-[#ccc] py-3 px-2 justify-start items-center">
              <AiFillCaretDown size={15} color="black" />
              <p className="text-[17px]">Filtra por Preço</p>
            </div>
            <div className="flex flex-col gap-2 py-3 px-2">
              <div className="flex items-center gap-2">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value=""
                  className="border-gray-300"
                />
                <label
                  htmlFor="default-checkbox"
                  className="text-[15px]"
                >
                  R$0 - R$200
                </label>
              </div>
              <div className="flex items-center gap-2">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value=""
                  className="border-gray-300"
                />
                <label
                  htmlFor="default-checkbox"
                  className="text-[15px]"
                >
                  R$0 - R$200
                </label>
              </div>
              <div className="flex items-center gap-2">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value=""
                  className="border-gray-300"
                />
                <label
                  htmlFor="default-checkbox"
                  className="text-[15px]"
                >
                  R$0 - R$200
                </label>
              </div>
            </div>
          </div>
          <div className="flex flex-col rounded-md border border-[#ccc]">
            <div className="flex w-full gap-2 bg-[#ccc] py-3 px-2 justify-start items-center">
              <AiFillCaretDown size={15} color="black" />
              <p className="text-[17px]">Filtra por Cor</p>
            </div>
            <div className="flex flex-col gap-2 py-3 px-2">
              <div className="flex items-center gap-2">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value=""
                  className="border-gray-300"
                />
                <label
                  htmlFor="default-checkbox"
                  className="uppercase text-[15px]"
                >
                  Amarelo Claro
                </label>
                <p className="font-light text-[15px] text-gray-500">
                  (14)
                </p>
              </div>
              <div className="flex items-center gap-2">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value=""
                  className="border-gray-300"
                />
                <label
                  htmlFor="default-checkbox"
                  className="uppercase text-[15px]"
                >
                  Amarelo Claro
                </label>
                <p className="font-light text-[15px] text-gray-500">
                  (14)
                </p>
              </div>
              <div className="flex items-center gap-2">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value=""
                  className="border-gray-300"
                />
                <label
                  htmlFor="default-checkbox"
                  className="uppercase text-[15px]"
                >
                  Amarelo Claro
                </label>
                <p className="font-light text-[15px] text-gray-500">
                  (14)
                </p>
              </div>
              <div className="flex items-center gap-2">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value=""
                  className="border-gray-300"
                />
                <label
                  htmlFor="default-checkbox"
                  className="uppercase text-[15px]"
                >
                  Amarelo Claro
                </label>
                <p className="font-light text-[15px] text-gray-500">
                  (14)
                </p>
              </div>
              <div className="flex items-center gap-2">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value=""
                  className="border-gray-300"
                />
                <label
                  htmlFor="default-checkbox"
                  className="uppercase text-[15px]"
                >
                  Amarelo Claro
                </label>
                <p className="font-light text-[15px] text-gray-500">
                  (14)
                </p>
              </div>
              <div className="flex items-center gap-2">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value=""
                  className="border-gray-300"
                />
                <label
                  htmlFor="default-checkbox"
                  className="uppercase text-[15px]"
                >
                  Amarelo Claro
                </label>
                <p className="font-light text-[15px] text-gray-500">
                  (14)
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col rounded-md border border-[#ccc]">
            <div className="flex w-full gap-2 bg-[#ccc] py-3 px-2 justify-start items-center">
              <AiFillCaretDown size={15} color="black" />
              <p className="text-[17px]">Filtra por Tamanho</p>
            </div>
            <div className="flex flex-col gap-2 py-3 px-2">
              <div className="flex items-center gap-2">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value=""
                  className="border-gray-300"
                />
                <label
                  htmlFor="default-checkbox"
                  className="uppercase text-[15px]"
                >
                  Amarelo Claro
                </label>
                <p className="font-light text-[15px] text-gray-500">
                  (14)
                </p>
              </div>
              <div className="flex items-center gap-2">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value=""
                  className="border-gray-300"
                />
                <label
                  htmlFor="default-checkbox"
                  className="uppercase text-[15px]"
                >
                  Amarelo Claro
                </label>
                <p className="font-light text-[15px] text-gray-500">
                  (14)
                </p>
              </div>
              <div className="flex items-center gap-2">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value=""
                  className="border-gray-300"
                />
                <label
                  htmlFor="default-checkbox"
                  className="uppercase text-[15px]"
                >
                  Amarelo Claro
                </label>
                <p className="font-light text-[15px] text-gray-500">
                  (14)
                </p>
              </div>
              <div className="flex items-center gap-2">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value=""
                  className="border-gray-300"
                />
                <label
                  htmlFor="default-checkbox"
                  className="uppercase text-[15px]"
                >
                  Amarelo Claro
                </label>
                <p className="font-light text-[15px] text-gray-500">
                  (14)
                </p>
              </div>
              <div className="flex items-center gap-2">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value=""
                  className="border-gray-300"
                />
                <label
                  htmlFor="default-checkbox"
                  className="uppercase text-[15px]"
                >
                  Amarelo Claro
                </label>
                <p className="font-light text-[15px] text-gray-500">
                  (14)
                </p>
              </div>
              <div className="flex items-center gap-2">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value=""
                  className="border-gray-300"
                />
                <label
                  htmlFor="default-checkbox"
                  className="uppercase text-[15px]"
                >
                  Amarelo Claro
                </label>
                <p className="font-light text-[15px] text-gray-500">
                  (14)
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="flex flex-col w-full gap-5">
          <h3 className="uppercase text-[20px] font-medium">
            {path}
          </h3>
          <div className="flex justify-between items-center border-y py-5 border-[#ccc]">
            <div className="flex items-center justify-center gap-3">
              <p className="text-[15px]">Ordenação:</p>
              <select className="text-[15px]">
                <option value="especial">Especial</option>
                <option value="especial">Especial</option>
                <option value="especial">Especial</option>
                <option value="especial">Especial</option>
                <option value="especial">Especial</option>
              </select>
            </div>
            <div className="flex items-center justify-center gap-3">
              <p className="text-[15px]">Itens por página:</p>
              <select className="text-[15px]">
                <option value="30">30</option>
                <option value="60">60</option>
                <option value="90">90</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-between gap-5">
            {products.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-col border border-[#ccc]"
                >
                  <div className="flex h-full w-full">
                    <NextImage alt="product-image" src={Product1} />
                  </div>
                  <div className="flex flex-col items-center py-10 gap-5 justify-center w-full">
                    <p className="uppercase text-[17px]">
                      {item.name}
                    </p>
                    <p className="uppercase text-[17px]">
                      R${item.price}
                    </p>
                    <div className="flex flex-row gap-2">
                      <div className="flex w-[20px] md:w-[25px] h-[20px] md:h-[25px] border border-black rounded-full bg-black" />
                      <div className="flex w-[20px] md:w-[25px] h-[20px] md:h-[25px] border border-black rounded-full bg-red-500" />
                      <div className="flex w-[20px] md:w-[25px] h-[20px] md:h-[25px] border border-black rounded-full bg-pink-500" />
                      <div className="flex w-[20px] md:w-[25px] h-[20px] md:h-[25px] border border-black rounded-full bg-purple-500" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </section>
    </main>
  );
}
