"use client";
import { Button } from "@/components/ui/button";
import { UpdateIcon } from "@radix-ui/react-icons";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import makeSingleComunityMemberUpdateRequest from "@/utils/makeSingleComunityMemberUpdateRequest";
import amiadminRequest from "@/utils/amiadminRequest";

export default function CommunityMemberUpdateButton({
	githubUsername,
	profile_pic_url,
}: {
	githubUsername: string;
	profile_pic_url: string;
}) {
	const { data: session } = useSession();
	const [updateProfilesLoading, setUpdateProfilesLoading] = useState(false);
	const [amiadmin, setAmiadmin] = useState(false);

	async function updateCommunity() {
		setUpdateProfilesLoading(true);
		await makeSingleComunityMemberUpdateRequest({
			githubUsername: githubUsername,
		});
		setUpdateProfilesLoading(false);
	}

	useEffect(() => {
		if (!session) return;
		const getAmiadmin = setTimeout(() => {
			if(localStorage.getItem("amiadmin") === "true"){
				setAmiadmin(true);
			}
		}, 1000);
		
		return () => clearTimeout(getAmiadmin);
	}, [session]);

	if (
		(session && session.user?.image === profile_pic_url) ||
		(session && amiadmin)
	) {
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
