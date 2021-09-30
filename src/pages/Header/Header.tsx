import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import {
  AbsoluteContainter,
  CardItemsQuantityContainer,
  CardItemsQuantityNumber,
  Container,
} from './styles';

export function Header() {
  return (
    <>
      <Icon
        name="shoppingcart"
        size={35}
        color="#008e5a"
        style={{marginRight: 20}}
        /* onPress={() => navigation.navigate('Cart')} */
      />
      <AbsoluteContainter>
        <CardItemsQuantityContainer>
          <CardItemsQuantityNumber>1</CardItemsQuantityNumber>
        </CardItemsQuantityContainer>
      </AbsoluteContainter>
    </>
  );
}
