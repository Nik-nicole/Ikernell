import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  HomeIcon, 
  UserGroupIcon, 
  BriefcaseIcon, 
  UsersIcon, 
  CogIcon,
  Bars3Icon,
  XMarkIcon,
  ArrowRightOnRectangleIcon
} from '@heroicons/react/24/outline';
import { useAuth } from '../context/AuthContext';

const Layout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const navigation = [
    { name: 'Dashboard', href: '/dashboard', icon: HomeIcon },
    { name: 'Projects', href: '/projects', icon: BriefcaseIcon, role: 'COMPANY_ADMIN' },
    { name: 'Workers', href: '/workers', icon: UserGroupIcon, role: 'COMPANY_ADMIN' },
    { name: 'Users', href: '/users', icon: UsersIcon, role: 'SUPER_ADMIN' },
    { name: 'Settings', href: '/settings', icon: CogIcon },
  ];

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const isActive = (href) => location.pathname === href;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile sidebar */}
      <div className={`fixed inset-0 z-50 lg:hidden ${sidebarOpen ? 'block' : 'hidden'}`}>
        <div className="fixed inset-0 bg-gray-600 bg-opacity-75" onClick={() => setSidebarOpen(false)} />
        <div className="fixed inset-y-0 left-0 flex w-64 flex-col bg-white">
          <div className="flex h-16 items-center justify-between px-4">
            <h2 className="text-xl font-bold text-gray-900">Ikell Solutions</h2>
            <button
              onClick={() => setSidebarOpen(false)}
              className="rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>
          </div>
          <nav className="flex-1 space-y-1 px-2 py-4">
            {navigation
              .filter(item => !item.role || user?.role === item.role || user?.role === 'ADMIN')
              .map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                  isActive(item.href)
                    ? 'bg-blue-100 text-blue-900'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`}
                onClick={() => setSidebarOpen(false)}
              >
                <item.icon
                  className={`mr-3 h-5 w-5 ${
                    isActive(item.href) ? 'text-blue-500' : 'text-gray-400 group-hover:text-gray-500'
                  }`}
                />
                {item.name}
              </Link>
            ))}
            <button
              onClick={handleLogout}
              className="group flex items-center px-2 py-2 text-sm font-medium rounded-md text-red-600 hover:bg-red-50 hover:text-red-900 w-full"
            >
              <ArrowRightOnRectangleIcon className="mr-3 h-5 w-5 text-red-400 group-hover:text-red-500" />
              Cerrar Sesión
            </button>
          </nav>
        </div>
      </div>

      {/* Desktop sidebar */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col">
        <div className="flex flex-col flex-grow bg-white border-r border-gray-200 pt-5 pb-4 overflow-y-auto">
          <div className="flex items-center flex-shrink-0 px-4">
            <h2 className="text-xl font-bold text-gray-900">Ikell Solutions</h2>
          </div>
          <nav className="mt-5 flex-1 flex flex-col">
            <div className="flex-1 space-y-1 px-2">
              {navigation
                .filter(item => !item.role || user?.role === item.role || user?.role === 'ADMIN')
                .map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                    isActive(item.href)
                      ? 'bg-blue-100 text-blue-900'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  <item.icon
                    className={`mr-3 h-5 w-5 ${
                      isActive(item.href) ? 'text-blue-500' : 'text-gray-400 group-hover:text-gray-500'
                    }`}
                  />
                  {item.name}
                </Link>
              ))}
              <button
                onClick={handleLogout}
                className="group flex items-center px-2 py-2 text-sm font-medium rounded-md text-red-600 hover:bg-red-50 hover:text-red-900 w-full"
              >
                <ArrowRightOnRectangleIcon className="mr-3 h-5 w-5 text-red-400 group-hover:text-red-500" />
                Cerrar Sesión
              </button>
            </div>
          </nav>
        </div>
      </div>

      {/* Main content */}
      <div className="lg:pl-64">
        <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
          <button
            type="button"
            className="lg:hidden -m-2.5 p-2.5 text-gray-700 hover:text-gray-900"
            onClick={() => setSidebarOpen(true)}
          >
            <Bars3Icon className="h-6 w-6" />
          </button>

          <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
            <div className="flex flex-1">
              <h1 className="text-lg font-semibold leading-6 text-gray-900">
                {navigation.find(item => item.href === location.pathname)?.name || 'Dashboard'}
              </h1>
            </div>
            <div className="flex items-center">
              <span className="text-sm text-gray-700 mr-4">
                {user?.workerName || 'Usuario'}
              </span>
              <span className="px-2 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800">
                {user?.role || 'USER'}
              </span>
            </div>
          </div>
        </div>

        <main className="py-6">
          <div className="px-4 sm:px-6 lg:px-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Layout;
