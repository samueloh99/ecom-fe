import {
  createContext,
  ReactNode,
  useState,
  useContext,
  useEffect,
} from "react";

import { useRouter } from "next/router";

import { setCookie, parseCookies } from "nookies";

type CartState = {
  idProd: number;
  nome: string;
  referencia: string;
  ncm: string;
  cor: string;
  tamanho: string;
  foto1: string;
  quantidade: number;
  sku_referencia: string;
  preco: number;
  idSku: number;
  peso: number;
};

type CartContextData = {
  cart: CartState[];
  setCart: (produto: CartState[]) => void;
  decreaseCart: (index: number) => void;
  incrementCart: (index: number) => void;
  deleteItemOnCart: (index: number) => void;
  totalCart: () => number;
  totalQtd: () => number;
};

type CartProviderProps = {
  children: ReactNode;
};

export const CartContext = createContext({} as CartContextData);

export function CartProvider({ children }: CartProviderProps) {
  const { pathname } = useRouter();
  const cookies = parseCookies();

  const [cart, setCart] = useState<CartState[]>([]);

  useEffect(() => {
    if (cookies["cart"] !== undefined) {
      setCart(JSON.parse(cookies["cart"]));
    }
  }, [pathname]);

  useEffect(() => {
    let newArr = [...cart];
    newArr
      .map((e) => e["idSku"])
      .map((e, i, final) => {
        if (final.indexOf(e) !== i) {
          newArr.splice(i, 1);

          newArr[final.indexOf(e)].quantidade =
            newArr[final.indexOf(e)].quantidade + 1;
          setCart(newArr);
        }
      });

    setCookie(undefined, "cart", JSON.stringify(newArr), {
      maxAge: 86400,
      path: "/",
    });
  }, [cart]);

  const decreaseCart = (index: number) => {
    let newArr = [...cart];
    newArr[index].quantidade = newArr[index].quantidade - 1;
    setCart(newArr);
    if (newArr[index].quantidade === 0) {
      deleteItemOnCart(index);
    }
  };

  const incrementCart = (index: number) => {
    let newArr = [...cart];
    newArr[index].quantidade = newArr[index].quantidade + 1;
    setCart(newArr);
  };

  const deleteItemOnCart = (index: number) => {
    let newArr = [...cart];
    newArr.splice(index, 1);
    setCart(newArr);
  };

  const totalCart = () => {
    const total = cart
      .map((item) => item.preco * item.quantidade)
      .reduce((prev, curr) => prev + curr, 0)
      .toFixed(2);

    return parseFloat(total);
  };

  const totalQtd = () => {
    const itemQtdInCart = cart
      .map((item) => item.quantidade)
      .reduce((prev, curr) => prev + curr, 0);

    return itemQtdInCart;
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        totalCart,
        totalQtd,
        setCart,
        decreaseCart,
        incrementCart,
        deleteItemOnCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCartContext = () => useContext(CartContext);
