// ============================================
// USE PRODUCTS HOOK
// ============================================
// Hook personalizado para obtener y filtrar productos de Firestore
// Implementa caché y manejo de estados de carga/error

import { useState, useEffect } from 'react';
import { getProductos } from '../services/firebase';

/**
 * Hook para obtener productos con filtros opcionales
 * @param {Object} filters - { categoria?: string, colonoId?: string }
 * @returns {Object} { productos, loading, error, refetch }
 */
export const useProducts = (filters = {}) => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchProductos = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const data = await getProductos(filters);
      setProductos(data);
    } catch (err) {
      console.error('Error en useProducts:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProductos();
  }, [filters.categoria, filters.colonoId]); // Re-fetch cuando cambien los filtros

  return {
    productos,
    loading,
    error,
    refetch: fetchProductos
  };
};

export default useProducts;