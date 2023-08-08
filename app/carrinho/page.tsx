"use client";

import NextImage from "next/image";

import { AiOutlineArrowLeft } from "react-icons/ai";
import { BsFillCartFill, BsTrash3 } from "react-icons/bs";
import { GrShare } from "react-icons/gr";

import Product1 from "@/public/product1.webp";

const CartPage = () => {
  return (
    <div className="flex flex-col bg-[#F5F5F0] w-full px-3 lg:px-3 xl:px-0 ">
      <div className="flex flex-col container py-5 gap-5">
        <h4 className="text-[17px] uppercase font-bold">Carrinho</h4>
        <div className="flex items-center-justify-center gap-5">
          <button className="flex gap-4 items-center justify-center bg-white py-3 px-2 text-[17px] font-medium text-black">
            <AiOutlineArrowLeft size={20} />
            Continuar Comprando
          </button>
          <button className="flex gap-4 items-center justify-center bg-white py-3 px-2 text-[17px] font-medium text-black">
            <GrShare size={20} />
            Compartilhar Carrinho
          </button>
        </div>
        <div className="flex flex-col xl:flex-row justify-between items-start gap-5 max-w-6/6 w-full">
          <div className="flex flex-col justify-center items-center w-full xl:w-4/6 gap-5">
            <div className="flex relative flex-col items-center xl:flex-row w-full bg-white gap-5 xl:gap-0 py-3 px-2">
              <div
                className="flex absolute top-5 right-5 cursor-pointer"
                onClick={() => console.log("remove item from cart")}
              >
                <BsTrash3 size={25} color="black" />
              </div>
              <div className="flex gap-2 xl:w-2/5 w-full">
                <div className="flex max-w-[170px] w-full">
                  <NextImage
                    draggable={false}
                    src={Product1}
                    alt={"produto1"}
                    style={{
                      objectFit: "fill",
                    }}
                    width={170}
                    height={400}
                  />
                </div>
                <div className="flex justify-between flex-col w-full">
                  <div className="flex flex-col w-full">
                    <h4 className="text-[17px] text-gray-z">
                      PZ1119V01-38
                    </h4>
                    <h4 className="text-[17px]">
                      Vestido Longo Elis
                    </h4>
                  </div>
                  <div className="flex flex-col w-full">
                    <h4 className="text-[17px] text-gray-z line-through">
                      R$99,99
                    </h4>
                    <h4 className="text-[20px] font-medium">
                      R$99,99
                    </h4>
                  </div>
                  <div className="flex flex-col w-full justify-center item-scenter">
                    <div className="flex items-center justify-start w-full gap-2">
                      <h4 className="text-[17px]">Valor Total:</h4>
                      <h4 className="text-[17px] font-medium">
                        R$99,99
                      </h4>
                    </div>
                    <p className="text-[15px] text-gray-z">
                      18 items
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center w-full xl:w-3/5">
                <table className="w-[600px]">
                  <thead>
                    <tr>
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
                    <tr>
                      <td className="h-[50px]">
                        <div className="flex w-full h-full items-center justify-center">
                          <div className="flex w-[20px] xl:w-[25px] h-[20px] xl:h-[25px] rounded-full bg-black" />
                        </div>
                      </td>
                      <td className="h-[50px]">
                        <div className="flex h-full justify-center">
                          <p className="flex items-center justify-center w-2/5 border border-black">
                            -
                          </p>
                          <p className="flex items-center justify-center w-2/5 border-y border-black">
                            10
                          </p>
                          <p className="flex items-center justify-center w-2/5 border border-black">
                            +
                          </p>
                        </div>
                      </td>
                      <td className="h-[50px]">
                        <div className="flex h-full justify-center">
                          <p className="flex items-center justify-center w-2/5 border border-black">
                            -
                          </p>
                          <p className="flex items-center justify-center w-2/5 border-y border-black">
                            10
                          </p>
                          <p className="flex items-center justify-center w-2/5 border border-black">
                            +
                          </p>
                        </div>
                      </td>
                      <td className="h-[50px]">
                        <div className="flex h-full justify-center">
                          <p className="flex items-center justify-center w-2/5 border border-black">
                            -
                          </p>
                          <p className="flex items-center justify-center w-2/5 border-y border-black">
                            10
                          </p>
                          <p className="flex items-center justify-center w-2/5 border border-black">
                            +
                          </p>
                        </div>
                      </td>
                      <td className="h-[50px]">
                        <div className="flex h-full justify-center">
                          <p className="flex items-center justify-center w-2/5 border border-black">
                            -
                          </p>
                          <p className="flex items-center justify-center w-2/5 border-y border-black">
                            10
                          </p>
                          <p className="flex items-center justify-center w-2/5 border border-black">
                            +
                          </p>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="h-[50px]">
                        <div className="flex w-full h-full items-center justify-center">
                          <div className="flex w-[20px] xl:w-[25px] h-[20px] xl:h-[25px] rounded-full bg-red-500" />
                        </div>
                      </td>
                      <td className="h-[50px]">
                        <div className="flex h-full justify-center">
                          <p className="flex items-center justify-center w-2/5 border border-black">
                            -
                          </p>
                          <p className="flex items-center justify-center w-2/5 border-y border-black">
                            10
                          </p>
                          <p className="flex items-center justify-center w-2/5 border border-black">
                            +
                          </p>
                        </div>
                      </td>
                      <td className="h-[50px]">
                        <div className="flex h-full justify-center">
                          <p className="flex items-center justify-center w-2/5 border border-black">
                            -
                          </p>
                          <p className="flex items-center justify-center w-2/5 border-y border-black">
                            10
                          </p>
                          <p className="flex items-center justify-center w-2/5 border border-black">
                            +
                          </p>
                        </div>
                      </td>
                      <td className="h-[50px]">
                        <div className="flex h-full justify-center">
                          <p className="flex items-center justify-center w-2/5 border border-black">
                            -
                          </p>
                          <p className="flex items-center justify-center w-2/5 border-y border-black">
                            10
                          </p>
                          <p className="flex items-center justify-center w-2/5 border border-black">
                            +
                          </p>
                        </div>
                      </td>
                      <td className="h-[50px]">
                        <div className="flex h-full justify-center">
                          <p className="flex items-center justify-center w-2/5 border border-black">
                            -
                          </p>
                          <p className="flex items-center justify-center w-2/5 border-y border-black">
                            10
                          </p>
                          <p className="flex items-center justify-center w-2/5 border border-black">
                            +
                          </p>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="flex flex-col w-full xl:w-2/6 h-auto py-5 px-2 bg-white">
            <div className="flex flex-col pb-10 gap-4 px-5">
              <div className="flex flex-row items-start justify-between">
                <div className="flex flex-col justify-center items-start">
                  <h4 className="text-[17px]">Vestido Longo Elise</h4>
                  <h4 className="text-[17px] text-gray-z">
                    Preto - P
                  </h4>
                </div>
                <h4 className="text-[17px]">R$49,90</h4>
              </div>
              <div className="flex flex-row items-start justify-between">
                <div className="flex flex-col justify-center items-start">
                  <h4 className="text-[17px]">Vestido Longo Elise</h4>
                  <h4 className="text-[17px] text-gray-z">
                    Preto - P
                  </h4>
                </div>
                <h4 className="text-[17px]">R$49,90</h4>
              </div>
              <div className="flex flex-row items-start justify-between">
                <div className="flex flex-col justify-center items-start">
                  <h4 className="text-[17px]">Vestido Longo Elise</h4>
                  <h4 className="text-[17px] text-gray-z">
                    Preto - P
                  </h4>
                </div>
                <h4 className="text-[17px]">R$49,90</h4>
              </div>
              <div className="flex flex-row items-start justify-between">
                <div className="flex flex-col justify-center items-start">
                  <h4 className="text-[17px]">Vestido Longo Elise</h4>
                  <h4 className="text-[17px] text-gray-z">
                    Preto - P
                  </h4>
                </div>
                <h4 className="text-[17px]">R$49,90</h4>
              </div>
            </div>
            <div className="flex bg-black w-4/5 m-auto h-[1px]" />
            <div className="flex flex-col w-full justify-center items-end px-5 pt-10">
              <h4 className="text-[17px]">Subtotal: R$2.000,99</h4>
              <p className="text-[15px] text-gray-z">18 items</p>
            </div>
            <div className="flex w-full justify-center items-center px-5">
              <button className="flex w-full gap-2 bg-[#89DC74] text-[20px] items-center mt-10 justify-center py-3 font-normal text-white">
                FINALIZAR PEDIDO
                <BsFillCartFill color="white" size={25} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
