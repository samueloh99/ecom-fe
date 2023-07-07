export async function GET() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/produtos?populate[categorias]=*&populate[skus][populate]=*`,
    {
      method: "GET",
      cache: "no-cache",
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_APIKEY}`,
      },
    }
  );
  const data = await res.json();

  const produtos = data.data.map((item: any) => {
    const {
      id,
      attributes: {
        nome,
        referencia,
        ncm,
        ativo,
        descontoTipo,
        descontoValor,
        descontoDe,
        descontoAte,
        createdAt,
        updatedAt,
        publishedAt,
        categorias: { data: categoriasData },
        skus: { data },
      },
    } = item;

    return {
      id,
      nome,
      referencia,
      ncm,
      ativo,
      descontoTipo,
      descontoValor,
      descontoDe,
      descontoAte,
      createdAt,
      slug: `/produto/${nome
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")}`,
      updatedAt,
      publishedAt,
      categorias: categoriasData.map((item: any) => {
        const {
          id,
          attributes: { nome },
        } = item;
        return {
          id,
          nome,
        };
      }),
      skus: data.map((item: any) => {
        const {
          id,
          attributes: {
            skuReferencia,
            gtin,
            mpn,
            quantidade,
            precoCusto,
            precoVenda,
            ativo,
            createdAt,
            updatedAt,
            publishedAt,
            cor: {
              data: {
                attributes: { nome: nomeCor, hexadecimal },
              },
            },
            tamanho: {
              data: {
                attributes: { nome: nomeTamanho },
              },
            },
            foto1,
            foto2,
            foto3,
            foto4,
            foto5,
            foto6,
          },
        } = item;
        return {
          id,
          skuReferencia,
          gtin,
          mpn,
          quantidade,
          precoCusto,
          precoVenda,
          ativo,
          createdAt,
          updatedAt,
          publishedAt,
          cor: { nome: nomeCor, hexadecimal },
          tamanho: nomeTamanho,
          foto1:
            foto1.data !== null ? foto1.data.attributes.url : null,
          foto2:
            foto2.data !== null ? foto2.data.attributes.url : null,
          foto3:
            foto3.data !== null ? foto3.data.attributes.url : null,
          foto4:
            foto4.data !== null ? foto4.data.attributes.url : null,
          foto5:
            foto5.data !== null ? foto5.data.attributes.url : null,
          foto6:
            foto6.data !== null ? foto6.data.attributes.url : null,
        };
      }),
    };
  });
  return new Response(JSON.stringify(produtos), {
    status: 200,
  });
}
