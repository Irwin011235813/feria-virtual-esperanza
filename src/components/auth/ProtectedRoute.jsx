// ============================================
// PROTECTED ROUTE COMPONENT
// ============================================
// Componente para proteger rutas que requieren autenticación

import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { onAuthChange } from '../../services/auth';
import { Loader } from 'lucide-react';

/**
 * Componente que protege rutas verificando autenticación
 * Si el usuario no está autenticado, redirige al login
 */
const ProtectedRoute = ({ children }) => {
  const [authState, setAuthState] = useState({
    loading: true,
    user: null,
    colonoData: null
  });

  useEffect(() => {
    // Suscribirse a cambios de autenticación
    const unsubscribe = onAuthChange(({ user, colonoData }) => {
      setAuthState({
        loading: false,
        user,
        colonoData
      });
    });

    // Limpiar suscripción al desmontar
    return () => unsubscribe();
  }, []);

  // Mostrar loading mientras verifica autenticación
  if (authState.loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center">
        <div className="text-center">
          <Loader className="w-12 h-12 text-green-600 animate-spin mx-auto mb-4" />
          <p className="text-gray-600 font-medium">Verificando sesión...</p>
        </div>
      </div>
    );
  }

  // Si no hay usuario autenticado, redirigir al login
  if (!authState.user) {
    return <Navigate to="/login" replace />;
  }

  // Si hay usuario autenticado, mostrar el contenido protegido
  return children;
};

export default ProtectedRoute;