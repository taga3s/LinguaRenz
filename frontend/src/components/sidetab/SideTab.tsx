import { SideTabButton } from "./button/SideTabButton";

export function SideTab() {
	return (
		<div className="w-1/5 h-screen bg-lrz-bg-gray p-4 flex flex-col">
			<div className="w-full flex flex-col flex-none">
				<SideTabButton buttonType="article" buttonName="" />
				<SideTabButton buttonType="history" buttonName="" />
				<hr className="mt-2 border-lrz-border-gray" />
			</div>
			<div className="w-full flex flex-col mt-2 flex-1">
				<SideTabButton buttonType="" buttonName="YesYesYes" />
				<SideTabButton buttonType="newTab" buttonName="" />
			</div>
			<div className="w-full flex flex-col flex-none">
				<hr className="my-2 border-lrz-border-gray" />
				<SideTabButton buttonType="settings" buttonName="" />
			</div>
		</div>
	);
}
