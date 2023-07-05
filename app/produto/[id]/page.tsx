"use client";

import NextImage from "next/image";
import { usePathname } from "next/navigation";

import { BsFillCartFill } from "react-icons/bs";
import { BiSolidUser } from "react-icons/bi";

import Product1 from "@/public/product1.webp";
import TabeladeMedida from "@/public/tabela-de-medidas.png";

import { Breadcrumbs } from "@/components/Breadcrumbs";
import { StarSvg } from "@/components/StarSvg";

export default function ProductPage() {
  const pathName = usePathname();
  const path = pathName.split("/").slice(1);
  return (
    <main className="flex px-3 md:px-0 container flex-col w-full min-h-screen gap-10 flex-col items-center mb-20">
      <Breadcrumbs paths={path} />
      <section className="flex flex-col lg:flex-row w-full gap-5">
        <div className="flex max-w-full justify-center items-center lg:max-w-[600px] w-full">
          <NextImage
            src={Product1}
            alt="produto-image"
            style={{ objectFit: "contain" }}
          />
        </div>
        <div className="flex w-full flex-col">
          <div className="flex items-start justify-center gap-2 flex-col border-b pb-5 border-black">
            <p className="font-light text-[15px] text-gray-500">
              (PZ1113)
            </p>
            <h4 className="capitalize text-[17px]">
              Vestido Longo Elis
            </h4>
            <div className="flex flex-row gap-2 items-center">
              <StarSvg color="white" />
              <StarSvg color="white" />
              <StarSvg color="white" />
              <StarSvg color="white" />
              <StarSvg color="white" />
              <p className="font-light text-[15px] text-gray-500">
                (0) Avaliações
              </p>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-2 border-b border-black py-5">
            <div className="flex flex-row gap-1">
              <p className="text-[15px] text-gray-500">Cor:</p>
              <p className="text-[15px] text-black">Preto</p>
            </div>
            <div className="flex flex-row gap-2">
              <div
                className="flex justify-center items-center border border-black rounded-full p-[2px] cursor-pointer"
                onClick={() => console.log("Change color")}
              >
                <div className="w-[20px] md:w-[25px] h-[20px] md:h-[25px] rounded-full bg-black" />
              </div>
              <div
                className="flex justify-center items-center border border-black rounded-full p-[2px] cursor-pointer"
                onClick={() => console.log("Change color")}
              >
                <div className="w-[20px] md:w-[25px] h-[20px] md:h-[25px] rounded-full bg-black" />
              </div>
              <div
                className="flex justify-center items-center border border-black rounded-full p-[2px] cursor-pointer"
                onClick={() => console.log("Change color")}
              >
                <div className="w-[20px] md:w-[25px] h-[20px] md:h-[25px] rounded-full bg-black" />
              </div>
            </div>
          </div>
          <div className="flex items-start justify-center gap-2 flex-col border-b py-5 border-black">
            {/* <table className="w-full">
              <thead>
                <tr className="">
                  <th className="w-[50px]" />
                  <th className="w-[100px]">
                    <div className="flex w-full items-center justify-center">
                      P
                    </div>
                  </th>
                  <th className="w-[100px]">
                    <div className="flex w-full items-center justify-center">
                      M
                    </div>
                  </th>
                  <th className="w-[100px]">
                    <div className="flex w-full items-center justify-center">
                      G
                    </div>
                  </th>
                  <th className="w-[100px]">
                    <div className="flex w-full items-center justify-center">
                      GG
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="">
                  <td className="h-[50px]">
                    <div className="flex w-full h-full items-center justify-center">
                      <div className="flex w-[20px] md:w-[25px] h-[20px] md:h-[25px] rounded-full bg-black" />
                    </div>
                  </td>
                  <td className="h-[50px]">
                    <div className="flex h-full">
                      <p className="flex bg-[#D9D9D9] items-center justify-center w-1/4 border border-black">
                        -
                      </p>
                      <p className="flex items-center justify-center w-2/4 border-y border-black">
                        10
                      </p>
                      <p className="flex bg-[#D9D9D9] items-center justify-center w-1/4 border border-black">
                        +
                      </p>
                    </div>
                  </td>
                  <td className="h-[50px]">
                    <div className="flex h-full">
                      <p className="flex items-center justify-center w-1/4 border border-black">
                        -
                      </p>
                      <p className="flex items-center justify-center w-2/4 border-y border-black">
                        10
                      </p>
                      <p className="flex items-center justify-center w-1/4 border border-black">
                        +
                      </p>
                    </div>
                  </td>
                  <td className="h-[50px]">
                    <div className="flex h-full">
                      <p className="flex items-center justify-center w-1/4 border border-black">
                        -
                      </p>
                      <p className="flex items-center justify-center w-2/4 border-y border-black">
                        10
                      </p>
                      <p className="flex items-center justify-center w-1/4 border border-black">
                        +
                      </p>
                    </div>
                  </td>
                  <td className="h-[50px]">
                    <div className="flex h-full">
                      <p className="flex items-center justify-center w-1/4 border border-black">
                        -
                      </p>
                      <p className="flex items-center justify-center w-2/4 border-y border-black">
                        10
                      </p>
                      <p className="flex items-center justify-center w-1/4 border border-black">
                        +
                      </p>
                    </div>
                  </td>
                </tr>
                <tr className="">
                  <td className="h-[50px]">
                    <div className="flex w-full h-full items-center justify-center">
                      <div className="flex w-[20px] md:w-[25px] h-[20px] md:h-[25px] rounded-full bg-red-500" />
                    </div>
                  </td>
                  <td className="h-[50px]">
                    <div className="flex h-full">
                      <p className="flex items-center justify-center w-1/4 border border-black">
                        -
                      </p>
                      <p className="flex items-center justify-center w-2/4 border-y border-black">
                        10
                      </p>
                      <p className="flex items-center justify-center w-1/4 border border-black">
                        +
                      </p>
                    </div>
                  </td>
                  <td className="h-[50px]">
                    <div className="flex h-full">
                      <p className="flex items-center justify-center w-1/4 border border-black">
                        -
                      </p>
                      <p className="flex items-center justify-center w-2/4 border-y border-black">
                        10
                      </p>
                      <p className="flex items-center justify-center w-1/4 border border-black">
                        +
                      </p>
                    </div>
                  </td>
                  <td className="h-[50px]">
                    <div className="flex h-full">
                      <p className="flex items-center justify-center w-1/4 border border-black">
                        -
                      </p>
                      <p className="flex items-center justify-center w-2/4 border-y border-black">
                        10
                      </p>
                      <p className="flex items-center justify-center w-1/4 border border-black">
                        +
                      </p>
                    </div>
                  </td>
                  <td className="h-[50px]">
                    <div className="flex h-full">
                      <p className="flex items-center justify-center w-1/4 border border-black">
                        -
                      </p>
                      <p className="flex items-center justify-center w-2/4 border-y border-black">
                        10
                      </p>
                      <p className="flex items-center justify-center w-1/4 border border-black">
                        +
                      </p>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table> */}
            {/* <div className="flex w-full justify-between items-center py-5">
              <p
                className="text-[17px] underline cursor-pointer"
                onClick={() => console.log("ESVAZIAR CARRINHO")}
              >
                esvaziar carrinho
              </p>
              <div>
                <p className="font-light text-[15px] text-gray-500">
                  Quantidade de Peças: 18 und
                </p>
                <p className="text-[20px]">Total: R$ 1.859,60</p>
              </div>
            </div>
            <button className="flex w-full gap-2 bg-[#89DC74] text-[20px] items-center justify-center py-3 font-normal text-white">
              FINALIZAR PEDIDO
              <BsFillCartFill color="white" size={25} />
            </button> */}
            <div className="flex gap-4 pt-5 flex-col w-full">
              <p className="text-[15px] text-gray-500 underline">
                Para vizualizar o Preço, por favor
              </p>
              <div className="flex gap-5 flex-row gap-2 justify-between items-center">
                <button className="flex w-full gap-2 bg-[#89DC74] text-[17px] items-center justify-center py-3 font-normal text-white">
                  CADASTRE-SE
                  <BiSolidUser color="white" size={25} />
                </button>
                <p className="font-light text-[15px] text-gray-500">
                  ou
                </p>
                <div className="flex gap-1 w-3/5 md:w-2/5 justify-start">
                  <p className="font-light text-[17px] text-gray-500">
                    FAÇA O{" "}
                  </p>
                  <p className="font-light text-[17px] text-gray-500 underline">
                    LOGIN
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-5 flex-col w-full pt-5">
            <h4 className="text-[17px]">Fretes e Devoluções</h4>
            <ul className="text-[15px] list-disc flex flex-col px-5">
              <li>Frete grátis a partir de R$199</li>
              <li>Entrega rápida para todo o Brasil.</li>
              <li>
                Você tem 30 dias para devolver seu pedido
                gratuitamente e receber em créditos AMARO.
              </li>
              <li>
                Para devoluções de produtos de Beleza, Moda Íntima e
                Bem-Estar Sexual acesse a nossa FAQ.
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="w-full flex flex-col">
        <div className="flex flex-col border-y gap-4 py-10 border-black">
          <h4 className="text-[17px]">Composição</h4>
          <p className="text-[15px]">
            Composição 100% Poliester Forro 100% Poliester
          </p>
        </div>
        <div className="flex flex-col gap-4 py-10">
          <h4 className="text-[17px]">Tamanhos e Medidas</h4>
          <NextImage
            src={TabeladeMedida}
            alt="tabela-de-medida"
            style={{ objectFit: "contain" }}
          />
        </div>
      </section>
    </main>
  );
}
