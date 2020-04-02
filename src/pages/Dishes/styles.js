import { getStatusBarHeight } from "react-native-status-bar-height";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  padding-horizontal: 24px
  padding-top: ${40 + getStatusBarHeight(true)}px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 30px;
  margin-bottom: 15px;
  margin-top: 10px;
  color: #13131a;
  font-weight: bold;
`;

export const Dish = styled.View`
  padding: 24px;
  border-radius: 8px;
  background-color: #fff;
  margin-bottom: 16px;
`;

export const DishValue = styled.Text`
  margin-top: 8px;
  font-size: 18px;
  margin-bottom: 24px;
  color: #737380;
`;

export const DishPhoto = styled.Image`
  height: 300px;
  width: 100%;
  border-radius: 15px;
`;
