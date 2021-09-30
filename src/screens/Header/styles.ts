import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: 40px;

  background: black;

  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const AbsoluteContainter = styled.View`
  position: absolute;
`;
export const CardItemsQuantityContainer = styled.View`
  background: #ff261b;
  width: 18px;
  height: 18px;

  border-radius: 25px;
  display: flex;

  align-items: center;
  justify-content: center;
  position: relative;

  margin-bottom: 18px;
`;
export const CardItemsQuantityNumber = styled.Text`
  color: white;
  font-size: 12px;
`;
