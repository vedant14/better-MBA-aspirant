import styled from "styled-components";
import { colors } from "../../styles/GlobalStyles";

export const Wrapper = styled.div`
  margin-top: 100px;
  text-align: center;
  position: relative;
  color: ${colors.primaryBlack};
  > h4 {
    margin-top: 40px;
    margin-bottom: 60px;
  }
  @media screen and (min-width: 768px) {
    margin-top: 200px;
    height: 1000px;
    > h4 {
      margin-top: 100px;
    }
  }
`;

export const Card = styled.div`
  background: ${colors.brandYellow};
  position: relative;
  border-radius: 8px;
  display: flex;
  height: 200px;
  padding-left: 20px;
  padding-right: 20px;
  margin: 20px auto;

  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.25);
  > h4 {
    font-weight: 300;
    margin: auto;
  }
  @media screen and (min-width: 768px) {
    position: absolute;
    height: 250px;
    padding-left: 20px;
    padding-right: 20px;
    width: 220px;
    &#first {
      top: 30%;
      left: 5%;
      transform: rotate(-3deg);
    }
    &#second {
      top: 35%;
      right: 1%;
      transform: rotate(2deg);
    }
    &#third {
      top: 70%;
      left: 1%;
      transform: rotate(1deg);
    }
    &#fourth {
      top: 75%;
      right: 2%;
      transform: rotate(-2deg);
    }
  }
  @media screen and (min-width: 1024px) {
    height: 300px;
    padding-left: 30px;
    padding-right: 30px;
    margin: 20px auto;
    width: 250px;
    &#first {
      top: 30%;
      left: 5%;
      transform: rotate(-3deg);
    }
    &#second {
      top: 35%;
      right: 15%;
      transform: rotate(2deg);
    }
    &#third {
      top: 70%;
      left: 20%;
      transform: rotate(1deg);
    }
    &#fourth {
      top: 75%;
      right: 15%;
      transform: rotate(-2deg);
    }
  }
`;
