import Link from "next/link";
import { useRouter } from "next/router";
import { ReactNode } from "react";

interface NavItemProps {
	children: ReactNode;
	link: string;
}

const NavItem = ({ children, link }: NavItemProps) => {
	const router = useRouter();
	return (
		<li>
			<Link
				href={link}
				className={`font-medium tracking-wide ${
					router.pathname === link ? "text-indigo-600" : "text-gray-700"
				}  transition-colors duration-200 hover:text-deep-purple-accent-400`}
			>
				{children}
			</Link>
		</li>
	);
};

export default NavItem;
