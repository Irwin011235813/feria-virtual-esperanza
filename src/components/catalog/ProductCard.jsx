// ============================================
// PRODUCT CARD COMPONENT (CON CART CONTEXT)
// ============================================
// Tarjeta de producto que usa el CartContext para agregar items

import { ShoppingCart, Plus, Minus, Check } from 'lucide-react';
// ✅ IMPORTAR EL HOOK DEL CARRITO
import { useCart } from '../../context/CartContext';

const ProductCard = ({ producto }) => {
  // ✅ OBTENER FUNCIONES DEL CART CONTEXT
  const { addToCart, isInCart, getItemQuantity } = useCart();

  // Verificar si el producto está en el carrito
  const inCart = isInCart(producto.id);
  const cantidadEnCarrito = getItemQuantity(producto.id);

  /**
   * Maneja el clic en "Agregar al carrito"
   */
  const handleAddToCart = () => {
    // Verificar stock disponible
    if (producto.stock === 0) {
      return;
    }

    // ✅ USAR LA FUNCIÓN addToCart DEL CONTEXTO
    addToCart(producto, 1);
  };

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
      {/* Imagen del producto */}
      <div className="relative aspect-square overflow-hidden bg-gray-100">
        {producto.imagen ? (
          <img
            src={producto.imagen}
            alt={producto.nombre}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <ShoppingCart className="w-16 h-16 text-gray-300" />
          </div>
        )}

        {/* Badge de stock */}
        {producto.stock === 0 && (
          <div className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold">
            Agotado
          </div>
        )}
        {producto.stock > 0 && producto.stock < 5 && (
          <div className="absolute top-2 right-2 bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold">
            Últimas {producto.stock}
          </div>
        )}

        {/* Badge si está en el carrito */}
        {inCart && (
          <div className="absolute top-2 left-2 bg-green-600 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
            <Check className="w-3 h-3" />
            {cantidadEnCarrito} en carrito
          </div>
        )}
      </div>

      {/* Información del producto */}
      <div className="p-4">
        {/* Nombre del producto */}
        <h3 className="font-bold text-lg text-gray-800 mb-1 line-clamp-2 min-h-[3.5rem]">
          {producto.nombre}
        </h3>

        {/* Info del colono */}
        <p className="text-sm text-gray-500 mb-2">
          🌱 {producto.colonoNombre}
        </p>

        {/* Precio y stock */}
        <div className="flex items-center justify-between mb-3">
          <div>
            <p className="text-2xl font-bold text-green-600">
              ${(producto.precio / 100).toFixed(2)}
            </p>
            <p className="text-xs text-gray-500">
              por {producto.unidad || 'unidad'}
            </p>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-600">
              Stock: <span className="font-semibold">{producto.stock}</span>
            </p>
          </div>
        </div>

        {/* Botón de agregar al carrito */}
        <button
          onClick={handleAddToCart}
          disabled={producto.stock === 0}
          className={`w-full py-3 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center gap-2 ${
            producto.stock === 0
              ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
              : inCart
              ? 'bg-green-100 text-green-700 hover:bg-green-200 border-2 border-green-600'
              : 'bg-green-600 text-white hover:bg-green-700 active:scale-95 shadow-md hover:shadow-lg'
          }`}
        >
          {producto.stock === 0 ? (
            <>
              <Minus className="w-5 h-5" />
              Sin stock
            </>
          ) : inCart ? (
            <>
              <Plus className="w-5 h-5" />
              Agregar más
            </>
          ) : (
            <>
              <ShoppingCart className="w-5 h-5" />
              Agregar al carrito
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;