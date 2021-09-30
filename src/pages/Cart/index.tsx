import React from 'react';
import {Text} from 'react-native';
import {CartItem} from '../../components/CartItem';
import {Container, Content, PageHeader} from './styles';

export function Cart() {
  return (
    <Container>
      <PageHeader>2 produtos adicionados:</PageHeader>
      <Content>
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
      </Content>
    </Container>
  );
}
