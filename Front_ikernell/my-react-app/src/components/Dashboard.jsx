import { useState, useEffect } from 'react';
import { projectsAPI, workersAPI, usersAPI } from '../services/api';
import { 
  BriefcaseIcon, 
  UserGroupIcon, 
  UsersIcon, 
  ArrowTrendingUpIcon
} from '@heroicons/react/24/outline';

const Dashboard = () => {
  const [stats, setStats] = useState({
    projects: 0,
    workers: 0,
    users: 0,
    activeProjects: 0
  });
  const [loading, setLoading] = useState(true);
  const [recentProjects, setRecentProjects] = useState([]);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const [projectsRes, workersRes, usersRes] = await Promise.all([
          projectsAPI.getAll(),
          workersAPI.getAll(),
          usersAPI.getAll()
        ]);

        const projects = projectsRes.data;
        const workers = workersRes.data.data || workersRes.data;
        const users = usersRes.data;

        const activeProjects = projects.filter(p => p.state === 'active' || p.state === 'en curso').length;

        setStats({
          projects: projects.length,
          workers: workers.length,
          users: users.length,
          activeProjects
        });

        setRecentProjects(projects.slice(0, 5));
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

const StatCard = ({ title, value, icon: Icon, color = 'blue' }) => {
  return (
    <div className="bg-white overflow-hidden shadow rounded-lg">
      <div className="p-5">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <Icon className={`h-6 w-6 text-${color}-600`} />
          </div>
          <div className="ml-5 w-0 flex-1">
            <dl>
              <dt className="text-sm font-medium text-gray-500 truncate">{title}</dt>
              <dd className="text-lg font-semibold text-gray-900">{value}</dd>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
};

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Total Projects"
          value={stats.projects}
          icon={BriefcaseIcon}
          color="blue"
        />
        <StatCard
          title="Active Projects"
          value={stats.activeProjects}
          icon={ArrowTrendingUpIcon}
          color="green"
        />
        <StatCard
          title="Total Workers"
          value={stats.workers}
          icon={UserGroupIcon}
          color="purple"
        />
        <StatCard
          title="Total Users"
          value={stats.users}
          icon={UsersIcon}
          color="yellow"
        />
      </div>

      {/* Recent Projects */}
      <div className="bg-white shadow rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">
            Recent Projects
          </h3>
          <div className="flow-root">
            <ul className="-my-5 divide-y divide-gray-200">
              {recentProjects.map((project) => (
                <li key={project.id} className="py-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
                        <BriefcaseIcon className="h-4 w-4 text-blue-600" />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate">
                        {project.name}
                      </p>
                      <p className="text-sm text-gray-500 truncate">
                        {project.Description}
                      </p>
                    </div>
                    <div>
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                        project.state === 'active' || project.state === 'en curso'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-gray-100 text-gray-800'
                      }`}>
                        {project.state}
                      </span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white shadow rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">
            Quick Actions
          </h3>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              <BriefcaseIcon className="h-4 w-4 mr-2" />
              New Project
            </button>
            <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
              <UserGroupIcon className="h-4 w-4 mr-2" />
              Add Worker
            </button>
            <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
              <UsersIcon className="h-4 w-4 mr-2" />
              Add User
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
