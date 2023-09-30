"use client";
import { Button } from "@/components/ui/button";
import { UpdateIcon } from "@radix-ui/react-icons";
import { useSession } from "next-auth/react";
import axios from "axios";
import { useState } from "react";
import makeSingleComunityMemberUpdateRequest from "@/utils/makeSingleComunityMemberUpdateRequest";

export default function CommunityUpdateButton({
	githubUsername,
}: {
	githubUsername: string;
}) {
	const { data: session } = useSession();
	const [updateProfilesLoading, setUpdateProfilesLoading] = useState(false);

	console.log("session", session, "CommunityUpdateButton");

	function updateCommunity() {
		setUpdateProfilesLoading(true);
		makeSingleComunityMemberUpdateRequest({
			githubUsername: githubUsername,
		});
		setUpdateProfilesLoading(false);
	}

	if (session) {
		return (
			<Button onClick={updateCommunity}>
				<UpdateIcon
					className={
						updateProfilesLoading
							? "animate-spin h-[1.2rem] w-[1.2rem]"
							: "h-[1rem] w-[1rem]"
					}
				/>
			</Button>
		);
	}
	return null;
}
