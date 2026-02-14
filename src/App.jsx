import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ProductCatalog from './components/catalog/ProductCatalog';
import ColonoAdmin from './components/colono/ColonoAdmin';
import LoginColono from './components/auth/LoginColono';
import ProtectedRoute from './components/auth/ProtectedRoute';
import Header from './components/layout/Header';
import CartButton from './components/cart/CartButton';
import CartDrawer from './components/cart/CartDrawer';

/**
 * Componente Principal de la Aplicación
 * Configura el enrutamiento con autenticación:
 * - "/" : Catálogo público para clientes
 * - "/login" : Login/Registro de colonos
 * - "/admin" : Panel de administración (PROTEGIDO)
 */
function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Routes>
          {/* Ruta pública: Catálogo de productos para clientes */}
          <Route
            path="/"
            element={
              <>
                <Header />
                <ProductCatalog />
                <CartDrawer />
                <CartButton />
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
  );
}

export default App;