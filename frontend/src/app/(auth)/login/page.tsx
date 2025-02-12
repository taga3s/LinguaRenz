"use client";
import { Logo } from "@/assets/Logo";
import { useStackApp } from "@stackframe/stack";
import { GoogleBlandIcon } from "@/assets/icons/GoogleBrandIcon";

export default function LoginPage() {
	const app = useStackApp();

	const handleClickSignIn = async () => {
		await app.signInWithOAuth("google");
	};

	return (
		<div className="flex flex-col items-center justify-center h-screen gap-16">
			<Logo per={100} />
			<p className="font-zen tracking-wider text-lg">「検索」で世界を覗こう</p>
			<button
				type="button"
				onClick={handleClickSignIn}
				className="bg-white border border-lrz-border-gray flex items-center justify-center gap-8 font-zen tracking-wider px-24 py-5 rounded-sm shadow-sm"
			>
				<GoogleBlandIcon />
				<span>Googleで続行</span>
			</button>
		</div>
	);
}
