import { Link } from 'react-router-dom';
import { 
  BriefcaseIcon, 
  UserGroupIcon, 
  ChartBarIcon,
  ArrowRightIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';

const Landing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900">Ikell</h1>
            </div>
            <div className="flex items-center space-x-8">
              <Link to="/login" className="text-gray-700 hover:text-blue-600 transition-colors">
                Iniciar Sesión
              </Link>
              <Link 
                to="/login" 
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Comenzar
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Gestión de Proyectos
            <span className="block text-blue-600">Simplificada</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Administra tus proyectos, equipos y recursos en una plataforma intuitiva y eficiente. 
            Optimiza tu flujo de trabajo con herramientas modernas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/login" 
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center"
            >
              Comenzar Ahora
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Link>
            <Link 
              to="/demo" 
              className="bg-white text-blue-600 px-8 py-3 rounded-lg border border-blue-600 hover:bg-blue-50 transition-colors"
            >
              Ver Demo
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Todo lo que necesitas para gestionar tus proyectos
            </h2>
            <p className="text-lg text-gray-600">
              Herramientas potentes diseñadas para equipos modernos
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BriefcaseIcon className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Gestión de Proyectos
              </h3>
              <p className="text-gray-600">
                Crea, organiza y sigue el progreso de todos tus proyectos en un solo lugar.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <UserGroupIcon className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Gestión de Equipos
              </h3>
              <p className="text-gray-600">
                Administra tu equipo, asigna roles y optimiza la colaboración.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <ChartBarIcon className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Análisis y Reportes
              </h3>
              <p className="text-gray-600">
                Obtén información valiosa con dashboards y reportes en tiempo real.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Por qué elegir Ikell Solutions
              </h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-green-500 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Interfaz Intuitiva</h4>
                    <p className="text-gray-600">Diseño minimalista y fácil de usar para todos los niveles.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-green-500 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Seguridad Garantizada</h4>
                    <p className="text-gray-600">Tus datos protegidos con los más altos estándares de seguridad.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-green-500 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Escalabilidad</h4>
                    <p className="text-gray-600">Crece con tu negocio, desde pequeños equipos hasta grandes empresas.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Comienza hoy mismo</h3>
              <p className="mb-6">
                Únete a miles de equipos que ya están optimizando sus proyectos con Ikell.
              </p>
              <Link 
                to="/login" 
                className="bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors inline-block"
              >
                Crear Cuenta Gratuita
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Ikell Solutions</h3>
            <p className="text-gray-400 mb-8">
              Transformando la gestión de proyectos para equipos modernos
            </p>
            <div className="flex justify-center space-x-6">
              <Link to="/login" className="text-gray-400 hover:text-white transition-colors">
                Iniciar Sesión
              </Link>
              <Link to="/register" className="text-gray-400 hover:text-white transition-colors">
                Registrarse
              </Link>
              <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">
                Contacto
              </Link>
            </div>
            <p className="text-gray-500 mt-8 text-sm">
              © 2024 Ikell Solutions. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
