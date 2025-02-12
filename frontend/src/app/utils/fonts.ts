import { Noto_Sans_JP } from "next/font/google";
import { Zen_Kaku_Gothic_New } from "next/font/google";

export const notoSans = Noto_Sans_JP({
	variable: "--font-noto-sans",
	subsets: ["latin"],
});

export const zenKaku = Zen_Kaku_Gothic_New({
	weight: ["300", "400", "500", "700", "900"],
	variable: "--font-zen-kaku",
	subsets: ["latin"],
});
