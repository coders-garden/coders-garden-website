import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/toggle-theme";
import Link from "next/link";
import React from "react";
import AuthButton from "./AuthButton";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import HeaderAnimation from "./HeaderAnimation";
import { secondary } from "@/app/fonts";
import logo from "@/app/components/Header/Assets/logo.png";
import Image from "next/image";

const NavBar = () => {
	return (
		<>
			<nav className="hidden md:flex md:gap-3">
				<Button variant={"link"}>
					<Link href="#about">About</Link>
				</Button>
				<Button variant={"link"}>
					<Link href="#community">Community</Link>
				</Button>
				<AuthButton />
				<ThemeToggle />
			</nav>
			<nav className="ml-auto md:hidden">
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button variant="outline">
							<HamburgerMenuIcon className="h-[1.2rem] w-[1.2rem]" />
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent align="end">
						<DropdownMenuItem className="flex justify-center">
							<Link href="#about">About</Link>
						</DropdownMenuItem>
						<DropdownMenuItem className="flex justify-center">
							<Link href="#community">Community</Link>
						</DropdownMenuItem>
						<DropdownMenuItem className="flex justify-center">
							<AuthButton />
						</DropdownMenuItem>
						<DropdownMenuItem className="flex justify-center">
							<ThemeToggle />
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			</nav>
		</>
	);
};

const Header: React.FC = () => {
	return (
		<header className="fixed top-0 left-0 w-full px-5  backdrop-blur-xl bg-white/0.5 z-10">
			<div className="flex justify-between items-center py-3 md:py-5 max-w-6xl m-auto">
				<Link href="/" className={"text-lg font-bold flex justify-center items-center gap-3" + " " + secondary.className }>
					<Image
						className="rounded-full w-12 h-12"
						src={logo}
						alt="Coders Garden Logo"
					/>
					Coders Garden
				</Link>
				<NavBar />
				<HeaderAnimation />
			</div>
		</header>
	);
};

export default Header;
