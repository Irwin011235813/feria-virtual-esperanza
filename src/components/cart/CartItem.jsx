// ============================================
// CART ITEM COMPONENT
// ============================================
// Item individual del carrito con controles de cantidad

import React from 'react';
import { useCartStore } from '../../store/cartStore';
import { formatPrice } from '../../utils/formatters';

const CartItem = ({ item }) => {
  const { incrementItem, decrementItem, removeItem } = useCartStore();

  const subtotal = item.precio * item.cantidad;

  return (
    <div className="flex items-center gap-4 py-4 border-b border-gray-200">
      {/* Imagen del producto */}
      <div className="flex-shrink-0 w-20 h-20 bg-gray-100 rounded-lg overflow-hidden">
        <img
          src={item.imagen}
          alt={item.nombre}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Información del producto */}
      <div className="flex-1 min-w-0">
        <h4 className="font-semibold text-gray-900 truncate">
          {item.nombre}
        </h4>
        <p className="text-sm text-gray-600">
          👨‍🌾 {item.colonoNombre}
        </p>
        <p className="text-sm text-gray-500">
          {formatPrice(item.precio)} / {item.unidad}
        </p>
      </div>

      {/* Controles de cantidad */}
      <div className="flex flex-col items-end gap-2">
        {/* Subtotal */}
        <div className="font-semibold text-gray-900">
          {formatPrice(subtotal)}
        </div>

        {/* Controles */}
        <div className="flex items-center gap-2">
          {/* Botón decrementar */}
          <button
            onClick={() => decrementItem(item.id)}
            className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold transition-colors"
            aria-label="Disminuir cantidad"
          >
            −
          </button>

          {/* Cantidad actual */}
          <span className="w-8 text-center font-semibold text-gray-900">
            {item.cantidad}
          </span>

          {/* Botón incrementar */}
          <button
            onClick={() => incrementItem(item.id)}
            disabled={item.cantidad >= item.stock}
            className={`w-8 h-8 flex items-center justify-center rounded-full font-semibold transition-colors ${
              item.cantidad >= item.stock
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                : 'bg-blue-600 hover:bg-blue-700 text-white'
            }`}
            aria-label="Aumentar cantidad"
          >
            +
          </button>

          {/* Botón eliminar */}
          <button
            onClick={() => removeItem(item.id)}
            className="ml-2 w-8 h-8 flex items-center justify-center rounded-full bg-red-100 hover:bg-red-200 text-red-600 transition-colors"
            aria-label="Eliminar del carrito"
          >
            🗑️
          </button>
        </div>

        {/* Warning de stock */}
        {item.cantidad >= item.stock && (
          <span className="text-xs text-orange-600">
            ⚠️ Stock máximo
          </span>
        )}
      </div>
    </div>
  );
};

export default CartItem;