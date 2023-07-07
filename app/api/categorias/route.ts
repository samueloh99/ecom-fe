export async function GET() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/categorias`,
    {
      method: "GET",
      cache: "no-cache",
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_APIKEY}`,
      },
    }
  );
  const data = await res.json();

  const categorias = data.data.map((item: any) => {
    const {
      id,
      attributes: {
        ativo,
        createdAt,
        publishedAt,
        updatedAt,
        nome,
        validoDe,
        validoAte,
      },
    } = item;

    return {
      id,
      ativo,
      createdAt,
      publishedAt,
      updatedAt,
      nome,
      validoDe,
      validoAte,
      slug: `/categoria/${nome
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")}`,
    };
  });

  return new Response(JSON.stringify(categorias), {
    status: 200,
  });
}
