import styled from "styled-components";
import { colors } from "../../styles/GlobalStyles";

export const Wrapper = styled.div`
  > div {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px;
    @media screen and (min-width: 768px) {
      grid-template-columns: 1fr 1fr 1fr;
      grid-gap: 60px;
    }
  }
`;
