import { 
  BrowserRouter as Router, 
  Routes, 
  Route, 
  Navigate,
  useLocation
} from "react-router-dom";

import { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./services/firebase";

import ProductCatalog from "./components/catalog/ProductCatalog";
import ColonoAdmin from "./components/colono/ColonoAdmin";
import LoginColono from "./components/auth/LoginColono";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import Header from "./components/layout/Header";
import CartButton from "./components/cart/CartButton";
import CartDrawer from "./components/cart/CartDrawer";
import { CartProvider } from "./context/CartContext";


// 🔥 Componente interno para poder usar useLocation
function AppContent({ user, loadingAuth }) {
  const location = useLocation();
  const [isCartOpen, setIsCartOpen] = useState(false);

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

  // 👇 Ocultamos Header solo en /login
  const hideHeader = location.pathname === "/login";

  return (
    <div className="min-h-screen bg-gray-50">

      {/* ✅ Header centralizado */}
      {!hideHeader && (
        <Header 
          user={user}
          onCartClick={openCart}
        />
      )}

      <Routes>

        {/* 🛍 Catálogo */}
        <Route
          path="/"
          element={<ProductCatalog />}
        />

        {/* 🔐 Login */}
        <Route
          path="/login"
          element={<LoginColono />}
        />

        {/* 🔒 Admin protegido */}
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

      {/* 🛒 Elementos globales */}
      {!hideHeader && (
        <>
          <CartButton onClick={openCart} />
          <CartDrawer 
            isOpen={isCartOpen} 
            onClose={closeCart} 
          />
        </>
      )}

    </div>
  );
}


function App() {
  const [user, setUser] = useState(null);
  const [loadingAuth, setLoadingAuth] = useState(true);

  // 🔐 Observer global de Firebase
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
      setLoadingAuth(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <CartProvider>
      <Router>
        <AppContent user={user} loadingAuth={loadingAuth} />
      </Router>
    </CartProvider>
  );
}

export default App;
