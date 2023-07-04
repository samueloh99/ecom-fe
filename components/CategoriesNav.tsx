import NextLink from "next/link";

import { siteConfig } from "@/config/site";

export const CategoriesNav = () => {
  return (
    <div className="flex flex-wrap border border-[#ccc]">
      <div className="flex container justify-between">
        {siteConfig.categories.map((item, index) => {
          return (
            <NextLink key={index} href={item.slug}>
              <div className="flex cursor-pointer">
                <h4>{item.name}</h4>
              </div>
            </NextLink>
          );
        })}
      </div>
    </div>
  );
};
