import NextLink from "next/link";
import NextImage from "next/image";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { BiSolidUser } from "react-icons/bi";

import { siteConfig } from "@/config/site";

import Logo from "@/public/logo.svg";

export const Header = () => {
  return (
    <div className="flex container min-h-[100px] justify-between items-center relative">
      <div className="flex gap-5">
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
      <div className="absolute left-1/2 transform -translate-x-1/2">
        <NextImage alt="logo" src={Logo} height={40} width={240} />
      </div>
      <div className="flex h-full gap-2 justify-end items-center">
        <BiSolidUser size={20} color="black" />
        <h6>Entrar</h6>
        <div className="bg-black w-[1px] h-[20px]" />
        <h6>Criar Conta</h6>
      </div>
    </div>
  );
};
