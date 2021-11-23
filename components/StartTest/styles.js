import styled from "styled-components";
import { colors } from "../../styles/GlobalStyles";

export const Wrapper = styled.div`
	color: ${colors.white};
	background: ${colors.primaryBlue};
	text-align: center;
	overflow: hidden;
	border-radius: 10px;
	margin-top: 140px;
	margin-bottom: 10px;
	padding: 30px 20px;
	> div {
		width: 100%;
		margin: auto;
		> p {
			width: 90%;
			margin: 20px auto;
		}
	}
	@media screen and (min-width: 768px) {
		> div {
			width: 70%;
			margin: auto;
			> p {
				width: 70%;
				margin: 40px auto;
			}
		}
	}
	@media screen and (min-width: 768px) {
		padding: 80px 30px;
		margin-top: 120px;
		margin-bottom: 60px;
	}
`;
