"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function AuthButton() {
	const { data: session } = useSession();

	if (session) {
		return (
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<Button
						className="flex justify-between items-center gap-3"
						variant={"secondary"}
					>
						<GitHubLogoIcon className="h-[1.2rem] w-[1.2rem]" />{" "}
						{session.user?.name}
					</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent>
					<DropdownMenuItem className="text-red-500" onClick={() => signOut()}>
						Logout
					</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>
		);
	}

	return (
		<Button
			onClick={() => signIn()}
			className="flex justify-between items-center gap-3"
		>
			<GitHubLogoIcon className="h-[1.2rem] w-[1.2rem]" /> Github Login
		</Button>
	);
}
