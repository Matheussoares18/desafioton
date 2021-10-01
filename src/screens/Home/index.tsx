import React, {useEffect} from 'react';

import {Container, ItemsContainer, ScrollViewContainer} from './styles';

import {ProductCard} from '../../components/ProductCard';

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
        <ItemsContainer testID="items-containter">
          {products?.map(item => (
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
