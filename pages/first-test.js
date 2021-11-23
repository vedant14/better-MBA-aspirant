import React from "react";
import { Layout, Hero, NewUserTest, WhyTests, Footer } from "../components";

const FirstTestPage = () => {
	return (
		<Layout title="Take your first test">
			<Hero text="Hi fellow product person" boldText="Are you.." />
			<NewUserTest />
			<Footer />
		</Layout>
	);
};

export default FirstTestPage;
