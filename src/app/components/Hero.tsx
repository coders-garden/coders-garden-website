import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { DiscordLogoIcon, GitHubLogoIcon } from "@radix-ui/react-icons";

const Hero: React.FC = () => {
	return (
		<section className="py-16 text-center" id="hero">
			<h1 className="text-9xl font-extrabold">
				Welcome To Coders Garden
			</h1>
			<p className="mt-4 text-muted-foreground font-medium text-xl">
				We are a group of developers who love to code and learn new
				things.
			</p>
			<div className="my-12 flex justify-center items-center gap-5">
				<Button>
					<Link
						href={String(process.env.DISCORD_INVITE_LINK)}
						className="flex justify-between items-center gap-3"
					>
						<DiscordLogoIcon className="h-[1.2rem] w-[1.2rem]" />{" "}
						Join our Discord
					</Link>
				</Button>
				<Button>
					<Link
						href={String(process.env.GITHUB_INVITE_LINK)}
						className="flex justify-between items-center gap-3"
					>
						<GitHubLogoIcon className="h-[1.2rem] w-[1.2rem]" />{" "}
						Join our Github
					</Link>
				</Button>
			</div>
		</section>
	);
};

export default Hero;
