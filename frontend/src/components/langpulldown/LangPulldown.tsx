import type { JSX } from "react";
import dynamic from "next/dynamic";

type option = {
	value: string;
	label: JSX.Element;
};
const SelectLang = dynamic(() => import("react-select"), { ssr: false });

type props = {
	options: option[];
	onSelectChangeFunc: (value: option[]) => void;
};

export function LangPulldown(props: props) {
	const { options, onSelectChangeFunc } = props;

	return (
		<div>
			<SelectLang
				options={options}
				onChange={(value) => onSelectChangeFunc(value as option[])}
				className="w-[650px] px-4 py-2"
				isMulti
			/>
		</div>
	);
}
