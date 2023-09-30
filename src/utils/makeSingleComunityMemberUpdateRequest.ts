"use server";

import axios from "axios";

export default async function makeComunityUpdateRequest({
	githubUsername,
}: {
	githubUsername: string;
}) {
	const headers = {
		"Content-Type": "application/json",
		Authorization: process.env.COMMUNITY_MEMBERS_UPDATE_AUTHORIZATION ?? "",
	};
	
	await axios
		.patch(
			"https://coders-garden-backend.vercel.app/member/" + githubUsername,
			null,
			{
				headers: headers,
			}
		)
		.then((res) => {
			console.log("res", res.data);
		});
}
