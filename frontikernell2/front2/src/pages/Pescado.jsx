// src/pages/Projects.jsx

import Sidenav from '../components/Sidenav';
import Crud from '../components/Tables/Crud';

const Pescado = () => {
  return (
    <div className="flex h-screen bg-gray-100 min-h-screen">
    <Sidenav />
    <div className="flex-1 p-6 overflow-y-auto">
      <div className="flex flex-col mb-6">
        <h2 className="text-3xl font-bold">Bienvenido a GreenBuy!</h2>
        <p className="mt-4 text-gray-600">Vende tus productos para darle una segunda vida.</p>
      </div>
      <div className="flex-1 flex items-center justify-center">
        <Crud />
      </div>
    </div>
    </div>
    );
    };

export default Pescado;
