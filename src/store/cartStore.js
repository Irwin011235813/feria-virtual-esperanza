// ============================================
// ZUSTAND STORE - CARRITO DE COMPRAS
// ============================================
// Manejo de estado global del carrito con:
// - Persistencia en localStorage
// - Métodos optimizados para agregar/quitar/actualizar
// - Cálculo automático de totales

import { create } from 'zustand';
import { persist } from 'zustand/middleware';

/**
 * Store del carrito de compras
 * Persiste automáticamente en localStorage
 */
export const useCartStore = create(
  persist(
    (set, get) => ({
      // ============================================
      // ESTADO
      // ============================================
      items: [], // Array de items del carrito
      
      // Datos del cliente (para el pedido final)
      clienteInfo: {
        nombre: '',
        telefono: '',
        ubicacion: ''
      },

      // ============================================
      // GETTERS (propiedades computadas)
      // ============================================
      
      /**
       * Cantidad total de items en el carrito
       */
      getTotalItems: () => {
        const { items } = get();
        return items.reduce((total, item) => total + item.cantidad, 0);
      },

      /**
       * Precio total del carrito (en centavos)
       */
      getTotalPrice: () => {
        const { items } = get();
        return items.reduce((total, item) => {
          return total + (item.precio * item.cantidad);
        }, 0);
      },

      /**
       * Agrupa items por colono (para generar múltiples links de WhatsApp)
       */
      getItemsByColono: () => {
        const { items } = get();
        const grouped = {};
        
        items.forEach(item => {
          if (!grouped[item.colonoId]) {
            grouped[item.colonoId] = {
              colonoNombre: item.colonoNombre,
              colonoTelefono: item.colonoTelefono,
              items: [],
              total: 0
            };
          }
          
          grouped[item.colonoId].items.push(item);
          grouped[item.colonoId].total += item.precio * item.cantidad;
        });
        
        return grouped;
      },

      // ============================================
      // ACCIONES
      // ============================================

      /**
       * Agrega un producto al carrito
       * Si ya existe, incrementa la cantidad
       * @param {Object} producto - Producto a agregar
       */
      addItem: (producto) => {
        set((state) => {
          const existingItemIndex = state.items.findIndex(
            item => item.id === producto.id
          );

          if (existingItemIndex > -1) {
            // Producto ya existe: incrementar cantidad
            const updatedItems = [...state.items];
            updatedItems[existingItemIndex].cantidad += 1;
            
            return { items: updatedItems };
          } else {
            // Producto nuevo: agregar al carrito
            return {
              items: [
                ...state.items,
                {
                  id: producto.id,
                  nombre: producto.nombre,
                  precio: producto.precio,
                  unidad: producto.unidad,
                  imagen: producto.imagen,
                  colonoId: producto.colonoId,
                  colonoNombre: producto.colonoNombre,
                  colonoTelefono: producto.colonoTelefono,
                  cantidad: 1,
                  stock: producto.stock
                }
              ]
            };
          }
        });
      },

      /**
       * Elimina un producto del carrito completamente
       * @param {string} productId - ID del producto a eliminar
       */
      removeItem: (productId) => {
        set((state) => ({
          items: state.items.filter(item => item.id !== productId)
        }));
      },

      /**
       * Actualiza la cantidad de un producto
       * Si cantidad es 0, elimina el producto
       * @param {string} productId - ID del producto
       * @param {number} cantidad - Nueva cantidad
       */
      updateQuantity: (productId, cantidad) => {
        set((state) => {
          if (cantidad <= 0) {
            // Eliminar si cantidad es 0
            return {
              items: state.items.filter(item => item.id !== productId)
            };
          }

          // Actualizar cantidad
          const updatedItems = state.items.map(item => {
            if (item.id === productId) {
              // Validar que no exceda el stock
              const newCantidad = Math.min(cantidad, item.stock);
              return { ...item, cantidad: newCantidad };
            }
            return item;
          });

          return { items: updatedItems };
        });
      },

      /**
       * Incrementa la cantidad de un producto en 1
       * @param {string} productId - ID del producto
       */
      incrementItem: (productId) => {
        set((state) => {
          const updatedItems = state.items.map(item => {
            if (item.id === productId && item.cantidad < item.stock) {
              return { ...item, cantidad: item.cantidad + 1 };
            }
            return item;
          });
          return { items: updatedItems };
        });
      },

      /**
       * Decrementa la cantidad de un producto en 1
       * Si llega a 0, elimina el producto
       * @param {string} productId - ID del producto
       */
      decrementItem: (productId) => {
        set((state) => {
          const item = state.items.find(i => i.id === productId);
          
          if (!item) return state;
          
          if (item.cantidad <= 1) {
            // Eliminar si llega a 0
            return {
              items: state.items.filter(i => i.id !== productId)
            };
          }
          
          // Decrementar cantidad
          const updatedItems = state.items.map(i => {
            if (i.id === productId) {
              return { ...i, cantidad: i.cantidad - 1 };
            }
            return i;
          });
          
          return { items: updatedItems };
        });
      },

      /**
       * Actualiza la información del cliente
       * @param {Object} info - { nombre, telefono, ubicacion }
       */
      setClienteInfo: (info) => {
        set({ clienteInfo: info });
      },

      /**
       * Limpia el carrito completamente
       */
      clearCart: () => {
        set({ 
          items: [],
          clienteInfo: {
            nombre: '',
            telefono: '',
            ubicacion: ''
          }
        });
      },

      /**
       * Limpia solo los items de un colono específico
       * (útil después de enviar el WhatsApp de ese colono)
       * @param {string} colonoId - ID del colono
       */
      clearColonoItems: (colonoId) => {
        set((state) => ({
          items: state.items.filter(item => item.colonoId !== colonoId)
        }));
      }
    }),
    {
      name: 'feria-cart-storage', // Nombre de la key en localStorage
      
      // Opciones de persistencia
      partialize: (state) => ({
        items: state.items,
        clienteInfo: state.clienteInfo
      })
    }
  )
);

export default useCartStore;