// src/components/Sidebar.jsx
import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-gray-800 text-white">
      <div className="p-5">
        <h1 className="text-2xl font-bold">Dashboard</h1>
      </div>
      <nav className="mt-10">
        <ul>
          <li className="p-4 hover:bg-gray-700">
            <Link to="/home">Home</Link>
          </li>
          <li className="p-4 hover:bg-gray-700">
            <Link to="/projects">Projects</Link>
          </li>
          <li className="p-4 hover:bg-gray-700">
            <Link to="/settings">Settings</Link>
          </li>
        </ul>
      </nav>
      <Outlet/>
    </div>
  );
};

export default Sidebar;
