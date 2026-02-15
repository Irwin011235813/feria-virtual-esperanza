import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './services/firebase'; // ✅ CORREGIDO

import ProductCatalog from './components/catalog/ProductCatalog';
import ColonoAdmin from './components/colono/ColonoAdmin';
import LoginColono from './components/auth/LoginColono';
import ProtectedRoute from './components/auth/ProtectedRoute';
import Header from './components/layout/Header';
import CartButton from './components/cart/CartButton';
import CartDrawer from './components/cart/CartDrawer';
import { CartProvider } from './context/CartContext';

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [loadingAuth, setLoadingAuth] = useState(true);

  // 🔐 Listener global de Firebase
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
      setLoadingAuth(false);
    });

    return () => unsubscribe();
  }, []);

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);

  // ⏳ Mientras Firebase verifica sesión
  if (loadingAuth) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500">Verificando sesión...</p>
      </div>
    );
  }

  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Routes>

            {/* 🧠 Ruta inteligente principal */}
            <Route
              path="/"
              element={
                !user ? (
                  <LoginColono />
                ) : (
                  <>
                    <Header onCartClick={openCart} />
                    <ProductCatalog />
                    <CartButton onClick={openCart} />
                    <CartDrawer 
                      isOpen={isCartOpen} 
                      onClose={closeCart} 
                    />
                  </>
                )
              }
            />

            {/* 🔒 Admin sigue protegido */}
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
