"use client";
import { Button } from "@/components/ui/button";
import { UpdateIcon } from "@radix-ui/react-icons";
import { useSession } from "next-auth/react";
import axios from "axios";
import { useState } from "react";
import makeComunityUpdateRequest from "@/utils/makeComunityUpdateRequest";


export default function CommunityUpdateButton() {
	const { data: session } = useSession();
	const [updateProfilesLoading, setUpdateProfilesLoading] = useState(false);

	function updateCommunity() {
		setUpdateProfilesLoading(true);
		makeComunityUpdateRequest();
		setUpdateProfilesLoading(false);
	}

	if (session) {
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
	return null;
}
