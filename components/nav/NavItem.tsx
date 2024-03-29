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
				className={`font-medium tracking-wide ${
					primary ? "md:text-brand-black" : "md:text-gray-700 text-white"
				}  transition-colors duration-200 hover:text-deep-purple-accent-400`}
			>
				{children}
			</Link>
		</li>
	);
};

export default NavItem;
