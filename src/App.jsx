import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
import ProductCatalog from './components/catalog/ProductCatalog';
import ColonoAdmin from './components/colono/ColonoAdmin';
import LoginColono from './components/auth/LoginColono';
import ProtectedRoute from './components/auth/ProtectedRoute';
import Header from './components/layout/Header';
import CartButton from './components/cart/CartButton';
import CartDrawer from './components/cart/CartDrawer';

// ✅ IMPORTAR EL CART PROVIDER
import { CartProvider } from './context/CartContext';

/**
 * Componente Principal de la Aplicación
 * ✅ Estado centralizado del carrito (isCartOpen)
 * ✅ Props pasadas correctamente a todos los componentes
 */
function App() {
  // ✅ ESTADO PARA ABRIR/CERRAR EL CART DRAWER
  const [isCartOpen, setIsCartOpen] = useState(false);

  // ✅ FUNCIÓN PARA ABRIR EL CARRITO
  const openCart = () => {
    console.log('🔓 Abriendo carrito...');
    setIsCartOpen(true);
  };

  // ✅ FUNCIÓN PARA CERRAR EL CARRITO
  const closeCart = () => {
    console.log('🔒 Cerrando carrito...');
    setIsCartOpen(false);
  };

  // ✅ CONSOLE LOG PARA VER CAMBIOS DE ESTADO (debugging)
  console.log('📊 Estado del carrito:', isCartOpen ? 'ABIERTO ✅' : 'CERRADO ❌');

  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Routes>
            {/* Ruta pública: Catálogo de productos para clientes */}
            <Route
              path="/"
              element={
                <>
                  {/* ✅ Header recibe openCart para abrir el drawer */}
                  <Header onCartClick={openCart} />
                  
                  <ProductCatalog />
                  
                  {/* ✅ CartDrawer recibe isOpen y onClose */}
                  <CartDrawer 
                    isOpen={isCartOpen} 
                    onClose={closeCart} 
                  />
                  
                  {/* ✅ CartButton recibe onClick para abrir el drawer */}
                  <CartButton onClick={openCart} />
                </>
              }
            />

            {/* Ruta pública: Login/Registro de colonos */}
            <Route path="/login" element={<LoginColono />} />

            {/* Ruta protegida: Panel de administración para colonos */}
            <Route
              path="/admin"
              element={
                <ProtectedRoute>
                  <ColonoAdmin />
                </ProtectedRoute>
              }
            />

            {/* Ruta 404: Redirigir al inicio */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;