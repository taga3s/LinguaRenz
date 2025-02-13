"use client";
import { Logo } from "@/assets/Logo";
import { OAuthButton } from "@stackframe/stack";

export default function LoginPage() {
	return (
		<div className="flex flex-col items-center justify-center h-screen gap-16">
			<Logo per={100} />
			<p className="font-zen tracking-wider text-lg">「検索」で世界を覗こう</p>
			<OAuthButton provider="google" type="sign-in" />
		</div>
	);
}
