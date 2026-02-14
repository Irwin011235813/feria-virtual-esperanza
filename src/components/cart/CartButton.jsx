// ============================================
// CART BUTTON COMPONENT (FIXED)
// ============================================
// Botón flotante del carrito CONTROLADO POR PROPS

import { ShoppingCart } from 'lucide-react';
import { useCart } from '../../context/CartContext';

/**
 * ✅ RECIBE onClick COMO PROP (con llaves)
 * Botón flotante que abre el CartDrawer
 */
const CartButton = ({ onClick }) => {
  const { getTotalItems } = useCart();
  const totalItems = getTotalItems();

  // ✅ LOG PARA DEBUGGING
  console.log('🔘 CartButton - onClick recibido:', typeof onClick);
  console.log('🔘 CartButton - totalItems:', totalItems);

  // No mostrar si no hay productos
  if (totalItems === 0) {
    return null;
  }

  // ✅ HANDLER CON LOG PARA VER SI SE EJECUTA
  const handleClick = () => {
    console.log('👆 CartButton - Click detectado!');
    if (onClick) {
      onClick(); // ✅ Ejecutar la función onClick prop
    } else {
      console.error('❌ CartButton - onClick no está definido!');
    }
  };

  return (
    <button
      onClick={handleClick} // ✅ Usar el handler con log
      className="fixed bottom-6 right-6 z-40 bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-2xl transition-all duration-300 active:scale-95 md:hidden"
      aria-label="Ver carrito"
    >
      <ShoppingCart className="w-6 h-6" />
      
      {/* Badge con cantidad */}
      <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-7 h-7 flex items-center justify-center animate-bounce">
        {totalItems > 99 ? '99+' : totalItems}
      </span>
    </button>
  );
};

export default CartButton;