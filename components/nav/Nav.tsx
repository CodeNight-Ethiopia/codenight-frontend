import Link from "next/link";
import { useEffect, useState } from "react";
import Image from 'next/image';
import Logo from "../../assets/Logo";
import close from "../../assets/close.svg";
import menu from "../../assets/menu.svg";
import NavItem from "./NavItem";
import MobileNavItem from "./MobileNavItem";

const Nav = () => {
    const [toggle,setToggle] = useState(false);
	const [fix,setFixed] = useState(false)
	
	const setNavFixed = () => {
        if(window.scrollY >= 170){
            setFixed(true)
        }else {
            setFixed(false)
        }
    }
	useEffect(()=>{
		window.addEventListener("scroll",setNavFixed)
		
	},[fix])

	return (
		<div className={` ${fix?'bg-indigo-600 ':''} sticky top-0 z-50`}>	
		<div className={` mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 `}>
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
					<NavItem link="/">Home</NavItem>
					<NavItem link="/about-us">About us</NavItem>
					<NavItem link="/read">Read</NavItem>
					<NavItem link="/faq">FAQs</NavItem>
					<NavItem link="/contact-us">Contact Us</NavItem>
				</ul>
        <div className="sm:hidden flex flex-1 justify-end items-center ">
          <Image
             src={!toggle ? menu : close} 
             alt="openCloseMenu"
             className='cursor-pointer h-[36px] w-[36px] object-contain'
             onClick={()=> setToggle((prev) => (
              !prev)) 
             } />
           <div className={`${toggle?'flex':'hidden'} p-4 bg-indigo-500 absolute top-20 right-0 mx-4 my-2 min-w-[70px] rounded-xl sidebar`}>
                <ul className="list-none flex flex-col justify-end items-center flex-1 text-cyan-50">
                {  <>
                   <li className={`font-poppins font-normal cursor-pointer text-[16px] text-white`} ><Link href="/">Home</Link></li>
				   <li className={`font-poppins font-normal cursor-pointer text-[16px] text-white`} ><Link href="/about-us">About Us</Link></li>
				   <li className={`font-poppins font-normal cursor-pointer text-[16px] text-white`} ><Link href="/read">Read</Link></li>
				   <li className={`font-poppins font-normal cursor-pointer text-[16px] text-white`} ><Link href="/contact-us">Contact Us</Link></li>
				   </>
				 
                }
              </ul>
           </div>
		</div>

		</div>
		</div>
	</div>	
	);
};

export default Nav;
