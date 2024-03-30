import Link from "next/link";
import React, { FC } from "react";
import { ReactNode } from "react";

interface NavItemProps {
	children: ReactNode;
	link: string;
	primary?: boolean;
}

const MobileNavItem = ({ primary, children, link }: NavItemProps) => {
  return (
    <li>
      <Link
        href={link}
        aria-label="Our product"
        title="Our product"
        className="flex items-center gap-8"
      >
        <span
          className={`font-bold text-2xl tracking-wide ${
            primary ? "text-gray-50" : "text-white"
          }  transition-colors duration-200 `}
        >
          {children}
        </span>
        {primary && <hr className="w-24 mt-2 border-2 border-brand-black" />}
      </Link>
    </li>
  );
};

export default MobileNavItem;
