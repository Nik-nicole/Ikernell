import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Pollo from './pages/Pollo'; // Asegúrate de que esta ruta sea correcta
import Res from './pages/Res'; // Elimina la importación duplicada
import Pescado from './pages/Pescado'; // Asegúrate de que el componente Home esté importado
import Sidenav from './components/Sidenav';
import Landingpage from './components/Landingpage';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Sidenav />} />
          <Route path= "/LandingPage" element={<Landingpage />} />
          <Route path="/Pollo" element={<Pollo />} />
          <Route path="/Res" element={<Res />} />
          <Route path="/Pescado" element={<Pescado />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
