import { Logo } from "@/assets/Logo";
import { SearchBox } from "@/components/searchbox/SearchBox";

export default function Page() {
	return (
		<div className="w-4/5 flex flex-col items-center justify-center h-screen gap-6">
			<Logo per={100} />
			<p>何を検索しますか？</p>
			<SearchBox />
		</div>
	);
}
