"use client";
import { Button } from "@/components/ui/button";
import { UpdateIcon } from "@radix-ui/react-icons";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import makeComunityUpdateRequest from "@/utils/makeComunityUpdateRequest";
import amiadminRequest from "@/utils/amiadminRequest";

export default function CommunityUpdateButton() {
	const { data: session } = useSession();
	const [updateProfilesLoading, setUpdateProfilesLoading] = useState(false);
	const [amiadmin, setAmiadmin] = useState(false);

	function updateCommunity() {
		setUpdateProfilesLoading(true);
		makeComunityUpdateRequest();
		setUpdateProfilesLoading(false);
	}

	useEffect(() => {
		if (!session) return;
		amiadminRequest({
			profile_pic_url: session?.user?.image ?? "",
		}).then((res: any) => {
			setAmiadmin(res.data.admin as boolean);
			localStorage.setItem(
				"amiadmin",
				(res.data.admin as boolean) ? "true" : "false"
			);
		});
	}, [session]);

	if (session && amiadmin) {
		return (
			<Button onClick={updateCommunity}>
				<UpdateIcon
					className={
						updateProfilesLoading
							? "animate-spin h-[1.2rem] w-[1.2rem]"
							: "h-[1.2rem] w-[1.2rem]"
					}
				/>
			</Button>
		);
	}
	localStorage.removeItem("amiadmin");
	return null;
}
