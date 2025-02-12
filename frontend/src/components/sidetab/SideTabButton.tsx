import { BookmarksMenuIcon } from "@/assets/icons/BookmarksMenuIcon";
import { FlagMenuIcon } from "@/assets/icons/FlagMenuIcon";
import { SquareLineMenuIcon } from "@/assets/icons/SquareLineMenuIcon";
import { NewSearchTabMenuIcon } from "@/assets/icons/NewSearchTabMenuIcon";
import { UserMenuIcon } from "@/assets/icons/UserMenuIcon";

type IconType = "article" | "history" | "newTab" | "settings";

type props = {
	name: string;
	iconType?: IconType;
};

export function SideTabButton(props: props) {
	const { iconType, name } = props;
	const changeIcons = (iconType: IconType | undefined) => {
		switch (iconType) {
			case "article":
				return <BookmarksMenuIcon />;
			case "history":
				return <FlagMenuIcon />;
			case "newTab":
				return <NewSearchTabMenuIcon />;
			case "settings":
				return <UserMenuIcon />;
			default:
				return <SquareLineMenuIcon />;
		}
	};

	return (
		// TODO: change next/link component
		<button
			type="button"
			className="px-8 py-4 w-full flex items-center justify-start gap-6 rounded-sm hover:bg-lrz-border-gray"
		>
			{changeIcons(iconType)}
			<span className="font-zen font-bold tracking-wider">{name}</span>
		</button>
	);
}
