export type ProdutoType = {
  ativo: boolean;
  createdAt: Date;
  descontoAte: Date;
  descontoDe: Date;
  descontoTipo: string;
  descontoValor: number;
  id: number;
  ncm: string;
  nome: string;
  publishedAt: Date;
  slug: string;
  referencia: string;
  categorias: {
    nome: string;
    id: number;
  }[];
  updatedAt: Date;
  skus: {
    ativo: boolean;
    cor: {
      nome: string;
      hexadecimal: string;
    };
    createdAt: Date;
    foto1: string;
    foto2: string;
    foto3: string;
    foto4: string;
    foto5: string;
    foto6: string;
    gtin: string;
    id: number;
    mpn: string;
    precoCusto: number;
    precoVenda: number;
    publishedAt: Date;
    quantidade: number;
    skuReferencia: string;
    tamanho: string;
    updatedAt: Date;
  }[];
};
