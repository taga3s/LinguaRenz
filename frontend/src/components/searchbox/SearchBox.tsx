import { SearchButtonIcon } from "@/assets/icons/SearchButtonIcon";
import LangPulldown from "../langpulldown/LangPulldown";

export default function SearchBox() {
    return (
        <form>
            <div className="flex gap-4">
                <input
                    name=""
                    id=""
                    className="w-[450px] p-2"
                />
                <button
                    type="submit"
                    className="px-4 py-2 bg-gradient-to-r from-lrz-blue to-lrz-purple rounded-[5%]"
                >
                    <SearchButtonIcon/>
                </button>
            </div>
            <div className="mt-6 flex gap-4">
                <p>検索したい言語：</p>
                <LangPulldown />
            </div>
        </form>
    )
}