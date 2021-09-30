import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  flex: 1;
  margin-top: 20px;
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
`;

export const ItemImage = styled.Image`
  width: 80px;
  height: 80px;
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
  background: red;
  width: 22px;
  height: 22px;
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
export const Counter = styled.Text`
  font-family: 'Lato-Regular';
  font-size: 20px;
  font-weight: 400;
`;
export const IncreaseQuantity = styled.TouchableOpacity`
  background: #008e5a;
  width: 22px;
  height: 22px;
  border-radius: 12px;

  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
`;
