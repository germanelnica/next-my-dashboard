'use client';
import { usePathname } from "next/navigation";
import { JSX } from "react";
import style from "./SideBarMenuItem.module.css";
interface Props {
  path: string;
  icon: JSX.Element;
  title: string;
  subTitle: string;
}
//bg-blue-800
export const SideBarMenuItem = ({ path, icon, title, subTitle }: Props) => {
      const pathname = usePathname();
  return (
    <a
      href={path}
      className={`${style.link} ${(pathname == path) && style['active-link']}`} 
    >
      <div>
        <div className="text-white text-xl">{icon}</div>
      </div>
      <div className="flex flex-col">
        <span className="text-lg font-bold leading-5 text-white">{title}</span>
        <span className="text-sm text-white/50 hidden md:block">
          {subTitle}
        </span>
      </div>
    </a>
  );
};
