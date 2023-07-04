"use client";

import NextImage from "next/image";

import Banner1 from "@/public/banner1.webp";
import Banner2 from "@/public/banner2.webp";
import Banner3 from "@/public/banner3.webp";
import Banner4 from "@/public/banner4.webp";
import Product1 from "@/public/product1.webp";
import Product2 from "@/public/product2.webp";
import Product3 from "@/public/product3.webp";
import Product4 from "@/public/product4.webp";
import Product5 from "@/public/product5.webp";
import Product6 from "@/public/product6.webp";
import Product7 from "@/public/product7.webp";
import Product8 from "@/public/product8.webp";
import ClientesCompram from "@/public/clientescompram.webp";

import { ImageSlider } from "@/components/ImageSlider";
import { CarouselSlider } from "@/components/CarouselSlider";

const banners = [
  {
    img: Banner1,
    alt: "banner1",
  },
  {
    img: Banner2,
    alt: "banner2",
  },
  {
    img: Banner3,
    alt: "banner3",
  },
  {
    img: Banner4,
    alt: "banner4",
  },
];

const carouselProducts = [
  {
    img: Product1,
    alt: "Product1",
  },
  {
    img: Product2,
    alt: "Product2",
  },
  {
    img: Product3,
    alt: "Product3",
  },
  {
    img: Product4,
    alt: "Product4",
  },
  {
    img: Product5,
    alt: "Product5",
  },
  {
    img: Product6,
    alt: "Product6",
  },
  {
    img: Product7,
    alt: "Product7",
  },
  {
    img: Product8,
    alt: "Product8",
  },
];

export default function Home() {
  return (
    <main className="flex flex-col w-full min-h-screen flex-col items-center justify-between">
      <ImageSlider banners={banners} />
      <CarouselSlider products={carouselProducts} />
      <section className="flex container">
        <NextImage
          draggable={false}
          src={ClientesCompram}
          alt={"clientes-compram"}
          layout="responsive"
          objectFit="cover"
          width={500}
          height={500}
        />
      </section>
      <CarouselSlider products={carouselProducts} />
    </main>
  );
}
