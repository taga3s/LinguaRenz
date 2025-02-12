import { LRZ_BLUE, LRZ_PURPLE } from "@/lib/colors";

export function UserMenuIcon() {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
		>
			<title>user_1_line</title>
			{/* TODO: refactoring */}
			<defs>
				<linearGradient id="LrzTheme">
					<stop className="stop1" offset="0%" stopColor={LRZ_BLUE} />
					<stop className="stop2" offset="100%" stopColor={LRZ_PURPLE} />
				</linearGradient>
			</defs>
			{/* ------ */}
			<g id="user_1_line" fill="none" fillRule="evenodd">
				<path d="M24 0v24H0V0zM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01z" />
				<path
					fill="url(#LrzTheme)"
					d="M16 14a5 5 0 0 1 4.995 4.783L21 19v2a1 1 0 0 1-1.993.117L19 21v-2a3 3 0 0 0-2.824-2.995L16 16H8a3 3 0 0 0-2.995 2.824L5 19v2a1 1 0 0 1-1.993.117L3 21v-2a5 5 0 0 1 4.783-4.995L8 14zM12 2a5 5 0 1 1 0 10 5 5 0 0 1 0-10m0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6"
				/>
			</g>
		</svg>
	);
}
