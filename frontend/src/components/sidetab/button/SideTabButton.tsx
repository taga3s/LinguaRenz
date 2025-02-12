import { BookmarksMenuIcon } from "@/assets/icons/BookmarksMenuIcon";
import { FlagMenuIcon } from "@/assets/icons/FlagMenuIcon";
import { SquareLineMenuIcon } from "@/assets/icons/SquareLineMenuIcon";
import { NewSearchTabMenuIcon } from "@/assets/icons/NewSearchTabMenuIcon";
import { UserMenuIcon } from "@/assets/icons/UserMenuIcon";

type props = {
    buttonType: string | null;
    buttonName: string | null;
}

export default function SideTabButton(props: props) {
    const { buttonType, buttonName } = props;
    const changeButtonIcons = (buttonType: string | null) => {
        switch (buttonType) {
            case "article":
                return <BookmarksMenuIcon />
            case "history":
                return <FlagMenuIcon />
            case "newTab":
                return <NewSearchTabMenuIcon />
            case "settings":
                return <UserMenuIcon />
            default:
                return <SquareLineMenuIcon />
        }
    }
    const changeButtonName = (buttonType: string | null, buttonName: string | null) => {
        switch (buttonType) {
            case "article":
                return "記事ブックマーク"
            case "history":
                return "検索履歴ブックマーク"
            case "newTab":
                return "新しい検索"
            case "settings":
                return "mail@mail.com"
            default:
                return buttonName;
        }
    }

    return (
        // TODO: change next/link component
        <button className="px-8 py-4 w-full flex items-center justify-start gap-6 rounded-sm hover:bg-lrz-border-gray">
            {changeButtonIcons(buttonType)}
            <h1 className="font-zen font-bold tracking-wider">
                {changeButtonName(buttonType, buttonName)}
            </h1>
        </button>
    );
}