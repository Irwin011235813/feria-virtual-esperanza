import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
import ProductCatalog from './components/catalog/ProductCatalog';
import ColonoAdmin from './components/colono/ColonoAdmin';
import LoginColono from './components/auth/LoginColono';
import ProtectedRoute from './components/auth/ProtectedRoute';
import Header from './components/layout/Header';
import CartButton from './components/cart/CartButton';
import CartDrawer from './components/cart/CartDrawer';
import { CartProvider } from './context/CartContext';

/**
 * ✅ ESTRUCTURA CORRECTA:
 * CartDrawer se coloca AL FINAL del árbol de componentes
 * para que ningún elemento lo tape
 */
function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const openCart = () => {
    console.log('🔓 Abriendo carrito...');
    setIsCartOpen(true);
  };

  const closeCart = () => {
    console.log('🔒 Cerrando carrito...');
    setIsCartOpen(false);
  };

  console.log('📊 Estado del carrito:', isCartOpen ? 'ABIERTO ✅' : 'CERRADO ❌');

  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Routes>
            {/* Ruta pública: Catálogo */}
            <Route
              path="/"
              element={
                <>
                  <Header onCartClick={openCart} />
                  <ProductCatalog />
                  <CartButton onClick={openCart} />
                  
                  {/* ✅ CART DRAWER AL FINAL - IMPORTANTE */}
                  {/* Esto asegura que esté por encima de todo */}
                  <CartDrawer 
                    isOpen={isCartOpen} 
                    onClose={closeCart} 
                  />
                </>
              }
            />

            {/* Ruta pública: Login */}
            <Route path="/login" element={<LoginColono />} />

            {/* Ruta protegida: Admin */}
            <Route
              path="/admin"
              element={
                <ProtectedRoute>
                  <ColonoAdmin />
                </ProtectedRoute>
              }
            />

            {/* 404 */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;