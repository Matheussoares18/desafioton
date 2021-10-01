import React, {useEffect, useState} from 'react';

import {Container, ItemsContainer, ScrollViewContainer} from './styles';

import {ProductCard} from '../../components/ProductCard';

import {Product, useCart} from '../../hooks/useCart';

import api from '../../services/api';
import {Text} from 'react-native';
import {AxiosResponse} from 'axios';

interface CartItemsAmount {
  [key: number]: number;
}
export function Home() {
  const {cart} = useCart();
  const [products, setProducts] = useState<Product[]>([]);

  const cartItemsAmount = cart.reduce((sumAmount, product) => {
    const newSumAmount = {...sumAmount};

    newSumAmount[product.product.id] = product.quantity;

    return newSumAmount;
  }, {} as CartItemsAmount);

  useEffect(() => {
    async function loadProducts() {
      api.get<any, AxiosResponse<Product[]>>('/products').then(res => {
        setProducts(res.data);
      });
    }
    loadProducts();
  }, []);

  return (
    <Container>
      <ScrollViewContainer>
        <ItemsContainer testID="items-containter">
          {products.map(item => (
            <ProductCard
              amount={cartItemsAmount[item.id]}
              product={item}
              key={item.id}
            />
          ))}
        </ItemsContainer>
      </ScrollViewContainer>
    </Container>
  );
}
