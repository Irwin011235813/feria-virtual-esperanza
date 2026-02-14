// ============================================
// HOME PAGE
// ============================================
// Página principal con catálogo y carrito

import React, { useState } from 'react';
import ProductCatalog from '../components/catalog/ProductCatalog';
import CartButton from '../components/cart/CartButton';
import CartDrawer from '../components/cart/CartDrawer';

const Home = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="text-3xl">🌾</div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">
                  Feria Virtual Esperanza
                </h1>
                <p className="text-sm text-gray-600">
                  Puerto Esperanza, Misiones
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Catálogo de productos */}
      <main>
        <ProductCatalog />
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-center text-sm text-gray-600">
            <p>🌱 Apoyando la economía circular local</p>
            <p className="mt-1">
              © 2026 Feria Virtual Esperanza • Puerto Esperanza, Misiones
            </p>
          </div>
        </div>
      </footer>

      {/* Botón flotante del carrito */}
      <CartButton onClick={() => setIsCartOpen(true)} />

      {/* Drawer del carrito */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
      />
    </div>
  );
};

export default Home;