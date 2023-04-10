import Link from "next/link";
import { FC, ReactNode } from "react";

interface NavItemProps {
	children: ReactNode;
	primary?: boolean;
	link: string;
}

const NavItem: FC<NavItemProps> = ({ primary, children, link }) => {
	return (
		<li>
			<Link
				href={link}
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
