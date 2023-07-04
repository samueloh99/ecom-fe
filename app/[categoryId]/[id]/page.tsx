"use client";

import NextImage from "next/image";
import { usePathname } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export default function CategoryDetailPage() {
  const pathName = usePathname();

  return (
    <main className="flex flex-co border border-black w-full min-h-screen flex-col items-center justify-between">
      <Breadcrumbs paths={pathName.split("/").slice(1)} />
    </main>
  );
}
