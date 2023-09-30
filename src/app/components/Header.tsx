import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/toggle-theme";
import Link from "next/link";
import React from "react";
import AuthButton from "./AuthButton";

const Header: React.FC = () => {
	return (
		<header className="flex justify-between items-center py-12">
			<Link href="/" className="text-lg font-bold">
				Coders Garden
			</Link>
			<nav className="flex gap-3">
				<Button variant={"link"}>
					<Link href="#about">About</Link>
				</Button>
				<Button variant={"link"}>
					<Link href="#community">Community</Link>
				</Button>
				<AuthButton />
				<ThemeToggle />
			</nav>
		</header>
	);
};

export default Header;
