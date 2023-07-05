"use client";

import { useState } from "react";
import NextImage from "next/image";
import NextLink from "next/link";
import { AiOutlineClose } from "react-icons/ai";
import { siteConfig } from "@/config/site";

interface HeaderDrawerProps {
  openHeader: boolean;
  setOpenHeader: (b: boolean) => void;
}

export const HeaderDrawer = ({
  openHeader,
  setOpenHeader,
}: HeaderDrawerProps) => {
  return (
    <div className="flex items-center md:hidden">
      <div
        className="z-5 fixed inset-0 flex justify-end bg-black opacity-50"
        onClick={() => setOpenHeader(false)}
      ></div>
      <div className="fixed inset-y-0 right-0 z-10 flex w-[257px] flex-col bg-black text-white">
        <div className="flex justify-end p-[37px]">
          <AiOutlineClose
            onClick={() => setOpenHeader(false)}
            size={25}
            className="cursor-pointer"
          />
        </div>
        <div className="flex flex-grow w-full flex-col px-[16px] font-[500]">
          <NextLink
            href={"/"}
            onClick={() => setOpenHeader(false)}
            className="p-[16px] border-y border-white"
          >
            HOME
          </NextLink>
          {siteConfig.categories.map((item, index) => {
            return (
              <NextLink
                href={item.slug}
                key={index}
                onClick={() => setOpenHeader(false)}
                className="p-[16px] border-b border-white"
              >
                {item.name}
              </NextLink>
            );
          })}
        </div>
        <div className="flex flex-grow w-full flex-col px-[16px] justify-end pb-10">
          <NextLink
            href={"/"}
            onClick={() => setOpenHeader(false)}
            className="p-[16px] border-y border-white"
          >
            LOGIN
          </NextLink>
          <NextLink
            href={"/"}
            onClick={() => setOpenHeader(false)}
            className="p-[16px] border-b border-white"
          >
            CRIAR CONTA
          </NextLink>
        </div>
      </div>
    </div>
  );
};
