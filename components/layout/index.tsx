import { ReactNode } from "react";
import Nav from "@/components/nav/Nav";

interface LayoutProps {
	children: ReactNode;
}
const Layout = ({ children }: LayoutProps) => {
	return (
		<>
			<Nav />
			<main>{children}</main>
		</>
	);
};

export default Layout;
