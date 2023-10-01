"use server";

import axios from "axios";

export default async function amiadminRequest({
	profile_pic_url,
}: {
	profile_pic_url: string;
}) {
	return await axios
		.get(
			"https://coders-garden-backend.vercel.app/whoami?profile_pic_url=" +
				profile_pic_url
		)
		.then((res) => res.data);
}
