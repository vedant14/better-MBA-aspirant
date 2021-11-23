import React, { useContext } from "react";

import { UserContext } from "../context/UserProvider";
import { useRouter } from "next/router";

import { Layout, Hero, ProfileHead, SignInCard, Footer } from "../components";
import { supabase } from "../services/supabaseClient";

const ProfilePage = () => {
	const [profile, setProfile] = useContext(UserContext);
	const router = useRouter();

	async function signOut() {
		const { error } = await supabase.auth.signOut();
		console.log(error);
		router.push("/");
	}

	return (
		<Layout title="Profile">
			{profile ? <ProfileHead profileData={profile} /> : <SignInCard />}
		</Layout>
	);
};

export default ProfilePage;
