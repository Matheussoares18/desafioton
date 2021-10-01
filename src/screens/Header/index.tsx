import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {StackNavigationProp} from '@react-navigation/stack';
import {
  AbsoluteContainter,
  CardItemsQuantityContainer,
  CardItemsQuantityNumber,
} from './styles';
import {RootStackParamList} from '../../../App';
import {useCart} from '../../hooks/useCart';

type HeaderScreenProp = StackNavigationProp<RootStackParamList, 'Header'>;

export function Header() {
  const navigation = useNavigation<HeaderScreenProp>();
  const {cart} = useCart();
  const cartSize = cart.length;
  return (
    <>
      <TouchableOpacity
        testID="cart-button"
        onPress={() => navigation.navigate('Cart')}>
        <Icon
          name="shoppingcart"
          size={35}
          color="#008e5a"
          style={{marginRight: 20}}
        />
      </TouchableOpacity>
      <AbsoluteContainter>
        <CardItemsQuantityContainer>
          <CardItemsQuantityNumber testID="counter">
            {cartSize}
          </CardItemsQuantityNumber>
        </CardItemsQuantityContainer>
      </AbsoluteContainter>
    </>
  );
}
