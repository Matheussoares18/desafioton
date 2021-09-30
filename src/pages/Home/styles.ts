import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: row;

  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  padding-top: 35px;
`;
export const ScrollViewContainer = styled.ScrollView``;

export const ItemsContainer = styled.View`
  display: flex;
  flex-direction: row;

  width: 100%;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;

  padding-left: 15px;
  padding-right: 15px;
`;
