import React from "react";
import Link from "next/link";
import { DiscordLogoIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
import { secondary } from "@/app/fonts";

const Footer: React.FC = () => {
	return (
		<footer className={"py-4" + " " + secondary.className}>
			<div className="container mx-auto flex justify-between items-center">
				<Link href={String(process.env.DISCORD_INVITE_LINK)}>
					<DiscordLogoIcon className="h-[1.2rem] w-[1.2rem]" />
				</Link>
				<p className="text-gray-400  text-xs font-bold">
					&copy; {new Date().getFullYear()} Coders Garden
				</p>
				<Link href={String(process.env.GITHUB_INVITE_LINK)}>
					<GitHubLogoIcon className="h-[1.2rem] w-[1.2rem]" />
				</Link>
			</div>
		</footer>
	);
};

export default Footer;
