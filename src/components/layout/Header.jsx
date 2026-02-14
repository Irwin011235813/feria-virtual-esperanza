import React from 'react';

const Header = () => {
  return (
    <header className="bg-green-600 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo / Nombre */}
          <div className="flex-shrink-0 flex items-center">
            <a href="/" className="text-xl font-bold flex items-center gap-2">
              🛒 <span className="hidden sm:inline">Feria Virtual Esperanza</span>
              <span className="sm:hidden">Feria Esperanza</span>
            </a>
          </div>

          {/* Menú de navegación */}
          <nav className="flex items-center gap-4">
            <a 
              href="/" 
              className="px-3 py-2 rounded-md text-sm font-medium hover:bg-green-700 transition-colors"
            >
              Comprar
            </a>
            <a 
              href="/admin" 
              className="px-3 py-2 rounded-md text-sm font-medium bg-white text-green-700 hover:bg-green-50 transition-colors"
            >
              Soy Productor
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;


