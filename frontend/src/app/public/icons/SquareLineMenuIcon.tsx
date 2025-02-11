import { LRZ_BLUE, LRZ_PURPLE } from "../../utils/colors";

export function SquareLineMenuIcon() {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
		>
			<title>diamond_square_line</title>
			{/* TODO: refactoring */}
			<defs>
				<linearGradient id="LrzTheme">
					<stop className="stop1" offset="0%" stopColor={LRZ_BLUE} />
					<stop className="stop2" offset="100%" stopColor={LRZ_PURPLE} />
				</linearGradient>
			</defs>
			{/* ------ */}
			<g id="diamond_square_line" fill="none" fillRule="evenodd">
				<path d="M24 0v24H0V0zM12.594 23.258l-.012.002-.071.035-.02.004-.014-.004-.071-.036c-.01-.003-.019 0-.024.006l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.016-.018m.264-.113-.014.002-.184.093-.01.01-.003.011.018.43.005.012.008.008.201.092c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.003-.011.018-.43-.003-.012-.01-.01z" />
				<path
					fill="url(#LrzTheme)"
					d="M10.586 2.807a2 2 0 0 1 2.828 0l7.778 7.779a2 2 0 0 1 0 2.828l-7.778 7.778a2 2 0 0 1-2.828 0l-7.778-7.778a2 2 0 0 1 0-2.828zM12 4.222 4.222 12 12 19.778 19.778 12z"
				/>
			</g>
		</svg>
	);
}
