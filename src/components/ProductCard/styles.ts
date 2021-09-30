import {Dimensions} from 'react-native';

const {width} = Dimensions.get('window');
import styled from 'styled-components/native';

export const Item = styled.View`
  background: white;
  width: ${() => (width - 45) / 2};
  border-top-left-radius: 2px;

  margin-top: 10px;
  margin-bottom: 10px;
`;
export const QuantityContainer = styled.View`
  position: absolute;
  top: 0px;
  width: 100%;
`;
export const QuantityText = styled.Text`
  position: relative;
  top: 5px;

  left: 5px;
  background: #008e5a;

  border-radius: 20px;
  width: 60%;

  height: 22px;
  text-align: center;

  color: #fff;
`;
export const ProductImage = styled.Image`
  width: 100%;
  height: 150px;
`;
export const ProductInfosTop = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

export const Title = styled.Text`
  font-family: 'Lato-Regular';
  width: 100%;

  font-size: 18px;
  font-weight: 400;
  text-align: center;
  font-style: italic;
  margin-top: 15px;
`;
export const Price = styled.Text`
  width: 100%;
  text-align: center;
  font-family: 'Lato-Regular';
  font-size: 22px;
  font-weight: bold;
  margin-top: 5px;
  color: #008e5a;
  margin-bottom: 5px;
`;
export const Description = styled.Text`
  text-align: center;
  font-size: 11px;
  margin-top: 5px;
`;

export const AddCartButton = styled.TouchableOpacity`
  background: #008e5a;
  height: 40px;
  display: flex;
  align-items: center;
`;
export const ButtonText = styled.Text`
  color: #fff;
  width: 100%;
  height: 100%;
  text-align: center;
  display: flex;
  align-items: center;
`;
