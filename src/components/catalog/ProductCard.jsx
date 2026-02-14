// ============================================
// PRODUCT CARD COMPONENT
// ============================================
// Tarjeta individual de producto optimizada para mobile
// Incluye imagen, nombre, precio y botón de agregar al carrito

import React from 'react';
import { useCartStore } from '../../store/cartStore';
import { formatPrice, getCategoriaInfo } from '../../utils/formatters';

const ProductCard = ({ producto }) => {
  const addItem = useCartStore((state) => state.addItem);
  const items = useCartStore((state) => state.items);

  // Verificar si el producto ya está en el carrito
  const itemInCart = items.find(item => item.id === producto.id);
  const cantidadEnCarrito = itemInCart?.cantidad || 0;

  // Calcular stock disponible
  const stockDisponible = producto.stock - cantidadEnCarrito;
  const sinStock = stockDisponible <= 0;

  const handleAddToCart = () => {
    if (!sinStock) {
      addItem(producto);
    }
  };

  // Obtener info de categoría
  const categoriaInfo = getCategoriaInfo(producto.categoria);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200">
      {/* Imagen del producto */}
      <div className="relative h-48 bg-gray-100">
        <img
          src={producto.imagen}
          alt={producto.nombre}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        
        {/* Badge de categoría */}
        <div className={`absolute top-2 left-2 px-2 py-1 rounded-full text-xs font-semibold bg-${categoriaInfo.color}-100 text-${categoriaInfo.color}-800`}>
          {categoriaInfo.emoji} {categoriaInfo.nombre}
        </div>

        {/* Badge de stock bajo */}
        {stockDisponible > 0 && stockDisponible <= 5 && (
          <div className="absolute top-2 right-2 px-2 py-1 rounded-full text-xs font-semibold bg-orange-100 text-orange-800">
            ¡Últimas {stockDisponible}!
          </div>
        )}

        {/* Badge sin stock */}
        {sinStock && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <span className="text-white font-bold text-lg">SIN STOCK</span>
          </div>
        )}
      </div>

      {/* Información del producto */}
      <div className="p-4">
        {/* Nombre del producto */}
        <h3 className="text-lg font-semibold text-gray-900 mb-1 line-clamp-2">
          {producto.nombre}
        </h3>

        {/* Nombre del colono */}
        <p className="text-sm text-gray-600 mb-2">
          👨‍🌾 {producto.colonoNombre}
        </p>

        {/* Precio y unidad */}
        <div className="flex items-baseline justify-between mb-3">
          <div>
            <span className="text-2xl font-bold text-green-600">
              {formatPrice(producto.precio)}
            </span>
            <span className="text-sm text-gray-600 ml-1">
              / {producto.unidad}
            </span>
          </div>
          
          {/* Stock disponible */}
          <span className="text-xs text-gray-500">
            Stock: {stockDisponible}
          </span>
        </div>

        {/* Botón de agregar al carrito */}
        <button
          onClick={handleAddToCart}
          disabled={sinStock}
          className={`w-full py-2.5 px-4 rounded-lg font-semibold transition-colors duration-200 ${
            sinStock
              ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
              : cantidadEnCarrito > 0
              ? 'bg-green-600 text-white hover:bg-green-700'
              : 'bg-blue-600 text-white hover:bg-blue-700'
          }`}
        >
          {sinStock ? (
            'Sin stock'
          ) : cantidadEnCarrito > 0 ? (
            <>
              ✓ En carrito ({cantidadEnCarrito}) • Agregar más
            </>
          ) : (
            <>
              🛒 Agregar al carrito
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;