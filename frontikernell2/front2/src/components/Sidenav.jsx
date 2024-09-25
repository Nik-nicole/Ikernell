import { useState } from 'react';
import { ChevronDownIcon  } from '@heroicons/react/24/outline';
import { Outlet, Link } from 'react-router-dom';
import { IoIosClose } from "react-icons/io";
import { FaBars } from "react-icons/fa";
import Logo from "../assets/Logo.png"
const Sidenav = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showCarne, setShowCarne] = useState(false);
  const [showGranos, setShowGranos] = useState(false);
  const [showLacteos, setShowLacteos] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="relative">
      {/* Sidebar */}
      <div className={`fixed top-0 left-0 h-screen w-64 bg-white border-r border-gray-300 shadow-lg z-50 transition-transform duration-300 ease-in-out ${showMenu ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}>
        <div className="p-5 flex justify-between items-center">
          <div className='flex justify-center'>
          <img src={Logo} alt="Logo" className='w-34 h-32 flex justify-center'/>
          </div>
          <button onClick={toggleMenu} className="md:hidden p-2 text-gray-600 hover:text-gray-900">
            
          </button>
        </div>
        <nav className="mt-10">
          <ul>
            <li>
              <div onClick={() => setShowCarne(!showCarne)} className="p-4 hover:bg-green-300 flex items-center rounded-md cursor-pointer transition-colors duration-200">
                <span className="hover:text-white flex-grow text-black">Carne</span>
                <ChevronDownIcon className={`text-green-500 h-6 w-6 ml-2 transition-transform duration-200 ${showCarne ? 'rotate-180' : ''}`} />
                
              </div>
              {showCarne && (
                <ul className="ml-4">
                  <li className="p-2 hover:bg-slate-100 rounded-md transition-colors duration-200">
                    <Link to="/pollo" className="flex-grow text-black">Pollo</Link>
                  </li>
                  <li className="p-2 hover:bg-slate-100 rounded-md transition-colors duration-200">
                    <Link to="/pescado" className="flex-grow text-black">Pescado</Link>
                  </li>
                  <li className="p-2 hover:bg-slate-100 rounded-md transition-colors duration-200">
                    <Link to="/res" className="flex-grow text-black">Res</Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <div onClick={() => setShowGranos(!showGranos)} className="p-4 hover:bg-green-300 flex items-center rounded-md cursor-pointer transition-colors duration-200">
                
                <span className="hover:text-white flex-grow text-black">Granos</span>
                <ChevronDownIcon className={`text-green-500 h-6 w-6 ml-2 transition-transform duration-200 ${showGranos ? 'rotate-180' : ''}`} />
              </div>
              {showGranos && (
                <ul className="ml-4">
                  <li className="p-2 hover:bg-slate-100 rounded-md transition-colors duration-200">
                    <Link to="/granos/frijoles" className="flex-grow text-black">Frijoles</Link>
                  </li>
                  <li className="p-2 hover:bg-slate-100 rounded-md transition-colors duration-200">
                    <Link to="/granos/arroz" className="flex-grow text-black">Arroz</Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <div onClick={() => setShowLacteos(!showLacteos)} className="p-4 hover:bg-green-300 flex items-center rounded-md cursor-pointer transition-colors duration-200">
                
                <span className="hover:text-white flex-grow text-black">Lácteos</span>
                <ChevronDownIcon className={`text-green-500 h-6 w-6 ml-2 transition-transform duration-200 ${showLacteos ? 'rotate-180' : ''}`} />
              </div>
              {showLacteos && (
                <ul className="ml-4">
                  <li className="p-2 hover:bg-slate-100 rounded-md transition-colors duration-200">
                    <Link to="/lacteos/leche" className="flex-grow text-black">Leche</Link>
                  </li>
                  <li className="p-2 hover:bg-slate-100 rounded-md transition-colors duration-200">
                    <Link to="/lacteos/huevos" className="flex-grow text-black">Huevos</Link>
                  </li>
                </ul>
              )}
              
            </li>
            
            <li className=" border-u  border-gray-300 p-2 hover:bg-slate-100 rounded-md transition-colors duration-200">
                    <Link to="/granos/arroz" className="flex-grow text-black">Las Rachas</Link>
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
        className="fixed bottom-4 right-4 bg-green-400 text-white p-3 rounded-full z-50 md:hidden"
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
