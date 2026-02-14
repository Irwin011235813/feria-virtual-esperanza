// ============================================
// CART CONTEXT - GESTIÓN CENTRALIZADA DEL CARRITO
// ============================================
// Context API para manejar el estado global del carrito con persistencia

import { createContext, useContext, useState, useEffect } from 'react';

// Crear el contexto
const CartContext = createContext();

/**
 * Hook personalizado para usar el carrito desde cualquier componente
 */
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart debe usarse dentro de un CartProvider');
  }
  return context;
};

/**
 * Provider del carrito que envuelve la aplicación
 */
export const CartProvider = ({ children }) => {
  // Estado del carrito con carga inicial desde localStorage
  const [cartItems, setCartItems] = useState(() => {
    try {
      const savedCart = localStorage.getItem('feria-virtual-cart');
      return savedCart ? JSON.parse(savedCart) : [];
    } catch (error) {
      console.error('Error cargando carrito desde localStorage:', error);
      return [];
    }
  });

  // Estado para notificaciones
  const [notification, setNotification] = useState(null);

  // Persistir carrito en localStorage cada vez que cambie
  useEffect(() => {
    try {
      localStorage.setItem('feria-virtual-cart', JSON.stringify(cartItems));
    } catch (error) {
      console.error('Error guardando carrito en localStorage:', error);
    }
  }, [cartItems]);

  /**
   * Muestra una notificación temporal
   */
  const showNotification = (message, type = 'success') => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 3000);
  };

  /**
   * Agrega un producto al carrito o incrementa su cantidad
   * @param {Object} producto - Producto a agregar
   * @param {number} cantidad - Cantidad a agregar (default: 1)
   */
  const addToCart = (producto, cantidad = 1) => {
    setCartItems(prevItems => {
      // Buscar si el producto ya existe en el carrito
      const existingItemIndex = prevItems.findIndex(
        item => item.id === producto.id
      );

      if (existingItemIndex > -1) {
        // Si existe, incrementar cantidad
        const updatedItems = [...prevItems];
        const newCantidad = updatedItems[existingItemIndex].cantidad + cantidad;
        
        // Verificar stock disponible
        if (newCantidad > producto.stock) {
          showNotification(
            `Solo hay ${producto.stock} unidades disponibles`,
            'warning'
          );
          return prevItems;
        }

        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          cantidad: newCantidad
        };

        showNotification(`${producto.nombre} actualizado en el carrito`, 'success');
        return updatedItems;
      } else {
        // Si no existe, agregarlo como nuevo item
        if (cantidad > producto.stock) {
          showNotification(
            `Solo hay ${producto.stock} unidades disponibles`,
            'warning'
          );
          return prevItems;
        }

        showNotification(`${producto.nombre} agregado al carrito`, 'success');
        return [
          ...prevItems,
          {
            id: producto.id,
            nombre: producto.nombre,
            precio: producto.precio,
            imagen: producto.imagen,
            colonoId: producto.colonoId,
            colonoNombre: producto.colonoNombre,
            colonoTelefono: producto.colonoTelefono,
            stock: producto.stock,
            unidad: producto.unidad,
            cantidad: cantidad
          }
        ];
      }
    });
  };

  /**
   * Elimina un producto del carrito completamente
   * @param {string} productoId - ID del producto a eliminar
   */
  const removeFromCart = (productoId) => {
    setCartItems(prevItems => {
      const item = prevItems.find(item => item.id === productoId);
      if (item) {
        showNotification(`${item.nombre} eliminado del carrito`, 'info');
      }
      return prevItems.filter(item => item.id !== productoId);
    });
  };

  /**
   * Actualiza la cantidad de un producto en el carrito
   * @param {string} productoId - ID del producto
   * @param {number} nuevaCantidad - Nueva cantidad
   */
  const updateQuantity = (productoId, nuevaCantidad) => {
    if (nuevaCantidad < 1) {
      removeFromCart(productoId);
      return;
    }

    setCartItems(prevItems => {
      return prevItems.map(item => {
        if (item.id === productoId) {
          // Verificar stock disponible
          if (nuevaCantidad > item.stock) {
            showNotification(
              `Solo hay ${item.stock} unidades disponibles`,
              'warning'
            );
            return item;
          }
          return { ...item, cantidad: nuevaCantidad };
        }
        return item;
      });
    });
  };

  /**
   * Incrementa la cantidad de un producto en 1
   */
  const incrementQuantity = (productoId) => {
    setCartItems(prevItems => {
      return prevItems.map(item => {
        if (item.id === productoId) {
          const newCantidad = item.cantidad + 1;
          if (newCantidad > item.stock) {
            showNotification(
              `Solo hay ${item.stock} unidades disponibles`,
              'warning'
            );
            return item;
          }
          return { ...item, cantidad: newCantidad };
        }
        return item;
      });
    });
  };

  /**
   * Decrementa la cantidad de un producto en 1
   */
  const decrementQuantity = (productoId) => {
    setCartItems(prevItems => {
      return prevItems.map(item => {
        if (item.id === productoId) {
          const newCantidad = item.cantidad - 1;
          if (newCantidad < 1) {
            removeFromCart(productoId);
            return item;
          }
          return { ...item, cantidad: newCantidad };
        }
        return item;
      });
    });
  };

  /**
   * Vacía el carrito completamente
   */
  const clearCart = () => {
    setCartItems([]);
    showNotification('Carrito vaciado', 'info');
  };

  /**
   * Calcula el total del carrito
   */
  const getTotal = () => {
    return cartItems.reduce((total, item) => {
      return total + (item.precio * item.cantidad);
    }, 0);
  };

  /**
   * Calcula el número total de items en el carrito
   */
  const getTotalItems = () => {
    return cartItems.reduce((total, item) => {
      return total + item.cantidad;
    }, 0);
  };

  /**
   * Verifica si un producto está en el carrito
   */
  const isInCart = (productoId) => {
    return cartItems.some(item => item.id === productoId);
  };

  /**
   * Obtiene la cantidad de un producto en el carrito
   */
  const getItemQuantity = (productoId) => {
    const item = cartItems.find(item => item.id === productoId);
    return item ? item.cantidad : 0;
  };

  // Valor del contexto que se compartirá
  const value = {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    incrementQuantity,
    decrementQuantity,
    clearCart,
    getTotal,
    getTotalItems,
    isInCart,
    getItemQuantity,
    notification
  };

  return (
    <CartContext.Provider value={value}>
      {children}
      
      {/* Notificación Toast */}
      {notification && (
        <div className="fixed top-4 right-4 z-50 animate-slide-in-right">
          <div
            className={`px-6 py-4 rounded-lg shadow-lg flex items-center gap-3 ${
              notification.type === 'success'
                ? 'bg-green-600 text-white'
                : notification.type === 'warning'
                ? 'bg-orange-500 text-white'
                : notification.type === 'error'
                ? 'bg-red-600 text-white'
                : 'bg-blue-600 text-white'
            }`}
          >
            {/* Icono según tipo */}
            {notification.type === 'success' && (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            )}
            {notification.type === 'warning' && (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            )}
            {notification.type === 'error' && (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            )}
            {notification.type === 'info' && (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            )}
            
            <span className="font-medium">{notification.message}</span>
          </div>
        </div>
      )}
    </CartContext.Provider>
  );
};

// Estilos para la animación del toast (agregar a tu archivo CSS o Tailwind config)
// En tu tailwind.config.js, agrega:
/*
theme: {
  extend: {
    keyframes: {
      'slide-in-right': {
        '0%': { transform: 'translateX(100%)', opacity: 0 },
        '100%': { transform: 'translateX(0)', opacity: 1 }
      }
    },
    animation: {
      'slide-in-right': 'slide-in-right 0.3s ease-out'
    }
  }
}
*/