import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Wrapper } from "./styles";
import { Footer } from "../Footer";

export function Outcome({ score, testId, title }) {
	return (
		<>
			<Wrapper className="Container">
				<div id="score">
					<h1>You scored {score} points!</h1>
					{profile === null ? (
						<button>
							<Image
								src={GoogleIcon}
								alt="google"
								width={30}
								height={30}
							/>
							Save your score
						</button>
					) : (
						<p>Your scores have been saved!</p>
					)}
				</div>
				<div id="benchmark">
					<h3>Leaderboards:</h3>
					<p>Coming soon...</p>
				</div>
			</Wrapper>
			<Footer />
		</>
	);
}
