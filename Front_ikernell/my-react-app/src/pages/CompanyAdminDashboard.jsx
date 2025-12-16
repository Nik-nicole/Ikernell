import { useState, useEffect, useCallback } from 'react';
import { useAuth } from '../context/AuthContext';
import { 
  BriefcaseIcon, 
  PencilIcon, 
  TrashIcon,
  UserGroupIcon,
  ClockIcon,
  CheckCircleIcon,
  XCircleIcon
} from '@heroicons/react/24/outline';

const CompanyAdminDashboard = () => {
  const { user } = useAuth();
  const [projects, setProjects] = useState([]);
  const [workers, setWorkers] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchCompanyData = useCallback(async () => {
    try {
      const [projectsRes, workersRes] = await Promise.all([
        fetch(`http://localhost:8080/api/projects/company/${user.companyId}`),
        fetch(`http://localhost:8080/api/workers/company/${user.companyId}`)
      ]);
      
      const projectsData = await projectsRes.json();
      const workersData = await workersRes.json();
      
      setProjects(projectsData);
      setWorkers(workersData);
    } catch (error) {
      console.error('Error fetching company data:', error);
    } finally {
      setLoading(false);
    }
  }, [user.companyId]);

  useEffect(() => {
    fetchCompanyData();
  }, [fetchCompanyData]);

  const getProjectStatusColor = (state) => {
    switch (state?.toLowerCase()) {
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'in progress':
        return 'bg-blue-100 text-blue-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getProjectStatusIcon = (state) => {
    switch (state?.toLowerCase()) {
      case 'completed':
        return <CheckCircleIcon className="h-5 w-5" />;
      case 'in progress':
        return <ClockIcon className="h-5 w-5" />;
      case 'cancelled':
        return <XCircleIcon className="h-5 w-5" />;
      default:
        return <ClockIcon className="h-5 w-5" />;
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg p-6 text-white">
        <h1 className="text-3xl font-bold mb-2">Panel de Administrador de Empresa</h1>
        <p className="text-blue-100">Gestiona los proyectos y trabajadores de tu empresa</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow p-6 border-l-4 border-blue-500">
          <div className="flex items-center">
            <BriefcaseIcon className="h-8 w-8 text-blue-500" />
            <div className="ml-4">
              <h3 className="text-lg font-semibold text-gray-900">Proyectos</h3>
              <p className="text-2xl font-bold text-blue-600">{projects.length}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6 border-l-4 border-green-500">
          <div className="flex items-center">
            <CheckCircleIcon className="h-8 w-8 text-green-500" />
            <div className="ml-4">
              <h3 className="text-lg font-semibold text-gray-900">Completados</h3>
              <p className="text-2xl font-bold text-green-600">
                {projects.filter(p => p.state?.toLowerCase() === 'completed').length}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6 border-l-4 border-yellow-500">
          <div className="flex items-center">
            <ClockIcon className="h-8 w-8 text-yellow-500" />
            <div className="ml-4">
              <h3 className="text-lg font-semibold text-gray-900">En Progreso</h3>
              <p className="text-2xl font-bold text-yellow-600">
                {projects.filter(p => p.state?.toLowerCase() === 'in progress').length}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6 border-l-4 border-purple-500">
          <div className="flex items-center">
            <UserGroupIcon className="h-8 w-8 text-purple-500" />
            <div className="ml-4">
              <h3 className="text-lg font-semibold text-gray-900">Trabajadores</h3>
              <p className="text-2xl font-bold text-purple-600">{workers.length}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow">
          <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
            <h2 className="text-xl font-semibold text-gray-900">Proyectos Recientes</h2>
          </div>

          <div className="p-6 space-y-4 max-h-96 overflow-y-auto">
            {projects.slice(0, 5).map((project) => (
              <div key={project.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">{project.name}</h3>
                    <p className="text-sm text-gray-600 mt-1">{project.Description}</p>
                    <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
                      <span>Inicio: {new Date(project.date_start).toLocaleDateString()}</span>
                      <span>Fin: {new Date(project.date_end).toLocaleDateString()}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`px-2 py-1 text-xs font-medium rounded-full flex items-center gap-1 ${getProjectStatusColor(project.state)}`}>
                      {getProjectStatusIcon(project.state)}
                      {project.state || 'Pendiente'}
                    </span>
                  </div>
                </div>
                <div className="mt-3 flex justify-between items-center">
                  <span className="text-sm text-gray-500">
                    {project.id_workerList?.length || 0} trabajadores asignados
                  </span>
                  <div className="flex gap-2">
                    <button className="text-blue-600 hover:text-blue-900">
                      <PencilIcon className="h-4 w-4" />
                    </button>
                    <button className="text-red-600 hover:text-red-900">
                      <TrashIcon className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow">
          <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
            <h2 className="text-xl font-semibold text-gray-900">Trabajadores</h2>
          </div>

          <div className="p-6 space-y-4 max-h-96 overflow-y-auto">
            {workers.slice(0, 5).map((worker) => (
              <div key={worker.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      {worker.name} {worker.lastName}
                    </h3>
                    <p className="text-sm text-gray-600">{worker.profession}</p>
                    <p className="text-sm text-gray-500">{worker.specialtyDev}</p>
                    <div className="mt-2 text-sm text-gray-500">
                      <span>Email: {worker.email}</span>
                      <span className="ml-4">ID: {worker.identification}</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button className="text-blue-600 hover:text-blue-900">
                      <PencilIcon className="h-4 w-4" />
                    </button>
                    <button className="text-red-600 hover:text-red-900">
                      <TrashIcon className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyAdminDashboard;
