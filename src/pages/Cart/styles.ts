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

export const Content = styled.ScrollView`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0px 25px;
  margin-bottom: 10px;
`;
