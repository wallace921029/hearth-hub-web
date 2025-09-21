import {
  EllipsisHorizontalCircleIcon,
  HomeIcon,
  ListBulletIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";
import { Outlet } from "react-router";

function MainLayout() {
  const navItems = [
    { icon: ListBulletIcon, label: "Todo" },
    { icon: HomeIcon, label: "Home" },
    { icon: EllipsisHorizontalCircleIcon, label: "More" },
    { icon: UserCircleIcon, label: "My" },
  ];
  const [activeNavItem, setActiveNavItem] = useState("Todo");

  return (
    <div className="main-layout w-full h-full relative">
      <Outlet />

      <div className="absolute bottom-0 left-0 w-full px-4 pt-4 pb-8">
        <div className="nav-bar py-2 flex justify-around bg-zinc-500/30 backdrop-blur-md rounded-4xl shadow-lg">
          {navItems.map(({ icon: Icon, label }) => (
            <div
              className={`nav-item w-10 flex flex-col items-center ${
                activeNavItem === label ? "text-blue-500" : "text-white"
              }`}
              key={label}
              onClick={() => setActiveNavItem(label)}
            >
              <Icon className="w-5 h-5" />
              <span className="text-sm">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MainLayout;
