"use client";

import { useState } from "react";
import NextLink from "next/link";
import NextImage from "next/image";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { BiSolidUser } from "react-icons/bi";
import { AiOutlineMenu } from "react-icons/ai";

import Logo from "@/public/logo.svg";

import { siteConfig } from "@/config/site";
import { CategoriesNav } from "./CategoriesNav";

import { HeaderDrawer } from "./HeaderDrawer";

export const Header = () => {
  const [openHeader, setOpenHeader] = useState(false);
  return (
    <div className="flex flex-col min-h-[100px] md:min-h-[150px] h-full px-3 border-b border-[#ccc]">
      <div className="flex flex-grow container max-h-full justify-between items-center relative">
        <div className="hidden md:flex gap-5">
          <NextLink
            href={siteConfig.links.facebook}
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebookF size={20} color="black" />
          </NextLink>
          <NextLink
            href={siteConfig.links.instagram}
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram size={20} color="black" />
          </NextLink>
        </div>
        <div className="hidden md:flex relative md:absolute left-1/2 transform -translate-x-1/2">
          <NextLink href={"/"}>
            <NextImage
              alt="logo"
              src={Logo}
              height={40}
              width={240}
            />
          </NextLink>
        </div>
        <div className="flex md:hidden">
          <NextLink href={"/"}>
            <NextImage
              alt="logo"
              src={Logo}
              height={40}
              width={140}
            />
          </NextLink>
        </div>
        <div className="hidden md:flex h-full gap-2 justify-end items-center">
          <BiSolidUser size={20} color="black" />
          <h6>Entrar</h6>
          <div className="bg-black w-[1px] h-[20px]" />
          <h6>Criar Conta</h6>
        </div>
        <div
          className="flex md:hidden h-full justify-center items-center cursor-pointer"
          onClick={() => setOpenHeader(true)}
        >
          <AiOutlineMenu size={25} color="black" />
        </div>
      </div>
      <CategoriesNav />
      {openHeader && (
        <HeaderDrawer
          openHeader={openHeader}
          setOpenHeader={setOpenHeader}
        />
      )}
    </div>
  );
};
