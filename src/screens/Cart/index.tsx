import React from 'react';
import {Text} from 'react-native';
import {CartItem} from '../../components/CartItem';
import {useCart} from '../../hooks/useCart';

import {
  Container,
  Content,
  PageHeader,
  TotalLabel,
  TotalValue,
  TotalValueContainer,
} from './styles';

interface CartItemsAmount {
  [key: number]: number;
}

export function Cart() {
  const {cart} = useCart();
  const cartItemsAmount = cart.reduce((sumAmount, product) => {
    const newSumAmount = {...sumAmount};

    newSumAmount[product.product.id] = product.quantity;

    return newSumAmount;
  }, {} as CartItemsAmount);

  const total = Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(
    cart.reduce((sumTotal, product) => {
      return sumTotal + product.product.price * product.quantity;
    }, 0),
  );

  return (
    <Container>
      <PageHeader>
        {cart.length}{' '}
        {cart.length > 1 ? 'produtos adicionados' : 'produto adicionado'}:
      </PageHeader>
      <TotalValueContainer>
        <TotalLabel> Total:</TotalLabel>
        <TotalValue>{total}</TotalValue>
      </TotalValueContainer>
      <Content>
        {cart.map(cartItem => (
          <CartItem
            key={cartItem.product.id}
            product={cartItem.product}
            amount={cartItemsAmount[cartItem.product.id]}
          />
        ))}
      </Content>
    </Container>
  );
}
