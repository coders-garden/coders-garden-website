import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import type { Metadata } from "next";
import { getServerSession } from "next-auth";
import SessionProvider from "./components/SessionProvider";
import { primary } from "@/app/fonts";

export const metadata: Metadata = {
	title: "Coders Garden",
	description: "A place to learn and grow as a developer",
};

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const session = await getServerSession();
	return (
		<html lang="en">
			<body className={primary.className}>
				<SessionProvider session={session}>
					<ThemeProvider
						attribute="class"
						defaultTheme="system"
						enableSystem
						disableTransitionOnChange
					>
						{children}
					</ThemeProvider>
				</SessionProvider>
			</body>
		</html>
	);
}
