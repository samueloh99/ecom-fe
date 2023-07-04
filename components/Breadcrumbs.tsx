import NextLink from "next/link";

interface BreadcrumbsProps {
  paths: string[];
}

export const Breadcrumbs = ({ paths }: BreadcrumbsProps) => {
  return (
    <section className="flex w-full mt-5">
      <NextLink href={`/`} className={`uppercase`}>
        Home
        <span className="mx-2">/</span>
      </NextLink>
      {paths.map((item, index) => {
        const isLastItem = index === paths.length - 1;
        if (isLastItem) {
          return (
            <p
              key={index}
              className="cursor-pointer font-bold uppercase"
            >
              {item}
            </p>
          );
        }
        return (
          <NextLink
            key={index}
            href={`/${item}`}
            className={`uppercase`}
          >
            {item}
            <span className="mx-2">/</span>
          </NextLink>
        );
      })}
    </section>
  );
};
