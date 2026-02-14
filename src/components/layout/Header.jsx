// ============================================
// HEADER COMPONENT (CON CART CONTEXT)
// ============================================
// Header que muestra el contador del carrito en tiempo real

import { ShoppingCart, Store } from 'lucide-react';
import { Link } from 'react-router-dom';
// ✅ IMPORTAR EL HOOK DEL CARRITO
import { useCart } from '../../context/CartContext';

const Header = () => {
  // ✅ OBTENER DATOS DEL CART CONTEXT
  const { getTotalItems, getTotal } = useCart();

  const totalItems = getTotalItems();
  const totalPrecio = getTotal();

  return (
    <header className="bg-white shadow-md sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo y título */}
          <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
              <Store className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800">
                Feria Virtual Esperanza
              </h1>
              <p className="text-xs text-gray-500">
                Productos frescos de nuestra colonia
              </p>
            </div>
          </Link>

          {/* Contador del carrito - SE ACTUALIZA EN TIEMPO REAL ✅ */}
          <div className="flex items-center gap-4">
            {/* Info del carrito (desktop) */}
            {totalItems > 0 && (
              <div className="hidden md:block text-right">
                <p className="text-sm text-gray-600">
                  {totalItems} {totalItems === 1 ? 'producto' : 'productos'}
                </p>
                <p className="font-bold text-green-600">
                  ${(totalPrecio / 100).toFixed(2)}
                </p>
              </div>
            )}

            {/* Botón del carrito con badge */}
            <button
              className="relative p-3 bg-green-600 hover:bg-green-700 rounded-full transition-colors shadow-md hover:shadow-lg active:scale-95"
              aria-label="Carrito de compras"
            >
              <ShoppingCart className="w-6 h-6 text-white" />
              
              {/* Badge con cantidad - SE ACTUALIZA INSTANTÁNEAMENTE ✅ */}
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center animate-bounce">
                  {totalItems > 99 ? '99+' : totalItems}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;