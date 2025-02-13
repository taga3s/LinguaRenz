import Flag from "react-flagpack";

type props = {
	code: string;
	size?: "S" | "M" | "L";
	name: string;
	withBorder: boolean;
};

export function CountryLabel(props: props) {
	const { code, size, name, withBorder } = props;
	const hasBorderClass = (hasBorder: boolean) => {
		if (hasBorder) {
			return "rounded-full bg-lrz-bg-white border border-lrz-border-gray";
		}
	};

	return (
		<div
			className={`flex gap-4 px-4 py-2 items-center
                ${hasBorderClass(withBorder)}`}
		>
			<div className="border border-lrz-border-gray">
				<Flag
					code={code}
					size={size ? size : "L"}
					hasDropShadow={true}
					hasBorder={false}
				/>
			</div>
			<p className="tracking-wider">{name}</p>
		</div>
	);
}
