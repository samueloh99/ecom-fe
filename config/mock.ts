export const products = Array.from({ length: 100 }, (_, i) => ({
  name: `Product ${i + 1}`,
  price: 100 * (i + 1),
  id: i,
  slug: `/produto/product${i + 1}`,
}));
