export default async function signIn(supabaseClient) {
	const { error } = await supabaseClient.auth.signIn(
		{ provider: "google" },
		{
			redirectTo: "https://www.betterproductmanager.com/profile",
		}
	);
	if (error) console.log(error);
}
