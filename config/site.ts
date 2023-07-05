export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "LBOficial",
  description:
    "Saldo | As tendências de moda para mulher, homem e criança na ZARA online. Encontre toda a roupa online: casacos, calças, sapatos e acessórios.",
  mainNavHeader: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Vestidos",
      href: "/vestidos",
    },
  ],
  mainNavFooter: [
    {
      title: "Quem Somos",
      href: "/quemsomos",
    },
    {
      title: "Fale Conosco",
      href: "/faleconosco",
    },
  ],
  links: {
    facebook: "https://twitter.com/privacyscaling",
    instagram: "https://github.com/privacy-scaling-explorations",
    upwebsite: "https://www.upagencybrasil.com.br/",
  },
  categories: [
    {
      id: 0,
      name: "Vestidos",
      slug: "/categoria/vestidos",
    },
    {
      id: 1,
      name: "Calças",
      slug: "/categoria/calcas",
    },
    {
      id: 2,
      name: "Shorts",
      slug: "/categoria/shorts",
    },

    {
      id: 3,
      name: "Macacão",
      slug: "/categoria/macacao",
    },
    {
      id: 4,
      name: "Saias",
      slug: "/categoria/saias",
    },
    {
      id: 5,
      name: "Cropped",
      slug: "/categoria/cropped",
    },
    {
      id: 6,
      name: "Body",
      slug: "/categoria/body",
    },
    {
      id: 7,
      name: "Kimono",
      slug: "/categoria/kimono",
    },
  ],
};
