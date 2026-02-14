// ============================================
// PRODUCT CATALOG COMPONENT
// ============================================
// Catálogo principal con filtros y grid responsivo

import React, { useState } from 'react';
import ProductCard from './ProductCard';
import CategoryFilter from './CategoryFilter';
import { useProducts } from '../../hooks/useProducts';

const ProductCatalog = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  // Obtener productos con filtro de categoría
  const { productos, loading, error, refetch } = useProducts({
    categoria: selectedCategory
  });

  // Filtrar productos por búsqueda de texto
  const filteredProducts = productos.filter(producto =>
    producto.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
    producto.colonoNombre.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handler para cambio de categoría
  const handleCategoryChange = (categoria) => {
    setSelectedCategory(categoria);
  };

  // Handler para búsqueda
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      {/* Header del catálogo */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          🛒 Feria Virtual Esperanza
        </h1>
        <p className="text-gray-600">
          Productos frescos directo de los colonos de Puerto Esperanza
        </p>
      </div>

      {/* Barra de búsqueda */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="🔍 Buscar productos o colonos..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
        />
      </div>

      {/* Filtro de categorías */}
      <CategoryFilter
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
      />

      {/* Estados de carga y error */}
      {loading && (
        <div className="flex justify-center items-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        </div>
      )}

      {error && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
          <div className="flex items-center">
            <span className="text-red-600 mr-2">⚠️</span>
            <div>
              <h3 className="font-semibold text-red-800">Error al cargar productos</h3>
              <p className="text-sm text-red-600">{error}</p>
            </div>
          </div>
          <button
            onClick={refetch}
            className="mt-3 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
          >
            Reintentar
          </button>
        </div>
      )}

      {/* Grid de productos */}
      {!loading && !error && (
        <>
          {/* Contador de resultados */}
          <div className="mb-4 text-sm text-gray-600">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'producto' : 'productos'} 
            {searchTerm && ` encontrados para "${searchTerm}"`}
          </div>

          {/* Grid responsivo */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((producto) => (
                <ProductCard key={producto.id} producto={producto} />
              ))}
            </div>
          ) : (
            /* Estado vacío */
            <div className="text-center py-12">
              <div className="text-6xl mb-4">📦</div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                No se encontraron productos
              </h3>
              <p className="text-gray-500 mb-4">
                {searchTerm
                  ? 'Intenta con otra búsqueda'
                  : 'No hay productos disponibles en esta categoría'}
              </p>
              {(searchTerm || selectedCategory) && (
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory(null);
                  }}
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Ver todos los productos
                </button>
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default ProductCatalog;