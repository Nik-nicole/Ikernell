import React from "react";
import { LuUser, LuBox, LuCalendar, LuMessageSquare } from "react-icons/lu";
import { FaSuitcase } from "react-icons/fa";
import { TbUser } from "react-icons/tb";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const SIDEBAR_LINKS = [
    { id: 1, path: "/", name: "Dashboard", icon: LuBox },
    { id: 2, path: "/members", name: "Members", icon: TbUser },
    { id: 3, path: "/messages", name: "Messages", icon: LuMessageSquare },
    { id: 4, path: "/projects", name: "Projects", icon: FaSuitcase },
    { id: 5, path: "/clients", name: "Clients", icon: LuUser },
    { id: 6, path: "/work", name: "Work Plan", icon: LuCalendar },
  ];

  return (
    <div className="w-16 md:w-56 fixed left-0 top-0 z-10 h-screen border-r pt-8 px-4 bg-white">
      {/* Logo */}
      <div>
        <img src="/logo.svg" alt="logo" className="w-28 hidden md:flex" />
        <img src="/logo_mini.svg" alt="logo" className="w-8 flex md:hidden" />
      </div>

      {/* Navegación */}
      <ul className="mt-8 space-y-4">
        {SIDEBAR_LINKS.map((link) => (
          <li key={link.id} className="flex items-center space-x-2">
            <Link
              to={link.path}
              className="flex items-center p-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg"
            >
              <span className="text-xl">{<link.icon />}</span>
              <span className="hidden md:inline ml-3">{link.name}</span>
            </Link>
          </li>
        ))}
      </ul>

      {/* Ayuda */}
      <div className="absolute bottom-4">
        <p className="text-sm text-gray-500">
          <span className="text-xl">?</span> Need Help?
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
