import Link from "next/link";
import { useEffect, useState } from "react";
import Logo from "../../assets/Logo";
import {
	Bars3Icon as Menu,
	XMarkIcon as Close,
} from "@heroicons/react/20/solid";
import NavItem from "./NavItem";
import { NavigationMenuData } from "@/data";

const Nav = () => {
	const [toggle, setToggle] = useState(false);
	const [fix, setFixed] = useState(false);

	const setNavFixed = () => {
		if (window.scrollY >= 170) {
			setFixed(true);
		} else {
			setFixed(false);
		}
	};
	useEffect(() => {
		window.addEventListener("scroll", setNavFixed);
	}, [fix]);

	return (
		<div className="sticky top-0 z-50 bg-white border-b border-gray-100">
			<div
				className="mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8"
			>
				<div className="flex p-6 md:items-center items-start flex-row md:justify-between justify-center">
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
						{NavigationMenuData.map((menu, idx) => {
							return (
								<NavItem key={idx} link={menu.link}>
									{menu.name}
								</NavItem>
							);
						})}
					</ul>
					<div className="md:hidden flex flex-1 justify-end items-center ">
						{!toggle ? (
							<Menu
								className="w-6 h-6"
								onClick={() => setToggle((prev) => !prev)}
							/>
						) : (
							<Close
								className="w-6 h-6"
								onClick={() => setToggle((prev) => !prev)}
							/>
						)}
						<div
							className={`${
								toggle ? "flex" : "hidden"
							} p-4 bg-indigo-500 absolute top-20 right-0 mx-4 my-2 min-w-[70px] rounded-xl sidebar`}
						>
							<ul className="list-none flex flex-col gap-2 justify-end items-center flex-1 text-cyan-50">
								{NavigationMenuData.map((menu, idx) => {
									return (
										<NavItem key={idx} link={menu.link}>
											{menu.name}
										</NavItem>
									);
								})}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Nav;
