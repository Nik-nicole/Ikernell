import { useState, useEffect, useCallback } from 'react';
import { useAuth } from '../context/AuthContext';
import { 
  BriefcaseIcon, 
  ClockIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  CalendarIcon,
  UserGroupIcon,
  ChartBarIcon
} from '@heroicons/react/24/outline';

const UserDashboard = () => {
  const { user } = useAuth();
  const [assignedProjects, setAssignedProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchAssignedProjects = useCallback(async () => {
    try {
      const response = await fetch(`http://localhost:8080/api/projects/worker/${user.workerId}`);
      const data = await response.json();
      setAssignedProjects(data);
    } catch (error) {
      console.error('Error fetching assigned projects:', error);
    } finally {
      setLoading(false);
    }
  }, [user.workerId]);

  useEffect(() => {
    fetchAssignedProjects();
  }, [fetchAssignedProjects]);

  const getProjectStatusColor = (state) => {
    switch (state?.toLowerCase()) {
      case 'completed':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'in progress':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'cancelled':
        return 'bg-red-100 text-red-800 border-red-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getProjectStatusIcon = (state) => {
    switch (state?.toLowerCase()) {
      case 'completed':
        return <CheckCircleIcon className="h-6 w-6 text-green-600" />;
      case 'in progress':
        return <ClockIcon className="h-6 w-6 text-blue-600" />;
      case 'cancelled':
        return <ExclamationTriangleIcon className="h-6 w-6 text-red-600" />;
      default:
        return <ClockIcon className="h-6 w-6 text-gray-600" />;
    }
  };

  const getProgressPercentage = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const now = new Date();
    
    if (now < start) return 0;
    if (now > end) return 100;
    
    const total = end - start;
    const elapsed = now - start;
    return Math.round((elapsed / total) * 100);
  };

  const getProgressColor = (percentage) => {
    if (percentage >= 80) return 'bg-green-500';
    if (percentage >= 50) return 'bg-blue-500';
    if (percentage >= 20) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-green-600 to-teal-600 rounded-lg p-6 text-white">
        <h1 className="text-3xl font-bold mb-2">Mis Proyectos</h1>
        <p className="text-green-100">Visualiza el progreso de tus proyectos asignados</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow p-6 border-l-4 border-green-500">
          <div className="flex items-center">
            <BriefcaseIcon className="h-8 w-8 text-green-500" />
            <div className="ml-4">
              <h3 className="text-lg font-semibold text-gray-900">Total Proyectos</h3>
              <p className="text-2xl font-bold text-green-600">{assignedProjects.length}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6 border-l-4 border-blue-500">
          <div className="flex items-center">
            <ClockIcon className="h-8 w-8 text-blue-500" />
            <div className="ml-4">
              <h3 className="text-lg font-semibold text-gray-900">En Progreso</h3>
              <p className="text-2xl font-bold text-blue-600">
                {assignedProjects.filter(p => p.state?.toLowerCase() === 'in progress').length}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6 border-l-4 border-yellow-500">
          <div className="flex items-center">
            <CalendarIcon className="h-8 w-8 text-yellow-500" />
            <div className="ml-4">
              <h3 className="text-lg font-semibold text-gray-900">Pendientes</h3>
              <p className="text-2xl font-bold text-yellow-600">
                {assignedProjects.filter(p => p.state?.toLowerCase() === 'pending').length}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6 border-l-4 border-purple-500">
          <div className="flex items-center">
            <ChartBarIcon className="h-8 w-8 text-purple-500" />
            <div className="ml-4">
              <h3 className="text-lg font-semibold text-gray-900">Completados</h3>
              <p className="text-2xl font-bold text-purple-600">
                {assignedProjects.filter(p => p.state?.toLowerCase() === 'completed').length}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">Tablero de Proyectos</h2>
        </div>

        <div className="p-6">
          {assignedProjects.length === 0 ? (
            <div className="text-center py-12">
              <BriefcaseIcon className="mx-auto h-12 w-12 text-gray-400" />
              <h3 className="mt-2 text-sm font-medium text-gray-900">No tienes proyectos asignados</h3>
              <p className="mt-1 text-sm text-gray-500">Contacta a tu administrador para asignarte proyectos.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {assignedProjects.map((project) => {
                const progress = getProgressPercentage(project.date_start, project.date_end);
                const progressColor = getProgressColor(progress);
                
                return (
                  <div key={project.id} className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:shadow-lg transition-all duration-300 hover:border-green-300">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        {getProjectStatusIcon(project.state)}
                        <span className={`ml-2 px-3 py-1 text-xs font-medium rounded-full ${getProjectStatusColor(project.state)}`}>
                          {project.state || 'Pendiente'}
                        </span>
                      </div>
                    </div>
                    
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{project.name}</h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">{project.Description}</p>
                    
                    <div className="space-y-3">
                      <div className="flex justify-between text-sm text-gray-500">
                        <span>Inicio:</span>
                        <span>{new Date(project.date_start).toLocaleDateString()}</span>
                      </div>
                      <div className="flex justify-between text-sm text-gray-500">
                        <span>Fin:</span>
                        <span>{new Date(project.date_end).toLocaleDateString()}</span>
                      </div>
                    </div>
                    
                    <div className="mt-4">
                      <div className="flex justify-between text-sm text-gray-600 mb-2">
                        <span>Progreso</span>
                        <span className="font-medium">{progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className={`${progressColor} h-2 rounded-full transition-all duration-500`}
                          style={{ width: `${progress}%` }}
                        ></div>
                      </div>
                    </div>
                    
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <div className="flex items-center text-sm text-gray-500">
                        <UserGroupIcon className="h-4 w-4 mr-1" />
                        <span>{project.id_workerList?.length || 0} trabajadores</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
