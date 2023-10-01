import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { DiscordLogoIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
import HeroAnimation from "./HeroAnimation";
import { secondary } from "@/app/fonts";
import Image from "next/image";
import clouds from "@/app/components/Hero/Assets/clouds.png";
import mountains from "@/app/components/Hero/Assets/mountains.png";
import garden from "@/app/components/Hero/Assets/garden.png";

const Hero: React.FC = () => {
	return (
		<section
			className="min-h-screen flex flex-col justify-center items-center text-center"
			id="hero"
		>
			<div className="h-screen w-screen overflow-hidden absolute top-0 left-0 dark:saturate-0 select-none" id="hero-bg">
				<Image
					className="clouds opacity-20 dark:opacity-5"
					alt="clouds"
					src={clouds}
				/>
				<Image
					className="mountains dark:opacity-20"
					alt="mountains"
					src={mountains}
				/>
				<Image
					className="garden"
					alt="garden"
					src={garden}
					
				/>
			</div>

			<h1
				className={
					"text-6xl md:text-8xl lg:text-9xl font-extrabold overflow-hidden" +
					" " +
					secondary.className
				}
				id="hero-title"
			>
				Welcome To <br /> Coders Garden
			</h1>
			<p
				className="mt-4 text-muted-foreground font-medium md:text-lg lg:text-xl overflow-hidden"
				id="hero-subtitle"
			>
				We are a group of developers who love to code and learn new
				things.
			</p>
			<div
				className={
					"my-12 flex justify-center items-center gap-5" +
					" " +
					secondary.className
				}
				id="hero-cta"
			>
				<Button>
					<Link
						href={String(process.env.DISCORD_INVITE_LINK)}
						className="flex justify-between items-center gap-2 md:gap-3 text-xs md:text-lg font-bold whitespace-nowrap"
					>
						<DiscordLogoIcon className="h-[1.2rem] w-[1.2rem]" />{" "}
						Join our Discord
					</Link>
				</Button>
				<Button>
					<Link
						href={String(process.env.GITHUB_INVITE_LINK)}
						className="flex justify-between items-center gap-2 md:gap-3 text-xs md:text-lg font-bold whitespace-nowrap"
					>
						<GitHubLogoIcon className="h-[1.2rem] w-[1.2rem]" />{" "}
						Join our Github
					</Link>
				</Button>
			</div>
			<HeroAnimation />
		</section>
	);
};

export default Hero;
