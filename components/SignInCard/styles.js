import styled from "styled-components";
import { colors } from "../../styles/GlobalStyles";

export const Wrapper = styled.div`
    margin: 100px 30px;
    padding: 40px;
    background: ${colors.primaryBlue};
    color: ${colors.white};
    max-width: 100%;
    overflow: hidden;
    border-radius: 10px;
    text-align: center;
    @media screen and (min-width: 768px) {
        margin: 200px auto;
        width: 600px;
    }
    > button {
        margin: auto;
        display: flex;
        align-items: center;
        width: 180px;
        justify-content: space-between;
        > img {
            width: 30px;
        }
        font-size: 20px;
        text-transform: uppercase;
    }
`;
