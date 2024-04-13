import StickyBottomBanner from "@/components/StickyBottomBanner";
import Nav from "@/components/nav/Nav";
import "@/styles/globals.css";
export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body>
				<main>
					<Nav />
					{children}
					<StickyBottomBanner />
				</main>
			</body>
		</html>
	);
}
