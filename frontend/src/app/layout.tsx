import type { Metadata } from "next";
import { StackProvider, StackTheme } from "@stackframe/stack";
import { stackServerApp } from "../stack";
import { notoSans } from "./utils/fonts";
import "./globals.css";
// Test
import { Logo } from "../assets/Logo";
import { BookmarksMenuIcon } from "../assets/icons/BookmarksMenuIcon";
import Flag from "react-flagpack";

export const metadata: Metadata = {
	title: "LinguaRenz",
	description: "LinguaRenz Description",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="ja">
			<body className={`${notoSans.variable} antialiased`}>
				{/* TEST CODE: Please Remove Comment */}
				{/* <Logo per={50} />
				<Flag code="JP" hasBorder={false} />
				<BookmarksMenuIcon /> */}
				{/* ------ */}
				<StackProvider app={stackServerApp}>
					<StackTheme>{children}</StackTheme>
				</StackProvider>
			</body>
		</html>
	);
}
