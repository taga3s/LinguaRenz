import { UserButton } from "@stackframe/stack";
import Link from "next/link";
import { Logo } from "@/assets/Logo";
import SearchBox from "@/components/searchbox/SearchBox";
import CountryLabel from "@/components/countrylabel/CountryLabel";

export default function Page() {
	return (
		<div className="w-4/5 flex flex-col items-center justify-center h-screen gap-6">
			<Logo per={100} />
			<p>何を検索しますか？</p>
			<SearchBox />
			{/* <UserButton />
			<div>
				<Link href="/bookmark/articles">/bookmark/articles</Link>
				<br />
				<Link href="/bookmark/search-history">/bookmark/search-history</Link>
			</div> */}
		</div>
	);
}
