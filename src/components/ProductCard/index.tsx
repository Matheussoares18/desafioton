import React from 'react';
import {Button, ImageSourcePropType} from 'react-native';
import {
  AddCartButton,
  ButtonText,
  Description,
  Item,
  Price,
  ProductImage,
  ProductInfosTop,
  QuantityContainer,
  QuantityText,
  Title,
} from './styles';

interface ProductCardProps {
  product: {
    id: number;
    image: ImageSourcePropType;
    title: string;
    description: string;
    price: string;
  };
}

export function ProductCard({product}: ProductCardProps) {
  return (
    <Item>
      <ProductImage
        source={product.image}
        resizeMode="cover"
        style={{borderBottomWidth: 1, borderColor: '#000'}}
      />
      <QuantityContainer>
        <QuantityText>12 disponíveis</QuantityText>
      </QuantityContainer>
      <ProductInfosTop>
        <Title>{product.title}</Title>
        <Description>{product.description}</Description>
        <Price>{product.price}</Price>
      </ProductInfosTop>

      <AddCartButton

      /*  onPress={() => console.log('a')} */
      >
        <ButtonText style={{textAlignVertical: 'center'}}>
          Adicionar ao carrinho (2)
        </ButtonText>
      </AddCartButton>
    </Item>
  );
}
