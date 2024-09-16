// src/components/Sidebar.jsx
import React from 'react';
import { HomeIcon, PresentationChartBarIcon } from '@heroicons/react/24/outline';

import { Outlet, Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-white text-black border-r-2">
      <div className="p-5">
        <h1 className="text-2xl font-bold">Dashboard</h1>
      </div>
      <nav className="mt-10">
        <ul>
          <li className="p-4 hover:bg-slate-100 flex flex-row">
            <HomeIcon 
              className='text-blue-500 h-6 w-6 inline mr-3'
            />
            <Link to="/home">Home</Link>
          </li>
          <li className="p-4 hover:bg-slate-100 flex flex-grow">
            <PresentationChartBarIcon  
              className='h-6 w-6 text-blue-500 inline mr-3'
            />
            <Link to="/projects">Projects</Link>
          </li>
          <li className="p-4 hover:bg-slate-100">
            <Link to="/settings">Settings</Link>
          </li>
        </ul>
      </nav>
      
      <Outlet/>
    </div>
  );
};

export default Sidebar;