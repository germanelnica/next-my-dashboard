import Image from "next/image";
import { IoBrowsersOutline, IoCalculator, IoLogoReact } from "react-icons/io5";
import { SideBarMenuItem } from "./SideBarMenuItem";

const menuItems = [
  {
    path: "/dashboard/main",
    icon: <IoBrowsersOutline size={25} />,
    title: "Dashboard",
    subTitle: "Principal",
  },
  {
    path: "/dashboard/counter",
    icon: <IoCalculator size={25}/>,
    title: "Counter",
    subTitle: "Counter client side",
  },
];
export const SideBar = () => {
  return (
    <div
      id="menu" 
      style={{width:'400px'}}
      className="bg-gray-900 min-h-screen z-10 text-slate-300 w-64 left-0 h-screen overflow-y-scroll "
    >
      <div id="logo" className="my-4 px-6">
        <h1 className="flex flex-row items-center align-middle text-lg md:text-2xl font-bold text-white">
          <IoLogoReact className="mr-2"/>
          <span>Dash</span>
        </h1>
        <p className="text-slate-500 text-sm">
          Manage your actions and activities
        </p>
      </div>
      <div id="profile" className="px-6 py-10">
        <p className="text-slate-500">Welcome back,</p>
       
        <a href="#" className="inline-flex space-x-2 items-center">
          <span>
            <Image
              loading="lazy"
              className="rounded-full w-8 h-8"
              width={128}
              height={80}
              src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=128&q=80"
              alt="user profile"
            />
          </span>
          <span className="text-sm md:text-base font-bold">Edward Tompson</span>
        </a>
      </div>
      <div id="nav" className="w-full px-6">
        {menuItems.map((item) => (
          <SideBarMenuItem key={item.path} {...item}/>
        ))}
      </div>
    </div>
  );
};
