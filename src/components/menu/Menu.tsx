import React from "react";
import styles from "./Menu.module.css";
import { Link } from "wouter";

const Menu: React.FC = () => {
  return (
    <header
      className={`sticky top-0 z-50 px-6 py-4 flex items-center justify-between ${styles.navbarGlass}`}
    >
      {/* Logo o Título */}
      <h1 className="text-xl font-bold tracking-tight text-sky-400 hover:opacity-90 transition-opacity">
        <Link href="/">Trabajo 2</Link>
      </h1>

      {/* Navegación */}
      <nav>
        <ul className="flex items-center gap-2 sm:gap-6">
          <li>
            <Link
              href="/"
              className="px-3 py-2 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/60 transition-all"
            >
              Inicio
            </Link>
          </li>
          <li>
            <Link
              href="/products"
              className="px-3 py-2 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/60 transition-all"
            >
              Productos
            </Link>
          </li>
          <li>
            <a
              href="/contact"
              className="px-3 py-2 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/60 transition-all"
            >
              Contacto
            </a>
          </li>
          <li>
            <Link
              href="/login"
              className="ml-2 px-4 py-2 rounded-xl text-sm font-medium bg-sky-500 text-white hover:bg-sky-600 shadow-lg shadow-sky-500/20 transition-all active:scale-95"
            >
              Iniciar sesión
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Menu;
