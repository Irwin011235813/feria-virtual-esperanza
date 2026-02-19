import { 
  BrowserRouter as Router, 
  Routes, 
  Route, 
  Navigate,
  useLocation,
  useNavigate
} from "react-router-dom";

import { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./services/firebase";

import ProductCatalog from "./components/catalog/ProductCatalog";
import ColonoAdmin from "./components/colono/ColonoAdmin";
import LoginColono from "./components/auth/LoginColono";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import Header from "./components/layout/Header";
import BottomNavBar from "./components/BottomNavBar";
import CartDrawer from "./components/cart/CartDrawer";
import { CartProvider } from "./context/CartContext";

// 🔧 IMPORT TEMPORAL - Eliminar después de usar
import ActualizarProductos from "./components/utils/ActualizarProductos";

// ✅ Banner de instalación PWA
import InstallBanner from "./components/InstallBanner";


function AppContent({ user, loadingAuth }) {
  const location = useLocation();
  const navigate = useNavigate();

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isProductModalOpen, setIsProductModalOpen] = useState(false);

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);

  const openProductModal = () => {
    if (location.pathname !== "/admin") {
      navigate("/admin?action=new");
    } else {
      setIsProductModalOpen(true);
    }
  };

  const closeProductModal = () => {
    setIsProductModalOpen(false);
    navigate("/admin", { replace: true });
  };

  if (loadingAuth) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500">Verificando sesión...</p>
      </div>
    );
  }

  const hideHeaderAndNav = location.pathname === "/login" || location.pathname === "/actualizar-productos";

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Header superior (oculto en login y actualización) */}
      {!hideHeaderAndNav && (
        <Header 
          user={user}
          onCartClick={openCart}
          onOpenProduct={openProductModal}
        />
      )}

      {/* Contenido principal */}
      <Routes>
        <Route path="/" element={<ProductCatalog />} />

        <Route path="/login" element={<LoginColono />} />

        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <ColonoAdmin 
                isModalOpen={isProductModalOpen}
                setIsModalOpen={setIsProductModalOpen}
                onCloseModal={closeProductModal}
                onOpenModal={openProductModal}
              />
            </ProtectedRoute>
          }
        />

        {/* 🔧 RUTA TEMPORAL - Eliminar después de usar */}
        <Route path="/actualizar-productos" element={<ActualizarProductos />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      {/* Bottom Navigation Bar (oculto en login y actualización) */}
      {!hideHeaderAndNav && (
        <>
          <BottomNavBar 
            onCartClick={openCart}
            onOpenProduct={openProductModal}
          />
          <CartDrawer isOpen={isCartOpen} onClose={closeCart} />
        </>
      )}

      {/* ✅ Banner PWA - solo se muestra si no está instalada y no es login */}
      {!hideHeaderAndNav && <InstallBanner />}

    </div>
  );
}

function App() {
  const [user, setUser] = useState(null);
  const [loadingAuth, setLoadingAuth] = useState(true);

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