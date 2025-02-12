import { SideTabButton } from "./SideTabButton";

export function SideTab() {
	return (
		<div className="w-1/5 h-screen bg-lrz-bg-gray p-4 flex flex-col">
			<div className="w-full flex flex-col flex-none">
				<SideTabButton iconType="article" name="記事ブックマーク" />
				<SideTabButton iconType="history" name="検索履歴ブックマーク" />
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
