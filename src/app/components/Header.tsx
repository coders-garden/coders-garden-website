import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/toggle-theme";
import Link from "next/link";
import React from "react";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

const Header: React.FC = () => {
	return (
		<header className="flex justify-between items-center py-12">
			<Link href="/" className="text-lg font-bold">
				Coders Garden
			</Link>
			<nav className="flex gap-3">
				<Button variant={"link"}>
					<Link href="/about">About</Link>
				</Button>
				<Button variant={"link"}>
					<Link href="/community">Community</Link>
				</Button>
				<Link href="/login">
					<Button className="flex justify-between items-center gap-3">
						<GitHubLogoIcon className="h-[1.2rem] w-[1.2rem]" />
						Github Login
					</Button>
				</Link>
				<ThemeToggle />
			</nav>
		</header>
	);
};

export default Header;
