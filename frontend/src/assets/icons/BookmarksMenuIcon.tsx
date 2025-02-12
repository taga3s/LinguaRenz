import { LRZ_BLUE, LRZ_PURPLE } from "@/lib/colors";

export function BookmarksMenuIcon() {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="32"
			height="32"
			viewBox="0 0 24 24"
		>
			<title>bookmarks_line</title>
			{/* TODO: refactoring */}
			<defs>
				<linearGradient id="LrzTheme">
					<stop className="stop1" offset="0%" stopColor={LRZ_BLUE} />
					<stop className="stop2" offset="100%" stopColor={LRZ_PURPLE} />
				</linearGradient>
			</defs>
			{/* ------ */}
			<g id="bookmarks_line" fill="none" fillRule="evenodd">
				<path d="M24 0v24H0V0zM12.594 23.258l-.012.002-.071.035-.02.004-.014-.004-.071-.036c-.01-.003-.019 0-.024.006l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.016-.018m.264-.113-.014.002-.184.093-.01.01-.003.011.018.43.005.012.008.008.201.092c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.003-.011.018-.43-.003-.012-.01-.01z" />
				<path
					fill="url(#LrzTheme)"
					d="M17 2a3 3 0 0 1 2.995 2.824L20 5v13.018c0 1.182-1.293 1.883-2.275 1.285l-.107-.072-.618-.449v2.236c0 1.182-1.293 1.883-2.275 1.285l-.107-.072-4.118-2.995-4.118 2.995c-.956.696-2.283.062-2.377-1.084L4 21.018V8a3 3 0 0 1 3-3 3 3 0 0 1 2.824-2.995L10 2zm-3 5H7a1 1 0 0 0-.993.883L6 8v12.036l3.618-2.63a1.5 1.5 0 0 1 1.64-.082l.124.081L15 20.036V8a1 1 0 0 0-.883-.993zm3-3h-7a1 1 0 0 0-1 1h5a3 3 0 0 1 3 3v8.309l1 .727V5a1 1 0 0 0-1-1"
				/>
			</g>
		</svg>
	);
}
