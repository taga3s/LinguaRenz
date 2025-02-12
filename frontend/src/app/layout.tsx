import type { Metadata } from "next";
import { StackProvider, StackTheme } from "@stackframe/stack";
import { stackServerApp } from "../stack";
import { notoSans } from "./utils/fonts";
import "./globals.css";
import SideTab from "../components/sidetab/SideTab";

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
				className={`${notoSans.variable} antialiased bg-lrz-bg-white text-lrz-text-black`}
			>
				<StackProvider app={stackServerApp}>
					<StackTheme>
						<div className="flex">
							<SideTab />
							{children}
						</div>
					</StackTheme>
				</StackProvider>
			</body>
		</html>
	);
}
