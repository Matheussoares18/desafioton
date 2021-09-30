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

export function CartItem() {
  return (
    <Container>
      <LeftSide>
        <ItemImage source={Tenis} resizeMode="contain" />
        <TitleAndActions>
          <ProductTitle>Tenis de marca</ProductTitle>
          <Actions>
            <DecreaseQuantity>
              <ChangeQuantityText>-</ChangeQuantityText>
            </DecreaseQuantity>
            <Counter>2</Counter>
            <IncreaseQuantity>
              <ChangeQuantityText>+</ChangeQuantityText>
            </IncreaseQuantity>
          </Actions>
        </TitleAndActions>
      </LeftSide>
      <RightSide>
        <RemoveButton>
          <Icon name="close" color="red" size={20} />
        </RemoveButton>
      </RightSide>
    </Container>
  );
}
