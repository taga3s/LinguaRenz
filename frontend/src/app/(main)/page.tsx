import { UserButton } from "@stackframe/stack";
import Link from "next/link";

export default function Page() {
	return (
		<div>
			<UserButton />
			<div>
				<Link href="/bookmark/articles">/bookmark/articles</Link>
				<br />
				<Link href="/bookmark/search-history">/bookmark/search-history</Link>
			</div>
		</div>
	);
}
