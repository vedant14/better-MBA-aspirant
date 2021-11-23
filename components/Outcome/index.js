import React, { useState, useContext, useEffect } from "react";
import { UserContext } from "../../context/UserProvider";
import Image from "next/image";
import Link from "next/link";

import { supabase } from "../../services/supabaseClient";
import signIn from "../../services/signIn";
import { Wrapper } from "./styles";
import GoogleIcon from "../../public/google.png";
import { Footer } from "../Footer";

export function Outcome({ score, testId, title }) {
	const [profile, setProfile] = useContext(UserContext);
	const [testSession, setTestSession] = useState(null);

	useEffect(() => {
		checkTest();
	}, []);

	useEffect(() => {
		uploadScores();
	}, [testSession]);

	const checkTest = async () => {
		const { data: tests, error } = await supabase
			.from(`tests`)
			.select(`id`)
			.eq("cmsId", testId);
		console.log(tests);
		if (tests.length !== 0) {
			setTestSession(tests[0].id);
		}

		console.log(testSession, tests);
		if (tests === null || tests.length === 0) {
			console.log("Creating test");
			const { data, error } = await supabase
				.from("tests")
				.insert([{ title: title, cmsId: testId }]);
			setTestSession(data[0].id);
			if (error) console.log("error", error);
		}
	};
	const uploadScores = async () => {
		localStorage.setItem("score", score);
		localStorage.setItem("test", testSession);
		if (profile !== null && testSession !== null) {
			const { data, error } = await supabase.from("user_scores").insert([
				{
					user_id: profile.id,
					test_id: testSession,
					user_email: profile.email,
					score: score,
				},
			]);
			console.log("upload in progress");
			localStorage.removeItem("score");
			localStorage.removeItem("test");
			if (error) console.log("error", error);
		}
	};
	return (
		<>
			<Wrapper className="Container">
				<div id="score">
					<h1>You scored {score} points!</h1>
					{profile === null ? (
						<button onClick={() => signIn(supabase)}>
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
				<Link href="/explore-more" passHref>
					<button>Take more tests</button>
				</Link>
			</Wrapper>
			<Footer />
		</>
	);
}
