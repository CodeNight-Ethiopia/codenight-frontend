"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import Logo from "../../assets/Logo";
import {
  Bars3Icon as Menu,
  XMarkIcon as Close,
} from "@heroicons/react/20/solid";
import MobileNavItem from "@/components/nav/MobileNavItem";
import { NavigationMenuData } from "@/data";
import { useParams, usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const Nav = () => {
  const [toggle, setToggle] = useState(false);
  const [fix, setFixed] = useState(false);

  const pathname = usePathname();
  const params = useParams();
  const routes = [
    {
      href: `/`,
      label: "Home",
      active: pathname === `/`,
    },
    {
      href: `/about-us`,
      label: "About Us",
      active: pathname === `/about-us`,
    },
    {
      href: `/read`,
      label: "Read",
      active: pathname === `/read`,
    },
    {
      href: `/faq`,
      label: "FAQ's",
      active: pathname === `/faq`,
    },
    {
      href: `/contact-us`,
      label: "Contact Us",
      active: pathname === `/contact-us`,
    },
  ];

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
    <div className={`sticky top-0 z-50 bg-white border-b border-gray-100`}>
      <div
        className={` mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl lg:px-8 `}
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
            <nav className={cn("flex items-center space-x-4 lg:space-x-6")}>
              {routes.map((route) => (
                <Link
                  href={route.href}
                  key={route.href}
                  className={cn(
                    "text-base font-medium transition-colors hover:text-primary",
                    route.active
                      ? "text-black dark:text-white"
                      : "text-muted-foreground"
                  )}
                >
                  {route.label}
                </Link>
              ))}
            </nav>
            <li>
              <Link
                href="https://github.com/CodeNight-Ethiopia/codenight-frontend"
                className="group"
                aria-label="CodeNight on GitHub"
              >
                <svg
                  aria-hidden="true"
                  className="h-6 w-6 fill-slate-500 group-hover:fill-slate-700"
                >
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" />
                </svg>
              </Link>
            </li>
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
          </div>
          <div
            className={`${
              toggle
                ? "flex -translate-x-0 duration-75"
                : "flex -translate-x-full duration-75"
            } ps-6 transform md:-translate-x-full pt-2 bg-indigo-500 fixed w-screen h-full z-10 top-20 right-0 my-2 sidebar`}
          >
            <ul className="list-none flex flex-col gap-2 flex-1 text-cyan-50">
              {NavigationMenuData.map((menu, idx) => {
                return (
                  <MobileNavItem key={idx} link={menu.link}>
                    {menu.name}
                  </MobileNavItem>
                );
              })}
              <li>
                <Link
                  href="https://github.com/CodeNight-Ethiopia/codenight-frontend"
                  className="group"
                  aria-label="CodeNight on GitHub"
                >
                  <svg
                    aria-hidden="true"
                    className="h-6 w-6 fill-slate-700 group-hover:fill-slate-900"
                  >
                    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" />
                  </svg>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
