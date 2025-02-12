import SideTab from "../../components/sidetab/SideTab";

export default function MainLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className="flex">
			<SideTab />
			{children}
		</div>
	);
}
