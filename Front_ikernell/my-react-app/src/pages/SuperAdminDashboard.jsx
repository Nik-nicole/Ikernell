import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { 
  BuildingOfficeIcon, 
  PlusIcon, 
  PencilIcon, 
  TrashIcon,
  UserGroupIcon,
  ChartBarIcon
} from '@heroicons/react/24/outline';

const SuperAdminDashboard = () => {
  const { user } = useAuth();
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editingCompany, setEditingCompany] = useState(null);

  useEffect(() => {
    fetchCompanies();
  }, []);

  const fetchCompanies = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/companies');
      const data = await response.json();
      setCompanies(data);
    } catch (error) {
      console.error('Error fetching companies:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    
    const companyData = {
      name: formData.get('name'),
      nit: formData.get('nit'),
      direction: formData.get('direction'),
      phone: formData.get('phone'),
      email: formData.get('email'),
      sector: formData.get('sector'),
      description: formData.get('description')
    };

    try {
      const url = editingCompany 
        ? `http://localhost:8080/api/companies/${editingCompany.id}`
        : 'http://localhost:8080/api/companies';
      
      const method = editingCompany ? 'PUT' : 'POST';
      
      const response = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(companyData)
      });

      if (response.ok) {
        await fetchCompanies();
        setShowModal(false);
        setEditingCompany(null);
      }
    } catch (error) {
      console.error('Error saving company:', error);
    }
  };

  const handleDelete = async (id) => {
    if (confirm('¿Está seguro de eliminar esta empresa?')) {
      try {
        const response = await fetch(`http://localhost:8080/api/companies/${id}`, {
          method: 'DELETE'
        });
        
        if (response.ok) {
          await fetchCompanies();
        }
      } catch (error) {
        console.error('Error deleting company:', error);
      }
    }
  };

  const openEditModal = (company) => {
    setEditingCompany(company);
    setShowModal(true);
  };

  const openCreateModal = () => {
    setEditingCompany(null);
    setShowModal(true);
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
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-6 text-white">
        <h1 className="text-3xl font-bold mb-2">Panel de Super Administrador</h1>
        <p className="text-purple-100">Gestiona todas las empresas del sistema</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow p-6 border-l-4 border-purple-500">
          <div className="flex items-center">
            <BuildingOfficeIcon className="h-8 w-8 text-purple-500" />
            <div className="ml-4">
              <h3 className="text-lg font-semibold text-gray-900">Total Empresas</h3>
              <p className="text-2xl font-bold text-purple-600">{companies.length}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6 border-l-4 border-blue-500">
          <div className="flex items-center">
            <UserGroupIcon className="h-8 w-8 text-blue-500" />
            <div className="ml-4">
              <h3 className="text-lg font-semibold text-gray-900">Usuarios Activos</h3>
              <p className="text-2xl font-bold text-blue-600">--</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6 border-l-4 border-green-500">
          <div className="flex items-center">
            <ChartBarIcon className="h-8 w-8 text-green-500" />
            <div className="ml-4">
              <h3 className="text-lg font-semibold text-gray-900">Proyectos Totales</h3>
              <p className="text-2xl font-bold text-green-600">--</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow">
        <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
          <h2 className="text-xl font-semibold text-gray-900">Empresas</h2>
          <button
            onClick={openCreateModal}
            className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 flex items-center gap-2"
          >
            <PlusIcon className="h-5 w-5" />
            Nueva Empresa
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Empresa
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  NIT
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Sector
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Email
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Estado
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Acciones
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {companies.map((company) => (
                <tr key={company.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <div className="text-sm font-medium text-gray-900">{company.name}</div>
                      <div className="text-sm text-gray-500">{company.direction}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {company.nit}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {company.sector}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {company.email}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      company.active ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    }`}>
                      {company.active ? 'Activa' : 'Inactiva'}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button
                      onClick={() => openEditModal(company)}
                      className="text-blue-600 hover:text-blue-900 mr-3"
                    >
                      <PencilIcon className="h-5 w-5" />
                    </button>
                    <button
                      onClick={() => handleDelete(company.id)}
                      className="text-red-600 hover:text-red-900"
                    >
                      <TrashIcon className="h-5 w-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
          <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-lg bg-white">
            <h3 className="text-lg font-bold text-gray-900 mb-4">
              {editingCompany ? 'Editar Empresa' : 'Nueva Empresa'}
            </h3>
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Nombre</label>
                  <input
                    type="text"
                    name="name"
                    defaultValue={editingCompany?.name || ''}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 p-2 border"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">NIT</label>
                  <input
                    type="text"
                    name="nit"
                    defaultValue={editingCompany?.nit || ''}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 p-2 border"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Dirección</label>
                  <input
                    type="text"
                    name="direction"
                    defaultValue={editingCompany?.direction || ''}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 p-2 border"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Teléfono</label>
                  <input
                    type="text"
                    name="phone"
                    defaultValue={editingCompany?.phone || ''}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 p-2 border"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    name="email"
                    defaultValue={editingCompany?.email || ''}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 p-2 border"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Sector</label>
                  <input
                    type="text"
                    name="sector"
                    defaultValue={editingCompany?.sector || ''}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 p-2 border"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Descripción</label>
                  <textarea
                    name="description"
                    defaultValue={editingCompany?.description || ''}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 p-2 border"
                    rows="3"
                  />
                </div>
              </div>
              <div className="mt-6 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700"
                >
                  {editingCompany ? 'Actualizar' : 'Crear'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default SuperAdminDashboard;
