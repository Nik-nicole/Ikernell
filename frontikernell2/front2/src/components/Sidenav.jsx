// src/components/Sidebar.jsx
import React, { useState } from 'react';
import { HomeIcon, PresentationChartBarIcon, UserGroupIcon, ChatBubbleOvalLeftEllipsisIcon, Bars2Icon } from '@heroicons/react/24/outline';
import { Outlet, Link } from 'react-router-dom';
import { IoIosClose } from "react-icons/io";
import { FaBars } from "react-icons/fa";

const Sidenav = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="relative">
      {/* Sidebar */}
      <div className={`fixed top-0 left-0 h-screen w-64 bg-white border-r border-gray-300 shadow-lg z-50 transition-transform duration-300 ease-in-out ${showMenu ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}>
        <div className="p-5 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <button onClick={toggleMenu} className="md:hidden p-2 text-gray-600 hover:text-gray-900">
            <IoIosClose size={24} />
          </button>
        </div>
        <nav className="mt-10">
          <ul>
            <li className="p-4 hover:bg-slate-100 flex items-center rounded-md transition-colors duration-200">
              <HomeIcon className="text-blue-500 h-6 w-6 mr-3" />
              <Link to="/home" className="flex-grow text-black">Home</Link>
            </li>
            <li className="p-4 hover:bg-slate-100 flex items-center rounded-md transition-colors duration-200">
              <PresentationChartBarIcon className="text-blue-500 h-6 w-6 mr-3" />
              <Link to="/projects" className="flex-grow text-black">Projects</Link>
            </li>
            <li className="p-4 hover:bg-slate-100 flex items-center rounded-md transition-colors duration-200">
              <UserGroupIcon className="text-blue-500 h-6 w-6 mr-3" />
              <Link to="/workers" className="flex-grow text-black">Workers</Link>
            </li>
            <li className="p-4 hover:bg-slate-100 flex items-center rounded-md transition-colors duration-200">
              <ChatBubbleOvalLeftEllipsisIcon className="text-blue-500 h-6 w-6 mr-3" />
              <Link to="/Chatgpt" className="flex-grow text-black">Chat</Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Overlay for mobile view */}
      {showMenu && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40 md:hidden"
          onClick={toggleMenu}
        ></div>
      )}

      {/* Toggle Button */}
      <button
        onClick={toggleMenu}
        className="fixed bottom-4 right-4 bg-blue-600 text-white p-3 rounded-full z-50 md:hidden"
      >
        {showMenu ? <IoIosClose size={24} /> : <FaBars size={24} />}
      </button>

      {/* Content Area */}
      <div className={`flex-1 ml-0 md:ml-64 transition-all duration-300`}>
        <Outlet />
      </div>
    </div>
  );
};

export default Sidenav;
