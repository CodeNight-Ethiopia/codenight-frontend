import Link from "next/link";
import { useState } from "react";

import Logo from "../../assets/Logo";

import NavItem from "./NavItem";
import MobileNavItem from "./MobileNavItem";
import ThemeButton from "../button/ThemeButton";

const Nav = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<div className=" mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
			<div className="relative flex p-6 items-center justify-between">
				<Link
					href="/"
					aria-label="Company"
					title="Company"
					className="flex items-center"
				>
					<div className="w-16">
						<Logo />
					</div>
				</Link>
				<ul className="items-center hidden space-x-8 md:flex">
					<NavItem link="/">Home</NavItem>
					<NavItem link="/about-us">About us</NavItem>
					<NavItem link="/listen">Listen</NavItem>
					<NavItem link="/read">Read</NavItem>
					<NavItem link="/ask">Ask</NavItem>
					<NavItem link="/contact-us">Contact Us</NavItem>
					<NavItem link="">
						<ThemeButton />
					</NavItem>
				</ul>

				<div className="md:hidden">
					<button
						aria-label="Open Menu"
						title="Open Menu"
						className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
						onClick={() => setIsMenuOpen(true)}
					>
						<svg className="w-5 text-gray-600" viewBox="0 0 24 24">
							<path
								fill="currentColor"
								d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
							/>
							<path
								fill="currentColor"
								d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
							/>
							<path
								fill="currentColor"
								d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
							/>
						</svg>
					</button>
					{isMenuOpen && (
						<div className="absolute top-0 left-0 w-full">
							<div className="p-5 bg-white dark:bg-black">
								<div className="flex  items-center justify-between mb-4">
									<div>
										<button
											aria-label="Close Menu"
											title="Close Menu"
											className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
											onClick={() => setIsMenuOpen(false)}
										>
											<svg className="w-5 text-brand-black" viewBox="0 0 24 24">
												<path
													fill="currentColor"
													d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
												/>
											</svg>
										</button>
									</div>
								</div>
								<nav className="py-4">
									<ul className="flex flex-col gap-8 pl-8 ">
										<MobileNavItem primary link="/">
											Home
										</MobileNavItem>
										<MobileNavItem link="/about-us">About us</MobileNavItem>
										<MobileNavItem link="/listen">Listen</MobileNavItem>
										<MobileNavItem link="/read">Read</MobileNavItem>
										<MobileNavItem link="/ask">Ask</MobileNavItem>
										<MobileNavItem link="/contact-us">Contact Us</MobileNavItem>
										<MobileNavItem link="">
											<ThemeButton />
										</MobileNavItem>
									</ul>
								</nav>
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default Nav;
