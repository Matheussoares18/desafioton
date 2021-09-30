import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  padding-top: 20px;
`;
export const PageHeader = styled.Text`
  padding-left: 20px;
  width: 100%;
  text-align: left;
  font-weight: bold;
  font-size: 20px;
  font-style: italic;
  margin-bottom: 35px;
`;
export const TotalValueContainer = styled.View`
  padding-left: 20px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;
export const TotalLabel = styled.Text`
  text-align: left;
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 35px;
`;
export const TotalValue = styled.Text`
  text-align: left;
  font-weight: bold;
  font-size: 20px;
  font-style: italic;
  margin-bottom: 35px;
  margin-left: 5px;
  color: #008e5a;
`;

export const Content = styled.ScrollView`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0px 15px;
  margin-bottom: 10px;
`;
