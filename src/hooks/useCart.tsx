import React from 'react';
import {createContext, ReactNode, useContext, useEffect, useState} from 'react';
import api from '../services/api';

export interface Product {
  id: number;
  name: string;
  quantity: number;
  price: number;
  image: string;
  description: string;
}
interface Cart {
  product: Product;
  quantity: number;
}
interface CardProviderProps {
  children: ReactNode;
}
interface CartContextData {
  products: Product[];
  cart: Cart[];
  addProduct: (product: Product) => void;
  decreaseQuantity: (productId: number) => void;
  removeProduct: (productId: number) => void;
}

const CartContext = createContext<CartContextData>({} as CartContextData);

export function CartProvider({children}: CardProviderProps) {
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<Cart[]>([]);

  useEffect(() => {
    api.get('/products').then(data => setProducts(data.data.products));
  }, []);

  function addProduct(product: Product) {
    let newCard = [...cart];
    const productExists = newCard.find(item => item.product.id === product.id);
    if (
      productExists &&
      productExists.quantity < productExists.product.quantity
    ) {
      /*if product already on cart and your quantity is lesser
       than product stock,
       increase the quantity by one*/
      productExists.quantity += 1;
      setCart(newCard);
      return;
    } else if (
      productExists &&
      productExists.quantity >= productExists.product.quantity
    ) {
      return;
    }

    setCart([...newCard, {product: product, quantity: 1}]);
  }

  function decreaseQuantity(productId: number) {
    //function to decrease cart's product quantity one by one
    const updatedCart = [...cart];
    const findItem = updatedCart.find(item => item.product.id === productId);

    if (!findItem) {
      return;
    }
    if (findItem.quantity > 1) {
      //if product cart's quantity is greater than 1, decrease the quantity by one
      findItem.quantity -= 1;
      setCart(updatedCart);
    } else {
      //else, remove the product from the cart
      setCart([...cart.filter(item => item.product.id !== productId)]);
    }
  }
  function removeProduct(productId: number) {
    //function to remove completely a product from the cart
    setCart([...cart.filter(cartItem => cartItem.product.id !== productId)]);
  }

  return (
    <CartContext.Provider
      value={{products, cart, addProduct, decreaseQuantity, removeProduct}}>
      {children}
    </CartContext.Provider>
  );
}
export function useCart() {
  const context = useContext(CartContext);

  return context;
}
