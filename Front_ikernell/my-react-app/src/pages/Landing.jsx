import { Button } from "../components/ui/Button"
import { Card, CardContent } from "../components/ui/Card"
import {
  Kanban,
  Bug,
  CheckSquare,
  LayoutDashboard,
  Users,
  Sparkles,
  ArrowRight,
  Building2,
  FolderKanban,
  CalendarRange,
  Palette,
  ListChecks,
  Shield,
} from "lucide-react"
import { Link } from "react-router-dom"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-gray-100">
      {/* Navigation */}
      <nav className="border-b border-gray-200/50 backdrop-blur-sm fixed top-0 w-full z-50 bg-white/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-blue-600 to-blue-500 flex items-center justify-center shadow-lg shadow-blue-500/30">
                <FolderKanban className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">ProjectHub</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <Link
                href="#features"
                className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium"
              >
                Características
              </Link>
              <Link href="#views" className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium">
                Vistas
              </Link>
              <Link href="#pricing" className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium">
                Precios
              </Link>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="ghost" className="text-gray-600 hover:text-gray-900 hover:bg-gray-100 text-sm">
                Iniciar sesión
              </Button>
              <Button className="bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-600/30 text-sm">
                Comenzar gratis
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl" />
        <div className="absolute top-40 right-1/4 w-80 h-80 bg-purple-400/10 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto relative">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 shadow-sm mb-6 text-sm">
              <Sparkles className="h-4 w-4 text-blue-600" />
              <span className="text-gray-700 font-medium">
                Nueva versión: Vista Timeline y Dashboard personalizable
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">
              <span className="text-gray-900">La plataforma completa para </span>
              <span className="text-blue-600">gestionar proyectos</span>
            </h1>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto text-balance leading-relaxed">
              Organiza tus proyectos, rastrea bugs, administra tareas y colabora con tu equipo. Todo en un solo lugar
              con vistas Kanban, Timeline y dashboards personalizables.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-blue-600 text-white hover:bg-blue-700 h-12 px-8 shadow-lg shadow-blue-600/30"
              >
                Obtener una demo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-gray-300 text-gray-700 hover:bg-gray-50 h-12 px-8 bg-white"
              >
                Explorar la plataforma
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-20">
            {[
              {
                label: "98% más rápido",
                sublabel: "tiempo de respuesta",
                icon: "⚡",
                color: "from-yellow-400 to-orange-400",
              },
              {
                label: "500+ equipos",
                sublabel: "confían en nosotros",
                icon: "🚀",
                color: "from-blue-400 to-purple-400",
              },
              { label: "15k+ proyectos", sublabel: "administrados", icon: "📊", color: "from-green-400 to-teal-400" },
              { label: "99.9% uptime", sublabel: "disponibilidad", icon: "✓", color: "from-purple-400 to-pink-400" },
            ].map((stat, idx) => (
              <Card key={idx} className="bg-white border-gray-200 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div
                    className={`h-10 w-10 rounded-lg bg-gradient-to-br ${stat.color} flex items-center justify-center mb-3 text-white font-bold shadow-lg`}
                  >
                    {stat.icon}
                  </div>
                  <div className="font-bold text-xl mb-1 text-gray-900">{stat.label}</div>
                  <div className="text-sm text-gray-500">{stat.sublabel}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Gestión de proyectos más rápida. <span className="text-gray-400">Más innovación.</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              La plataforma para el progreso rápido. Deja que tu equipo se enfoque en entregar funcionalidades en lugar
              de administrar infraestructura.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-white border-gray-200 overflow-hidden group hover:shadow-2xl transition-all duration-300 hover:border-blue-300">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 shadow-lg shadow-blue-500/30">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Colaboración</h3>
                </div>
                <h4 className="text-3xl font-bold mb-4 text-gray-800">Trabajo en equipo sin fricciones</h4>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Herramientas para tu equipo y stakeholders para compartir feedback e iterar más rápido. Pertenece a
                  múltiples empresas y proyectos simultáneamente.
                </p>
                <div className="bg-gradient-to-br from-gray-50 to-blue-50/30 rounded-xl p-5 border border-gray-200 shadow-sm">
                  <div className="flex items-center gap-2 mb-4">
                    <Building2 className="h-4 w-4 text-gray-500" />
                    <span className="text-sm text-gray-500 font-medium">Tu organización</span>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-white border border-gray-200 hover:border-blue-300 transition-colors">
                      <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 shadow-lg shadow-blue-500/20" />
                      <span className="text-sm font-medium text-gray-700">Tech Solutions Inc.</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-white border border-gray-200 hover:border-blue-300 transition-colors">
                      <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-green-500 to-teal-500 shadow-lg shadow-green-500/20" />
                      <span className="text-sm font-medium text-gray-700">Design Studio</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-gray-200 overflow-hidden group hover:shadow-2xl transition-all duration-300 hover:border-blue-300">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-red-500 to-pink-600 shadow-lg shadow-red-500/30">
                    <Bug className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Bugs & Tareas</h3>
                </div>
                <h4 className="text-3xl font-bold mb-4 text-gray-800">Seguimiento inteligente</h4>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Para proyectos de tecnología: rastrea BUGS con detalle. Para otros proyectos: administra TAREAS
                  eficientemente. Todo adaptado a tus necesidades.
                </p>
                <div className="space-y-3">
                  <div className="bg-white rounded-xl p-4 border border-gray-200 flex items-center gap-3 shadow-sm hover:shadow-md transition-shadow">
                    <div className="h-10 w-10 rounded-lg bg-red-50 flex items-center justify-center">
                      <Bug className="h-5 w-5 text-red-500" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-semibold text-gray-900">Login no funciona en Safari</div>
                      <div className="text-xs text-gray-500">Proyecto Tech • Alta prioridad</div>
                    </div>
                  </div>
                  <div className="bg-white rounded-xl p-4 border border-gray-200 flex items-center gap-3 shadow-sm hover:shadow-md transition-shadow">
                    <div className="h-10 w-10 rounded-lg bg-green-50 flex items-center justify-center">
                      <CheckSquare className="h-5 w-5 text-green-500" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-semibold text-gray-900">Revisar propuesta de diseño</div>
                      <div className="text-xs text-gray-500">Proyecto Marketing • Media</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="views" className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Visualiza tu trabajo <span className="text-gray-400">de cualquier forma</span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Múltiples vistas para adaptarse a tu flujo de trabajo
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-white border-gray-200 hover:shadow-2xl transition-all duration-300 hover:border-blue-300 group">
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mb-4 shadow-lg shadow-blue-500/30 group-hover:shadow-xl group-hover:shadow-blue-500/40 transition-shadow">
                    <Kanban className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">Vista Kanban</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Visualiza tu flujo de trabajo con tableros Kanban personalizables. Arrastra y suelta tareas entre
                    columnas.
                  </p>
                </div>
                <div className="grid grid-cols-3 gap-3 mt-6">
                  <div className="h-20 rounded-lg bg-gradient-to-br from-gray-100 to-gray-50 border border-gray-200 shadow-sm"></div>
                  <div className="h-20 rounded-lg bg-gradient-to-br from-blue-50 to-blue-100/50 border border-blue-200 shadow-sm"></div>
                  <div className="h-20 rounded-lg bg-gradient-to-br from-gray-100 to-gray-50 border border-gray-200 shadow-sm"></div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-gray-200 hover:shadow-2xl transition-all duration-300 hover:border-purple-300 group">
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center mb-4 shadow-lg shadow-purple-500/30 group-hover:shadow-xl group-hover:shadow-purple-500/40 transition-shadow">
                    <CalendarRange className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">Vista Timeline</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Planifica a largo plazo con líneas de tiempo interactivas. Visualiza dependencias y fechas límite.
                  </p>
                </div>
                <div className="space-y-3 mt-6">
                  <div className="h-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 w-3/4 shadow-md"></div>
                  <div className="h-4 rounded-full bg-gradient-to-r from-green-500 to-teal-500 w-1/2 ml-6 shadow-md"></div>
                  <div className="h-4 rounded-full bg-gradient-to-r from-orange-500 to-red-500 w-5/6 shadow-md"></div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-gray-200 hover:shadow-2xl transition-all duration-300 hover:border-green-300 group">
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center mb-4 shadow-lg shadow-green-500/30 group-hover:shadow-xl group-hover:shadow-green-500/40 transition-shadow">
                    <LayoutDashboard className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">Dashboard Personalizable</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Diseña tu panel de control perfecto. Widgets, gráficos y métricas configurables a tu gusto.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-3 mt-6">
                  <div className="h-16 rounded-lg bg-gradient-to-br from-blue-50 to-purple-50 border border-gray-200 shadow-sm"></div>
                  <div className="h-16 rounded-lg bg-gradient-to-br from-green-50 to-teal-50 border border-gray-200 shadow-sm"></div>
                  <div className="col-span-2 h-12 rounded-lg bg-gradient-to-br from-orange-50 to-red-50 border border-gray-200 shadow-sm"></div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 shadow-sm mb-4 text-sm">
                <Shield className="h-4 w-4 text-blue-600" />
                <span className="text-gray-700 font-medium">Para Project Managers</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Control total de tus proyectos</h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Crea, administra y supervisa proyectos ilimitados. Asigna roles, define estados personalizados y mantén
                todo bajo control.
              </p>
              <div className="space-y-4">
                {[
                  {
                    icon: FolderKanban,
                    text: "Crea y administra proyectos ilimitados",
                    color: "from-blue-500 to-blue-600",
                  },
                  { icon: Users, text: "Asigna miembros y define permisos", color: "from-purple-500 to-purple-600" },
                  {
                    icon: ListChecks,
                    text: "Estados y flujos de trabajo personalizados",
                    color: "from-green-500 to-green-600",
                  },
                  {
                    icon: Palette,
                    text: "Personaliza completamente tu espacio de trabajo",
                    color: "from-orange-500 to-red-600",
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-4 p-4 rounded-xl bg-white border border-gray-200 hover:shadow-md transition-shadow"
                  >
                    <div
                      className={`h-12 w-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center flex-shrink-0 shadow-lg`}
                    >
                      <item.icon className="h-6 w-6 text-white" />
                    </div>
                    <span className="text-gray-700 font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <Card className="bg-white border-gray-200 overflow-hidden shadow-2xl">
              <CardContent className="p-8">
                <div className="space-y-4">
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-sm text-gray-500 font-medium">Tus proyectos activos</span>
                    <Button size="sm" className="h-9 text-xs bg-blue-600 hover:bg-blue-700 text-white shadow-md">
                      + Nuevo proyecto
                    </Button>
                  </div>
                  {[
                    { name: "App Mobile", members: 8, tasks: 24, color: "from-blue-500 to-purple-500" },
                    { name: "Website Redesign", members: 5, tasks: 16, color: "from-green-500 to-teal-500" },
                    { name: "Marketing Campaign", members: 12, tasks: 31, color: "from-orange-500 to-red-500" },
                  ].map((project, idx) => (
                    <div
                      key={idx}
                      className="p-5 rounded-xl bg-gradient-to-br from-gray-50 to-blue-50/30 border border-gray-200 hover:shadow-lg transition-all hover:border-blue-300"
                    >
                      <div className="flex items-center gap-4 mb-4">
                        <div className={`h-12 w-12 rounded-xl bg-gradient-to-br ${project.color} shadow-lg`} />
                        <div className="flex-1">
                          <div className="font-semibold text-gray-900">{project.name}</div>
                          <div className="text-xs text-gray-500">{project.members} miembros</div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600 font-medium">{project.tasks} tareas</span>
                        <div className="flex -space-x-2">
                          {[...Array(3)].map((_, i) => (
                            <div
                              key={i}
                              className="h-8 w-8 rounded-full bg-gradient-to-br from-gray-300 to-gray-400 border-2 border-white shadow-sm"
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto text-center relative">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Estados personalizados para <span className="text-gray-400">tu flujo de trabajo</span>
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Define estados que se ajusten a tu proceso. Todo es configurable.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { label: "Por hacer", color: "bg-gray-100 text-gray-700 border-gray-300" },
              { label: "En progreso", color: "bg-blue-100 text-blue-700 border-blue-300" },
              { label: "En revisión", color: "bg-yellow-100 text-yellow-700 border-yellow-300" },
              { label: "Bloqueado", color: "bg-red-100 text-red-700 border-red-300" },
              { label: "Testing", color: "bg-purple-100 text-purple-700 border-purple-300" },
              { label: "Completado", color: "bg-green-100 text-green-700 border-green-300" },
            ].map((status, idx) => (
              <div
                key={idx}
                className={`px-5 py-3 rounded-full ${status.color} font-semibold border shadow-sm hover:shadow-md transition-shadow`}
              >
                {status.label}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 to-blue-700 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full blur-3xl" />

        <div className="max-w-4xl mx-auto text-center relative">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Comienza a organizar tus proyectos hoy</h2>
          <p className="text-xl text-blue-100 mb-10 leading-relaxed">
            Únete a cientos de equipos que ya están trabajando más eficientemente con ProjectHub. Sin tarjeta de crédito
            requerida.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-50 h-12 px-8 shadow-xl font-semibold">
              Comenzar gratis
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 h-12 px-8 bg-transparent backdrop-blur font-semibold"
            >
              Hablar con ventas
            </Button>
          </div>
          <p className="text-sm text-blue-200 mt-6">14 días de prueba gratis • No se requiere tarjeta de crédito</p>
        </div>
      </section>

      <footer className="border-t border-gray-200 py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-600 to-blue-500 flex items-center justify-center shadow-lg shadow-blue-500/30">
                  <FolderKanban className="h-4 w-4 text-white" />
                </div>
                <span className="font-bold text-lg text-gray-900">ProjectHub</span>
              </div>
              <p className="text-sm text-gray-600">La plataforma completa para gestión de proyectos modernos.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-gray-900">Producto</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <Link href="#" className="hover:text-blue-600 transition-colors">
                    Características
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-blue-600 transition-colors">
                    Precios
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-blue-600 transition-colors">
                    Integraciones
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-gray-900">Empresa</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <Link href="#" className="hover:text-blue-600 transition-colors">
                    Acerca de
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-blue-600 transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-blue-600 transition-colors">
                    Carreras
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-gray-900">Soporte</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <Link href="#" className="hover:text-blue-600 transition-colors">
                    Documentación
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-blue-600 transition-colors">
                    Contacto
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-blue-600 transition-colors">
                    Estado del servicio
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500">© 2025 ProjectHub. Todos los derechos reservados.</p>
            <div className="flex gap-6 text-sm text-gray-500">
              <Link href="#" className="hover:text-blue-600 transition-colors">
                Privacidad
              </Link>
              <Link href="#" className="hover:text-blue-600 transition-colors">
                Términos
              </Link>
              <Link href="#" className="hover:text-blue-600 transition-colors">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
