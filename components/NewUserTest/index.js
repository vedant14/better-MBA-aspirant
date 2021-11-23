import React, { useState } from "react";
import { Wrapper } from "./styles";
import Link from "next/link";
export function NewUserTest() {
	const [selectedAnswer, setSelectedAnswer] = useState(null);
	const handleAnswerSubmit = (answer) => {
		setSelectedAnswer(answer);
	};
	return (
		<Wrapper className="Container">
			<button
				disabled={selectedAnswer !== null ? true : false}
				className={selectedAnswer === "aspiring" ? "selected" : ""}
				onClick={() => handleAnswerSubmit("aspiring")}
			>
				An aspiring Product Manager
			</button>
			<button
				disabled={selectedAnswer !== null ? true : false}
				className={selectedAnswer === "experienced" ? "selected" : ""}
				onClick={() => handleAnswerSubmit("experienced")}
			>
				Already work in a product team
			</button>
			{selectedAnswer && (
				<div>
					<Link
						href="/tests/test-for-aspiring-product-managers#start"
						passHref
					>
						<button>Let&apos;s start</button>
					</Link>
				</div>
			)}
		</Wrapper>
	);
}
