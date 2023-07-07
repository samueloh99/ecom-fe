import { CategoriaType } from "@/types/categoria";

export async function getCategorias(): Promise<CategoriaType[] | []> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_APP_URL}/api/categorias`,
    {
      cache: "no-cache",
    }
  );

  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
