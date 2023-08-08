import NextLink from "next/link";
import { useQuery } from "@tanstack/react-query";

import { siteConfig } from "@/config/site";
import { getCategorias } from "@/utils/getCategorias";

export const CategoriesNav = () => {
  const { data } = useQuery({
    queryKey: ["categorias"],
    queryFn: () => getCategorias(),
  });

  if (!data) {
    return (
      <div className="hidden md:flex flex-wrap border-t border-[#ccc] container justify-center">
        loading
      </div>
    );
  }
  return (
    <div className="hidden md:flex flex-wrap border-t border-[#ccc]">
      <div className="flex container justify-between">
        {data.map((item, index) => {
          return (
            <NextLink
              key={index}
              href={`${item.slug}`}
              replace={true}
            >
              <div className="flex cursor-pointer">
                <h4>{item.nome}</h4>
              </div>
            </NextLink>
          );
        })}
      </div>
    </div>
  );
};
