import { LRZ_BLUE, LRZ_PURPLE } from "../../utils/colors";

export function SearchTopicIcon() {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
		>
			<title>search_3_line</title>
			{/* TODO: refactoring */}
			<defs>
				<linearGradient id="LrzTheme">
					<stop className="stop1" offset="0%" stopColor={LRZ_BLUE} />
					<stop className="stop2" offset="100%" stopColor={LRZ_PURPLE} />
				</linearGradient>
			</defs>
			{/* ------ */}
			<g id="search_3_line" fill="none" fillRule="evenodd">
				<path d="M24 0v24H0V0zM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01z" />
				<path
					fill="url(#LrzTheme)"
					d="M10.5 4a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13M2 10.5a8.5 8.5 0 1 1 15.176 5.262l3.652 3.652a1 1 0 0 1-1.414 1.414l-3.652-3.652A8.5 8.5 0 0 1 2 10.5M9.5 7a1 1 0 0 1 1-1 4.5 4.5 0 0 1 4.5 4.5 1 1 0 1 1-2 0A2.5 2.5 0 0 0 10.5 8a1 1 0 0 1-1-1"
				/>
			</g>
		</svg>
	);
}
