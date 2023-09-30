"use server";

import axios from "axios";

export default async function makeComunityUpdateRequest() {
	const headers = {
		"Content-Type": "application/json",
		Authorization: process.env.COMMUNITY_MEMBERS_UPDATE_AUTHORIZATION ?? "",
	};
	console.log("headers", headers, "CommunityUpdateButton");
	await axios
		.patch("https://coders-garden-backend.vercel.app/members", null, {
			headers: headers,
		})
		.then((res) => {
			console.log("res", res.data);
		});
}
