// ============================================
// CATEGORY FILTER COMPONENT
// ============================================
// Filtros de categoría con diseño mobile-first

import React from 'react';
import { CATEGORIAS } from '../../utils/formatters';

const CategoryFilter = ({ selectedCategory, onCategoryChange }) => {
  const categories = [
    { id: 'todas', nombre: 'Todas', emoji: '🌟' },
    ...Object.values(CATEGORIAS)
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
      <h3 className="text-sm font-semibold text-gray-700 mb-3">
        Filtrar por categoría
      </h3>
      
      {/* Pills de categorías - Scroll horizontal en mobile */}
      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
        {categories.map((categoria) => (
          <button
            key={categoria.id}
            onClick={() => onCategoryChange(categoria.id === 'todas' ? null : categoria.id)}
            className={`
              flex-shrink-0 px-4 py-2 rounded-full font-medium text-sm transition-all duration-200
              ${
                (selectedCategory === categoria.id || (!selectedCategory && categoria.id === 'todas'))
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }
            `}
          >
            <span className="mr-1">{categoria.emoji}</span>
            {categoria.nombre}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;