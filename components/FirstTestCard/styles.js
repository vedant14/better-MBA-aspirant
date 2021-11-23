import styled from "styled-components";
import { colors } from "../../styles/GlobalStyles";

export const Wrapper = styled.div`
  margin-top: 60px;
  background: ${colors.primaryBlue};
  color: ${colors.white};
  text-align: center;
  overflow: hidden;
  border-radius: 10px;
  @media screen and (min-width: 768px) {
    margin-top: 160px;
  }
  > div {
    margin: 50px auto;
    padding-right: 20px;
    padding-left: 20px;
    @media screen and (min-width: 768px) {
      margin: 100px auto;
      padding-right: 100px;
      padding-left: 100px;
    }
    @media screen and (min-width: 1024px) {
      margin: 150px auto;
      padding-right: 200px;
      padding-left: 200px;
    }
    > button {
      margin-top: 20px;
      @media screen and (min-width: 768px) {
        margin-top: 40px;
      }
    }
  }
`;
