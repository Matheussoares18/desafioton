import React from 'react';
import {
  Actions,
  ChangeQuantityText,
  Container,
  Counter,
  DecreaseQuantity,
  IncreaseQuantity,
  ItemImage,
  LeftSide,
  ProductTitle,
  RemoveButton,
  RightSide,
  TitleAndActions,
} from './styles';
import Icon from 'react-native-vector-icons/AntDesign';
import Tenis from '../../assets/tennis.png';
import {Product, useCart} from '../../hooks/useCart';

interface CardItemProps {
  product: Product;
  amount: number;
}

export function CartItem({product, amount}: CardItemProps) {
  const {addProduct, decreaseQuantity, removeProduct} = useCart();
  return (
    <Container>
      <LeftSide>
        <ItemImage source={{uri: product.image}} resizeMode="contain" />
        <TitleAndActions>
          <ProductTitle>{product.name}</ProductTitle>
          <Actions>
            <DecreaseQuantity onPress={() => decreaseQuantity(product.id)}>
              <ChangeQuantityText>-</ChangeQuantityText>
            </DecreaseQuantity>
            <Counter>{amount}</Counter>
            <IncreaseQuantity onPress={() => addProduct(product)}>
              <ChangeQuantityText>+</ChangeQuantityText>
            </IncreaseQuantity>
          </Actions>
        </TitleAndActions>
      </LeftSide>
      <RightSide>
        <RemoveButton onPress={() => removeProduct(product.id)}>
          <Icon name="close" color="red" size={20} />
        </RemoveButton>
      </RightSide>
    </Container>
  );
}
