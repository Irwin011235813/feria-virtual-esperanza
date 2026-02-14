// ============================================
// CART BUTTON - VERSIÓN DEBUG GARANTIZADA
// ============================================

import { ShoppingCart } from 'lucide-react';
import { useCart } from '../../context/CartContext';

const CartButton = ({ onClick }) => {
  const { getTotalItems } = useCart();
  const totalItems = getTotalItems();

  // ✅ LOG INMEDIATO AL RENDERIZAR
  console.log("===========================================");
  console.log("🔘 CartButton - RENDERIZADO");
  console.log("🔘 onClick recibido:", onClick);
  console.log("🔘 Tipo de onClick:", typeof onClick);
  console.log("🔘 onClick existe:", !!onClick);
  console.log("🔘 Total items:", totalItems);
  console.log("===========================================");

  // Si no hay productos, no mostrar
  if (totalItems === 0) {
    console.log("❌ CartButton - No se muestra (sin productos)");
    return null;
  }

  // ✅ HANDLER ULTRA-VERBOSE
  const handleClick = (event) => {
    console.log("==========================================");
    console.log("🖱️ CLICK DETECTADO EN CART BUTTON!");
    console.log("🖱️ Event:", event);
    console.log("🖱️ Event type:", event.type);
    console.log("🖱️ Target:", event.target);
    console.log("==========================================");
    
    // Prevenir comportamiento default
    event.preventDefault();
    event.stopPropagation();
    
    console.log("✅ Ejecutando onClick...");
    
    if (onClick && typeof onClick === 'function') {
      console.log("✅ onClick es una función válida");
      try {
        onClick();
        console.log("✅ onClick ejecutado exitosamente");
      } catch (error) {
        console.error("❌ Error al ejecutar onClick:", error);
      }
    } else {
      console.error("❌ onClick NO es una función válida!");
      console.error("❌ onClick recibido:", onClick);
      console.error("❌ Tipo:", typeof onClick);
    }
  };

  console.log("✅ CartButton - Renderizando botón visible");

  return (
    <button
      onClick={handleClick}
      onMouseDown={() => console.log("🖱️ MouseDown en botón")}
      onMouseUp={() => console.log("🖱️ MouseUp en botón")}
      onTouchStart={() => console.log("👆 TouchStart en botón")}
      onTouchEnd={() => console.log("👆 TouchEnd en botón")}
      style={{
        // ✅ ESTILOS INLINE PARA GARANTIZAR VISIBILIDAD
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        zIndex: 9998,
        backgroundColor: '#16a34a',
        color: 'white',
        padding: '16px',
        borderRadius: '50%',
        border: 'none',
        cursor: 'pointer',
        boxShadow: '0 10px 25px rgba(0,0,0,0.3)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
      aria-label="Ver carrito"
    >
      <ShoppingCart 
        size={24}
        style={{ pointerEvents: 'none' }} // ✅ Evitar que el SVG capture el click
      />
      
      {/* Badge con cantidad */}
      <span
        style={{
          position: 'absolute',
          top: '-8px',
          right: '-8px',
          backgroundColor: '#ef4444',
          color: 'white',
          fontSize: '12px',
          fontWeight: 'bold',
          borderRadius: '50%',
          width: '28px',
          height: '28px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          pointerEvents: 'none' // ✅ Evitar que el badge capture el click
        }}
      >
        {totalItems > 99 ? '99+' : totalItems}
      </span>
    </button>
  );
};

export default CartButton;