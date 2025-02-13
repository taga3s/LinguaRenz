"use client";
import { useRouter } from "next/navigation";
import { SideTabButton } from "./SideTabButton";
import { useUser } from "@stackframe/stack";
import { useToast } from "@/hooks/use-toast";
import { ToastAction } from "@/components/ui/toast";

export function SideTab() {
	const user = useUser();
	const { toast } = useToast();
	const router = useRouter();

	const dispatchLoginToast = () => {
		toast({
			title: "Opps!",
			description: "利用するにはログインをする必要があります",
			action: (
				<ToastAction altText="ログイン" onClick={() => router.push("/login")}>
					ログイン
				</ToastAction>
			),
		});
	};

	const handleClickToWebsiteBookmark = () => {
		if (!user) {
			dispatchLoginToast();
			return;
		}
		router.push("/bookmark/websites");
	};

	const handleClickToSearchHistoryBookmark = () => {
		if (!user) {
			dispatchLoginToast();
			return;
		}
		router.push("/bookmark/search-histories");
	};

	return (
		<div className="w-1/5 h-screen bg-lrz-bg-gray p-4 flex flex-col">
			<div className="w-full flex flex-col flex-none">
				<SideTabButton
					iconType="article"
					name="記事ブックマーク"
					handleClick={handleClickToWebsiteBookmark}
				/>
				<SideTabButton
					iconType="history"
					name="検索履歴ブックマーク"
					handleClick={handleClickToSearchHistoryBookmark}
				/>
				<hr className="mt-2 border-lrz-border-gray" />
			</div>
			<div className="w-full flex flex-col mt-2 flex-1">
				<SideTabButton name="YesYesYes" />
				<SideTabButton iconType="newTab" name="新しい検索" />
			</div>
			<div className="w-full flex flex-col flex-none">
				<hr className="my-2 border-lrz-border-gray" />
				<SideTabButton iconType="settings" name="main@gmail.com" />
			</div>
		</div>
	);
}
