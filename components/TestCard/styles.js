import styled from "styled-components";
import { colors } from "../../styles/GlobalStyles";

export const Card = styled.div`
  background: ${colors.white};
  cursor: pointer;
  border-radius: 10px;
  border: 1px solid ${colors.primaryBlack};
  transition: 0.2s ease-in;
  @media screen and (min-width: 768px) {
    border: none;
  }
  .card-image {
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
  }
  > div#parent-image {
    position: relative;
    height: 200px;
  }
  > div {
    text-align: center;
    margin: 0px;
    > h4,
    p {
      margin: 5px 0px 0px 0px;
    }
    padding: 5px;
    @media screen and (min-width: 768px) {
      padding: 20px;
      > p {
        margin-top: 20px;
      }
    }
  }
  &:hover {
    background: #f8f1f1;
    box-shadow: 2px 6px 8px ${colors.primaryBlack};
  }
`;
