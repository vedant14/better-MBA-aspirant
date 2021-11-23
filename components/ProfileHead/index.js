import React, { useState, useEffect } from "react";
import { Wrapper } from "./styles";
import { supabase } from "../../services/supabaseClient";

export function ProfileHead({ profileData }) {
	const [userScores, setUserScores] = useState(false);
	useEffect(() => {
		fetchScores();
		getscore();
	}, [profileData]);

	const fetchScores = async () => {
		const { data: user_scores, error } = await supabase
			.from("user_scores")
			.select(`id, score, tests(title)`)
			.eq("user_id", profileData.id);
		setUserScores(user_scores);
	};
	async function getscore() {
		const score = localStorage.getItem("score");
		const test = localStorage.getItem("test");
		if (score !== null && profileData !== null && test !== null) {
			const { data, error } = await supabase.from("user_scores").insert([
				{
					user_id: profileData.id,
					test_id: test,
					user_email: profileData.email,
					score: score,
				},
			]);
			fetchScores();
			if (error) console.log("error", error);
			localStorage.removeItem("score");
			localStorage.removeItem("test");
		}
	}
	return (
		<Wrapper className="Container">
			<div>
				<h2>Hi {profileData.user_metadata.full_name}</h2>
				<p>
					Hope you are enjoying your{" "}
					{new Date().toLocaleString("en-us", {
						weekday: "long",
					})}{" "}
					:)
				</p>
			</div>
			<hr />
			<div>
				<h2>Here is your test history</h2>
				{userScores &&
					userScores.map((item) => (
						<div key={item.id}>
							<p>
								{item.tests.title} - {item.score}
							</p>
						</div>
					))}
				{userScores.length === 0 && <p>Take your first test </p>}
			</div>
		</Wrapper>
	);
}
