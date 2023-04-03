import Link from "next/link";
import { useState } from "react";

import Logo from "../../assets/Logo";

import NavItem from "./NavItem";

const Nav = () => {
	return (
		<div className="mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
			<div className="relative flex p-6 md:items-center items-start flex-row md:justify-between justify-center">
				<Link
					href="/"
					title="CodeNight"
					aria-label="CodeNight"
					className="flex items-center justify-center"
				>
					<div className="w-16">
						<Logo />
					</div>
				</Link>
				<ul className="items-center space-x-8 hidden md:flex">
					<NavItem link="/">Home</NavItem>
					<NavItem link="/about-us">About us</NavItem>
					<NavItem link="/read">Read</NavItem>
					<NavItem link="/faq">FAQs</NavItem>
					<NavItem link="/contact-us">Contact Us</NavItem>
				</ul>
			</div>
		</div>
	);
};

export default Nav;
