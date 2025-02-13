"use client";
import { type JSX, useState } from "react";
import { SearchButtonIcon } from "@/assets/icons/SearchButtonIcon";
import { LangPulldown } from "../langpulldown/LangPulldown";
import { CountryLabel } from "../countrylabel/CountryLabel";

type option = {
	value: string;
	label: JSX.Element;
};

const options: option[] = [
	{
		value: "日本",
		label: <CountryLabel code="JP" name="日本" withBorder={false} />,
	},
	{
		value: "アメリカ",
		label: <CountryLabel code="US" name="アメリカ" withBorder={false} />,
	},
	{
		value: "中国",
		label: <CountryLabel code="CN" name="中国" withBorder={false} />,
	},
];

export function SearchBox() {
	const [searchWord, setSearchWord] = useState<string>("");
	const [selectLang, setSelectLang] = useState<option[]>([]);

	const changeSearchWord = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchWord(e.target.value);
	};

	const changeSelectLang = (value: option[]) => {
		setSelectLang(value);
	};

	const submitQuery = () => {
		const query = {
			word: searchWord,
			lang: selectLang.map((lang: option) => lang.value),
		};
		// TODO: comment out
		console.log(query);
	};

	return (
		<form>
			<div className="flex gap-4">
				<input
					name=""
					id=""
					onChange={changeSearchWord}
					className="w-[700px] p-2 border border-lrz-border"
				/>
				<button
					type="button"
					onClick={submitQuery}
					className="px-4 py-2 bg-gradient-to-r from-lrz-blue to-lrz-purple rounded-[5%] hover:opacity-80"
				>
					<SearchButtonIcon />
				</button>
			</div>
			<div className="mt-6 flex gap-4 items-center justify-around">
				<p>検索したい言語：</p>
				<LangPulldown options={options} onSelectChangeFunc={changeSelectLang} />
			</div>
		</form>
	);
}
