import Link from "next/link";
import { ReactNode } from "react";

interface NavItemProps {
	children: ReactNode;
	primary?: boolean;
	link: string;
}

const NavItem = ({ primary, children, link }: NavItemProps) => {
	return (
		<li>
			<Link
				href={link}
				aria-label="Our product"
				title="Our product"
				className={`font-medium tracking-wide ${
					primary ? "text-brand-black" : "text-gray-700"
				}  transition-colors duration-200 hover:text-deep-purple-accent-400`}
			>
				{children}
			</Link>
		</li>
	);
};

export default NavItem;
