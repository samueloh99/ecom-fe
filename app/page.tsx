"use client";

import Banner1 from "@/public/banner1.webp";
import Banner2 from "@/public/banner2.webp";
import Banner3 from "@/public/banner3.webp";
import Banner4 from "@/public/banner4.webp";

import { ImageSlider } from "@/components/ImageSlider";

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

export default function Home() {
  return (
    <main className="flex flex-col border border-black w-full min-h-screen flex-col items-center justify-between">
      <ImageSlider banners={banners} />
    </main>
  );
}
