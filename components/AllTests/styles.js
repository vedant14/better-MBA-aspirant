import styled from "styled-components";
import { colors } from "../../styles/GlobalStyles";

export const Wrapper = styled.div`
    margin-top: 100px;
    @media screen and (min-width: 768px) {
      margin-top: 200px;
    }
  > div {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 60px 10px;
    @media screen and (min-width: 768px) {
      grid-template-columns: 1fr 1fr 1fr;
      grid-gap: 60px;
    }
  }
  > button {
    display: flex;
    margin: 40px auto;
    @media screen and (min-width: 768px) {
      margin: 80px auto;      
    }
  }
`;
