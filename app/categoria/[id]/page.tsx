"use client";

import NextImage from "next/image";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { AiFillCaretDown } from "react-icons/ai";
import { BiSolidUser } from "react-icons/bi";

import { getProdutos } from "@/utils/getProdutos";

import { Breadcrumbs } from "@/components/Breadcrumbs";

const CategoryPage = () => {
  const pathName = usePathname();
  const path = pathName.split("/").slice(1);

  const { data } = useQuery({
    queryKey: ["produtos"],
    queryFn: () => getProdutos(),
  });

  if (!data) {
    return <div>loading</div>;
  }

  return (
    <main className="flex container flex-col w-full min-h-screen gap-10 flex-col items-center mb-20 px-3 lg:px-3 xl:px-0">
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
            {path.slice(1)}
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
            {data &&
              data
                .filter((product) =>
                  product.categorias.some(
                    (categoria) =>
                      categoria.nome
                        .toLowerCase()
                        .normalize("NFD")
                        .replace(/[\u0300-\u036f]/g, "") ===
                      path[path.length - 1]
                  )
                )
                .map((item, index) => {
                  const { skus } = item;
                  let colors = [
                    ...new Set(
                      skus.map((item) => item.cor.hexadecimal)
                    ),
                  ];

                  let sizes = [
                    ...new Set(skus.map((item) => item.tamanho)),
                  ];

                  const lowestPrice = skus.reduce((lowest, sku) => {
                    return sku.precoVenda < lowest
                      ? sku.precoVenda
                      : lowest;
                  }, skus[0].precoVenda);

                  return (
                    <NextLink href={item.slug} key={index}>
                      <div className="flex flex-col">
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
                        <div className="flex flex-col items-center py-5 px-3 gap-2 justify-center w-full border-x border-b border-[#ccc]">
                          <p className="capitalize text-[17px]">
                            {item.nome}
                          </p>
                          {/* <div className="flex flex-row justify-start gap-2 items-end w-full">
                          <p className="text-[14px] font-normal">
                            A partir de
                          </p>
                          <p className="uppercase text-[18px] font-medium">
                            R$
                            {lowestPrice.toString().replace(".", ",")}
                          </p>
                        </div> */}
                          <div className="flex flex-col justify-center items-center w-full gap-2">
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
                          {/* <button className="flex w-full gap-2 bg-[#89DC74] text-[15px] font-bold items-center justify-center py-3 text-white mt-5">
                          VER DETALHES
                        </button> */}
                          <div className="flex gap-4 pt-5 flex-col w-full justify-center items-center">
                            <p className="text-[13px] text-gray-500 underline">
                              Para vizualizar o Preço, por favor
                            </p>
                            <div className="flex flex-col gap-2 flex-row gap-2 justify-center items-center w-full">
                              <button className="flex w-full gap-2 bg-[#89DC74] text-[15px] items-center justify-center py-3 font-normal text-white">
                                CADASTRE-SE
                                <BiSolidUser
                                  color="white"
                                  size={15}
                                />
                              </button>
                              <p className="font-light text-[13px] text-gray-500">
                                ou
                              </p>
                              <div className="flex gap-1 w-full justify-center items-center">
                                <p className="font-light text-[15px] text-gray-500">
                                  FAÇA O{" "}
                                </p>
                                <p className="font-light text-[15px] text-gray-500 underline">
                                  LOGIN
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </NextLink>
                  );
                })}
          </div>
        </section>
      </section>
    </main>
  );
};

export default CategoryPage;
