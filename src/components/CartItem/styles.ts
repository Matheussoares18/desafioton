import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  flex: 1;
  height: 100px;
  margin-top: 10px;
  background: #fff;
  border-radius: 20px;
`;
export const Price = styled.Text`
  margin-left: 5px;

  font-size: 14px;
`;
export const RowContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;
export const RemoveButton = styled.TouchableOpacity`
  width: 26px;
  height: 26px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border: solid 1px red;
  border-radius: 20px;
`;
export const LeftSide = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const RightSide = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;

  padding-right: 15px;
`;

export const ItemImage = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 45px;
  padding-left: 15px;
`;
export const TitleAndActions = styled.View`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 20px;
`;
export const ProductTitle = styled.Text`
  font-family: 'Lato-Regular';
  font-size: 20px;
  font-weight: 400;
  margin-bottom: 4px;
`;
export const Actions = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const DecreaseQuantity = styled.TouchableOpacity`
  border-radius: 12px;

  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
`;

export const ChangeQuantityText = styled.Text`
  color: white;
  font-size: 16px;
  text-align: center;
`;
export const Counter = styled.View``;
export const Input = styled.TextInput`
  border: 1px solid rgba(206, 206, 206, 0.5);
  width: 50px;
  height: 38px;
  border-radius: 10px;
  text-align: center;
  color: #000;
  font-size: 15px;
`;
export const IncreaseQuantity = styled.TouchableOpacity`
  border-radius: 12px;

  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
`;
