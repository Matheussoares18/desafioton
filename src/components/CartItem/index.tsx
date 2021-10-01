import React, {useEffect, useState} from 'react';
import {
  Actions,
  ChangeQuantityText,
  Container,
  Counter,
  DecreaseQuantity,
  IncreaseQuantity,
  Input,
  ItemImage,
  LeftSide,
  Price,
  ProductTitle,
  RemoveButton,
  RightSide,
  RowContainer,
  TitleAndActions,
} from './styles';
import Icon from 'react-native-vector-icons/AntDesign';
import {Product, useCart} from '../../hooks/useCart';
import {Alert, Keyboard, Text, TextInput} from 'react-native';

interface CardItemProps {
  product: Product;
  amount: number;
}

export function CartItem({product, amount}: CardItemProps) {
  const {addProduct, decreaseQuantity, removeProduct, addProductByUserInput} =
    useCart();

  const [inputValue, setInputValue] = useState(0);

  useEffect(() => {
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        if (!inputValue || inputValue === 0) {
          Alert.alert('Falha ao alterar quantidade', 'Valor inválido');
          setInputValue(amount);
          return;
        } else if (inputValue <= product.quantity) {
          addProductByUserInput(product, Number(inputValue));
        } else {
          Alert.alert('Falha ao alterar quantidade', 'Quantidade indisponível');
          setInputValue(amount);
        }
      },
    );

    return () => {
      keyboardDidHideListener.remove();
    };
  }, [inputValue, Keyboard]);
  useEffect(() => {
    setInputValue(amount);
  }, [amount]);

  return (
    <Container>
      <LeftSide>
        <ItemImage source={{uri: product.image}} resizeMode="contain" />
        <TitleAndActions>
          <RowContainer>
            <ProductTitle testID="product-title">{product.name}</ProductTitle>
            <Price>
              {Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              }).format(product.price * (amount ? amount : 0))}
            </Price>
          </RowContainer>
          <Actions>
            <DecreaseQuantity onPress={() => decreaseQuantity(product.id)}>
              <ChangeQuantityText>
                <Icon name="minuscircleo" color="red" size={18} />{' '}
              </ChangeQuantityText>
            </DecreaseQuantity>
            <Input
              defaultValue={String(inputValue)}
              textAlignVertical="center"
              keyboardType="numeric"
              testID="quantity-input"
              onSubmitEditing={() => {
                Keyboard.dismiss();
              }}
              onChangeText={e => setInputValue(Number(e))}
            />
            <IncreaseQuantity onPress={() => addProduct(product)}>
              <ChangeQuantityText>
                <Icon name="pluscircleo" color="#008e5a" size={18} />{' '}
              </ChangeQuantityText>
            </IncreaseQuantity>
          </Actions>
          <Text>{product.quantity - amount} disponíveis</Text>
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
