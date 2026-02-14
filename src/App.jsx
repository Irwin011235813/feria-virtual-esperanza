import { useState } from 'react'; // ✅ Importamos useState para manejar el abrir/cerrar
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ProductCatalog from './components/catalog/ProductCatalog';
import ColonoAdmin from './components/colono/ColonoAdmin';
import LoginColono from './components/auth/LoginColono';
import ProtectedRoute from './components/auth/ProtectedRoute';
import Header from './components/layout/Header';
import CartButton from './components/cart/CartButton';
import CartDrawer from './components/cart/CartDrawer';
import { CartProvider } from './context/CartContext';

function App() {
  // ✅ CREAMOS EL ESTADO PARA EL CARRITO
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  {/* ✅ PASAMOS LA FUNCIÓN PARA ABRIR DESDE EL HEADER SI ES NECESARIO */}
                  <Header onOpenCart={() => setIsCartOpen(true)} />
                  
                  <ProductCatalog />
                  
                  {/* ✅ CONECTAMOS EL PANEL: Sabe si está abierto y cómo cerrarse */}
                  <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
                  
                  {/* ✅ CONECTAMOS EL BOTÓN: Sabe que al hacer clic debe abrir el panel */}
                  <CartButton onClick={() => setIsCartOpen(true)} />
                </>
              }
            />

            <Route path="/login" element={<LoginColono />} />

            <Route
              path="/admin"
              element={
                <ProtectedRoute>
                  <ColonoAdmin />
                </ProtectedRoute>
              }
            />

            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
