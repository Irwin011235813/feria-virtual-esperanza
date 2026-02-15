// ============================================
// HEADER COMPONENT (UPDATED)
// ============================================

import { ShoppingCart, Store, LogOut } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { useEffect, useState } from 'react';
import { signOut, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../services/firebase';

const Header = ({ onCartClick }) => {
  const { getTotalItems, getTotal } = useCart();
  const totalItems = getTotalItems();
  const totalPrecio = getTotal();

  const [user, setUser] = useState(null);

  // 🔐 Escuchar usuario autenticado
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
    });

    return () => unsubscribe();
  }, []);

  // 👋 Obtener nombre o email
  const displayName =
    user?.displayName ||
    user?.email?.split('@')[0] ||
    'Colono';

  // 🚪 Logout
  const handleLogout = async () => {
    try {
      await signOut(auth);
      console.log('✅ Sesión cerrada');
    } catch (error) {
      console.error('❌ Error al cerrar sesión:', error);
    }
  };

  const handleCartClick = () => {
    if (onCartClick) {
      onCartClick();
    }
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">

          {/* Logo */}
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

          {/* Derecha: Usuario + Carrito */}
          <div className="flex items-center gap-6">

            {/* 👋 Bienvenida */}
            {user && (
              <div className="hidden md:block text-right">
                <p className="text-sm text-gray-500">
                  Hola,
                </p>
                <p className="font-semibold text-gray-800">
                  {displayName}
                </p>
              </div>
            )}

            {/* 🚪 Logout */}
            {user && (
              <button
                onClick={handleLogout}
                className="p-2 text-gray-500 hover:text-red-600 transition-colors"
                title="Cerrar sesión"
              >
                <LogOut className="w-5 h-5" />
              </button>
            )}

            {/* Info carrito desktop */}
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

            {/* 🛒 Botón carrito */}
            <button
              onClick={handleCartClick}
              className="relative p-3 bg-green-600 hover:bg-green-700 rounded-full transition-colors shadow-md hover:shadow-lg active:scale-95"
              aria-label="Carrito de compras"
            >
              <ShoppingCart className="w-6 h-6 text-white" />

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
