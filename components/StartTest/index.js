import React, { useEffect } from "react";
import Image from "next/image";
import { Wrapper } from "./styles";
import { useRouter } from "next/router";

export function StartTest({ setStartQuiz, title, description }) {
	const router = useRouter();
	useEffect(() => {
		if (router.asPath.slice(-5) === "start") {
			handleStartQuiz();
		}
	}, []);
	const handleStartQuiz = () => {
		setStartQuiz(true);
	};
	return (
		<Wrapper className="Container">
			<div>
				<h2>
					<span className="bold">{title} </span>
				</h2>
				<p>{description}</p>
			</div>
			<button onClick={() => handleStartQuiz()}> Start the Quiz </button>
		</Wrapper>
	);
}
