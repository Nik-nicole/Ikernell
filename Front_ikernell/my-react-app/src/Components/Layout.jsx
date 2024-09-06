import React from "react";
import Siderbar from "./Siderbar"
import Header from "./Header";
import { Outlet } from "react-router-dom"; // Correcto

const Layout = () => {
  return (
    <div className="flex">
      {/* Sidebar en la izquierda */}
      <Siderbar />

      {/* Contenedor principal para Header y el contenido */}
      <div className="flex-1 ml-16 md:ml-56">
        <Header />
        <main className="p-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
