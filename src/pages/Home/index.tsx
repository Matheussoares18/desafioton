import React, {useEffect} from 'react';

import {Container, ItemsContainer, ScrollViewContainer} from './styles';
import Tenis from '../../assets/tennis.png';
import {ProductCard} from '../../components/ProductCard';
import axios from 'axios';
import {useCart} from '../../hooks/useCart';

interface CartItemsAmount {
  [key: number]: number;
}

export function Home() {
  const {products, cart} = useCart();

  const cartItemsAmount = cart.reduce((sumAmount, product) => {
    const newSumAmount = {...sumAmount};

    newSumAmount[product.product.id] = product.quantity;

    return newSumAmount;
  }, {} as CartItemsAmount);

  return (
    <Container>
      <ScrollViewContainer>
        <ItemsContainer>
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
