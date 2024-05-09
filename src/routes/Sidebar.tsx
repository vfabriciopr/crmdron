import React from 'react';
import { Link } from 'react-router-dom';

export const Sidebar: React.FC = () => {
  return (
    <>
      <button
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        aria-controls="default-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        ></svg>
      </button>
      <aside className={'bg-gray-600 sm:w-1/4 sm:min-h-screen'}>
        <h2>Menú</h2>
        <nav>
          <li>
            <Link to="/">Página Principal</Link>
          </li>
          <li>
            <Link to="/products">Productos</Link>
          </li>
          <li>
            <Link to="/cart">Carrito</Link>
          </li>
          <li>
            <Link to="/login">Iniciar Sesión</Link>
          </li>
          <li>
            <Link to="/signup">Registrarse</Link>
          </li>
          <li>
            <Link to="/topsellers">Mejores Vendedores</Link>
          </li>
          <li>
            <Link to="/topbuyers">Mejores Clientes por Vendedor</Link>
          </li>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
