import styled from "styled-components";
import { colors } from "../../styles/GlobalStyles";

export const HeaderWrapper = styled.header`
  position: fixed;
  background: ${colors.white};
  border-top: 10px solid ${colors.brandYellow};
  top: 0;
  z-index: 999;
  width: calc(100vw - 20px);
  > div {
    display: flex;
    height: 80px;
    padding-top: 4px;
    margin-top: auto;
    margin-bottom: auto;
  }
`;

export const LogoWrapper = styled.img`
  height: 40px;
  cursor: pointer;
  margin: auto;
  @media screen and (min-width: 768px) {
    margin: auto 0px;
      height: 50px;
  }
`;
