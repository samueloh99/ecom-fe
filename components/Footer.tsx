import NextLink from "next/link";
import NextImage from "next/image";
import { BsTelephoneFill, BsWhatsapp } from "react-icons/bs";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { GrMail } from "react-icons/gr";

import { siteConfig } from "@/config/site";

import UpLogo from "@/public/uplogo.webp";

export const Footer = () => {
  return (
    <footer className="flex flex-col container min-h-[350px] justify-between h-full">
      <div className="flex w-full justify-between">
        <div className="flex gap-[100px]">
          <div className="flex flex-col gap-4 min-h-full">
            <h5>Atendimento</h5>
            <div className="flex flex-col gap-2">
              {siteConfig.mainNavFooter.map((item, index) => {
                return (
                  <NextLink
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    key={index}
                  >
                    <h6>{item.title}</h6>
                  </NextLink>
                );
              })}
            </div>
          </div>
          <div className="flex flex-col gap-4 min-h-full">
            <h5>Ajuda e Suporte</h5>
            <NextLink
              href={"/politica-de-privacidade"}
              target="_blank"
              rel="noreferrer"
            >
              <h6>Política de Privacidade</h6>
            </NextLink>
          </div>
        </div>
        <div className="flex flex-col gap-4 min-h-full">
          <h5>Contato</h5>
          <h6>Entre em contato conosco</h6>
          <div className="flex items-center justify-start gap-2">
            <BsTelephoneFill color="black" size={15} />
            <h6>55 (11) 96399-0432</h6>
          </div>
          <div className="flex items-center justify-start gap-2">
            <BsWhatsapp color="black" size={15} />
            <h6>55 (11) 96399-0432</h6>
          </div>
          <div className="flex items-center justify-start gap-2">
            <GrMail color="black" size={15} />
            <h6>samueloh99@gmail.com</h6>
          </div>
          <div className="flex gap-2">
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
        </div>
      </div>
      <div className="border border-[#ccc] w-full" />
      <div className="flex items-center justify-between">
        <div className="flex flex-col text-[13px] font-light">
          <p>
            Cotton Star Industrial Ltda / CNPJ: 05.951.356/0001-24
          </p>
          <p>
            Endereço: Rodovia BR 470, 6065 - Badenfurt - Blumenau/SC -
            CEP: 89070-205
          </p>
        </div>
        <div className="flex flex-col text-[13px] font-light">
          <NextLink
            href={siteConfig.links.upwebsite}
            target="_blank"
            rel="noreferrer"
          >
            <NextImage
              src={UpLogo}
              alt="uplogo"
              width={183}
              height={60}
            />
          </NextLink>
        </div>
      </div>
    </footer>
  );
};
