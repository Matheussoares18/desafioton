import React from 'react';
import {Text} from 'react-native';
import {CartItem} from '../../components/CartItem';
import {useCart} from '../../hooks/useCart';
import {Container, Content, PageHeader} from './styles';

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
  return (
    <Container>
      <PageHeader>
        {cart.length}{' '}
        {cart.length > 1 ? 'produtos adicionados' : 'produto adicionado'}:
      </PageHeader>
      <Content>
        {cart.map(cartItem => (
          <CartItem
            product={cartItem.product}
            amount={cartItemsAmount[cartItem.product.id]}
          />
        ))}
      </Content>
    </Container>
  );
}
