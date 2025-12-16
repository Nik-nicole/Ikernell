import { useState, useEffect } from 'react';
import { workersAPI } from '../services/api';
import { 
  UserGroupIcon, 
  PlusIcon, 
  PencilIcon, 
  TrashIcon,
  EnvelopeIcon,
  IdentificationIcon,
  AcademicCapIcon
} from '@heroicons/react/24/outline';

const Workers = () => {
  const [workers, setWorkers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editingWorker, setEditingWorker] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    email: '',
    address: '',
    dateBorn: '',
    identification: '',
    profession: '',
    specialityDev: ''
  });

  useEffect(() => {
    fetchWorkers();
  }, []);

  const fetchWorkers = async () => {
    try {
      const response = await workersAPI.getAll();
      setWorkers(response.data.data || response.data);
    } catch (error) {
      console.error('Error fetching workers:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const workerData = {
        data: {
          name: formData.name,
          lastName: formData.lastName,
          email: formData.email,
          address: formData.address,
          dateBorn: new Date(formData.dateBorn).toISOString(),
          identification: parseInt(formData.identification),
          profession: formData.profession,
          specialityDev: formData.specialityDev
        }
      };

      await workersAPI.create(workerData);
      fetchWorkers();
      setShowModal(false);
      resetForm();
    } catch (error) {
      console.error('Error saving worker:', error);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this worker?')) {
      try {
        await workersAPI.delete(id);
        fetchWorkers();
      } catch (error) {
        console.error('Error deleting worker:', error);
      }
    }
  };

  const handleEdit = (worker) => {
    setEditingWorker(worker);
    setFormData({
      name: worker.name,
      lastName: worker.lastName,
      email: worker.email,
      address: worker.direction,
      dateBorn: new Date(worker.dateBorn).toISOString().split('T')[0],
      identification: worker.identification.toString(),
      profession: worker.profession,
      specialityDev: worker.specialtyDev
    });
    setShowModal(true);
  };

  const resetForm = () => {
    setFormData({
      name: '',
      lastName: '',
      email: '',
      address: '',
      dateBorn: '',
      identification: '',
      profession: '',
      specialityDev: ''
    });
    setEditingWorker(null);
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
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">Workers</h2>
        <button
          onClick={() => {
            resetForm();
            setShowModal(true);
          }}
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
        >
          <PlusIcon className="h-4 w-4 mr-2" />
          New Worker
        </button>
      </div>

      {/* Workers Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {workers.map((worker) => (
          <div key={worker.id} className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
                    <UserGroupIcon className="h-6 w-6 text-green-600" />
                  </div>
                </div>
                <div className="ml-4 flex-1">
                  <h3 className="text-lg font-medium text-gray-900">
                    {worker.name} {worker.lastName}
                  </h3>
                  <p className="text-sm text-gray-500">{worker.profession}</p>
                </div>
              </div>
              
              <div className="mt-4 space-y-2">
                <div className="flex items-center text-sm text-gray-500">
                  <EnvelopeIcon className="h-4 w-4 mr-2 text-gray-400" />
                  {worker.email}
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <IdentificationIcon className="h-4 w-4 mr-2 text-gray-400" />
                  ID: {worker.identification}
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <AcademicCapIcon className="h-4 w-4 mr-2 text-gray-400" />
                  {worker.specialtyDev}
                </div>
              </div>
              
              <div className="mt-4 flex justify-end space-x-2">
                <button
                  onClick={() => handleEdit(worker)}
                  className="text-blue-600 hover:text-blue-900"
                >
                  <PencilIcon className="h-5 w-5" />
                </button>
                <button
                  onClick={() => handleDelete(worker.id)}
                  className="text-red-600 hover:text-red-900"
                >
                  <TrashIcon className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" onClick={() => setShowModal(false)} />
            
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <form onSubmit={handleSubmit}>
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">
                    {editingWorker ? 'Edit Worker' : 'New Worker'}
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700">First Name</label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">Last Name</label>
                        <input
                          type="text"
                          required
                          value={formData.lastName}
                          onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Email</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Address</label>
                      <input
                        type="text"
                        required
                        value={formData.address}
                        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
                      />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700">Date of Birth</label>
                        <input
                          type="date"
                          required
                          value={formData.dateBorn}
                          onChange={(e) => setFormData({ ...formData, dateBorn: e.target.value })}
                          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">Identification</label>
                        <input
                          type="number"
                          required
                          value={formData.identification}
                          onChange={(e) => setFormData({ ...formData, identification: e.target.value })}
                          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Profession</label>
                      <input
                        type="text"
                        required
                        value={formData.profession}
                        onChange={(e) => setFormData({ ...formData, profession: e.target.value })}
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Specialty</label>
                      <input
                        type="text"
                        required
                        value={formData.specialityDev}
                        onChange={(e) => setFormData({ ...formData, specialityDev: e.target.value })}
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
                      />
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                  <button
                    type="submit"
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm"
                  >
                    {editingWorker ? 'Update' : 'Create'}
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowModal(false)}
                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Workers;
