import React from 'react';
import {ImageSourcePropType} from 'react-native';
import {Product, useCart} from '../../hooks/useCart';
import {
  AddCartButton,
  ButtonText,
  CardActionsContainer,
  CartQuantity,
  Description,
  Item,
  Price,
  ProductImage,
  ProductInfosTop,
  QuantityContainer,
  QuantityText,
  RemoveCartButton,
  Title,
} from './styles';

interface ProductCardProps {
  product: Product;
  amount: number;
}

export function ProductCard({product, amount}: ProductCardProps) {
  const {addProduct, decreaseQuantity} = useCart();
  return (
    <Item>
      <ProductImage source={{uri: product.image}} resizeMode="cover" />
      <QuantityContainer>
        <QuantityText>
          {amount ? product.quantity - amount : product.quantity} disponíveis
        </QuantityText>
      </QuantityContainer>
      <ProductInfosTop>
        <Title>{product.name}</Title>
        <Description>{product.description}</Description>
        <Price>{product.price}</Price>
        <CartQuantity>{amount || 0} no carrinho</CartQuantity>
      </ProductInfosTop>

      <CardActionsContainer>
        {amount && (
          <RemoveCartButton onPress={() => decreaseQuantity(product.id)}>
            <ButtonText style={{textAlignVertical: 'center'}}> - 1</ButtonText>
          </RemoveCartButton>
        )}
        <AddCartButton onPress={() => addProduct(product)}>
          <ButtonText style={{textAlignVertical: 'center'}}>
            {amount ? '+ 1' : 'Adicionar ao carrinho'}
          </ButtonText>
        </AddCartButton>
      </CardActionsContainer>
    </Item>
  );
}
