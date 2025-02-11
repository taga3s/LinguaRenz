import type { Metadata } from "next";
import { StackProvider, StackTheme } from "@stackframe/stack";
import { stackServerApp } from "../stack";
import { notoSans } from "./utils/fonts";
import "./globals.css";

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
			<body
				className={`${notoSans.variable} antialiased`}
			>
				<StackProvider app={stackServerApp}>
					<StackTheme>{children}</StackTheme>
				</StackProvider>
			</body>
		</html>
	);
}
