// ============================================
// CART DRAWER - CON AGRUPACIÓN POR VENDEDOR
// ============================================
// Panel lateral con pedidos separados por colono

import { useState } from 'react';
import { X, Trash2, Plus, Minus, ShoppingCart, Send, User, ChevronDown, ChevronUp } from 'lucide-react';
import { useCart } from '../../context/CartContext';

const CartDrawer = ({ isOpen, onClose }) => {
  const {
    cartItems,
    removeFromCart,
    incrementQuantity,
    decrementQuantity,
    updateQuantity,
    getTotal,
    getTotalItems,
    clearCart
  } = useCart();

  // Estado para datos del cliente
  const [clienteData, setClienteData] = useState({
    nombre: '',
    telefono: '',
    direccion: ''
  });

  // Estado para expandir/colapsar grupos de colonos
  const [expandedColonos, setExpandedColonos] = useState({});

  /**
   * Agrupa los productos por colono
   */
  const agruparPorColono = () => {
    const grupos = {};
    
    cartItems.forEach(item => {
      const colonoId = item.colonoId || 'sin-colono';
      
      if (!grupos[colonoId]) {
        grupos[colonoId] = {
          colonoId: colonoId,
          colonoNombre: item.colonoNombre || 'Vendedor desconocido',
          colonoTelefono: item.colonoTelefono || '',
          productos: []
        };
      }
      
      grupos[colonoId].productos.push(item);
    });

    return Object.values(grupos);
  };

  /**
   * Calcula el subtotal de un grupo de productos
   */
  const calcularSubtotalGrupo = (productos) => {
    return productos.reduce((total, item) => {
      return total + (item.precio * item.cantidad);
    }, 0);
  };

  /**
   * Genera mensaje de WhatsApp para un colono específico
   */
  const generarMensajeColono = (grupo) => {
    let mensaje = `🌱 *PEDIDO - FERIA VIRTUAL ESPERANZA*\n\n`;
    
    mensaje += `Hola ${grupo.colonoNombre}! 👋\n\n`;
    
    if (clienteData.nombre) {
      mensaje += `👤 *Cliente:* ${clienteData.nombre}\n`;
    }
    if (clienteData.telefono) {
      mensaje += `📱 *Teléfono:* ${clienteData.telefono}\n`;
    }
    if (clienteData.direccion) {
      mensaje += `📍 *Dirección:* ${clienteData.direccion}\n`;
    }
    mensaje += '\n';

    mensaje += `📦 *PRODUCTOS:*\n`;
    grupo.productos.forEach(item => {
      const precioTotal = (item.precio * item.cantidad) / 100;
      mensaje += `• ${item.cantidad}x ${item.nombre}\n`;
      mensaje += `  $${(item.precio / 100).toFixed(2)} c/u = $${precioTotal.toFixed(2)}\n`;
    });

    const subtotal = calcularSubtotalGrupo(grupo.productos) / 100;
    mensaje += `\n💰 *TOTAL: $${subtotal.toFixed(2)}*\n\n`;
    mensaje += '¡Gracias! 🙏';

    return encodeURIComponent(mensaje);
  };

  /**
   * Envía pedido a un colono específico
   */
  const enviarPedidoColono = (grupo) => {
    if (!grupo.colonoTelefono) {
      alert(`No se encontró número de WhatsApp de ${grupo.colonoNombre}`);
      return;
    }

    const mensaje = generarMensajeColono(grupo);
    const whatsappNumber = grupo.colonoTelefono.replace(/\D/g, '');
    const whatsappUrl = `https://wa.me/549${whatsappNumber}?text=${mensaje}`;
    
    window.open(whatsappUrl, '_blank');
  };

  /**
   * Envía todos los pedidos (uno por cada colono)
   */
  const enviarTodosPedidos = () => {
    const grupos = agruparPorColono();
    
    if (grupos.length === 0) {
      alert('El carrito está vacío');
      return;
    }

    // Advertencia si hay múltiples vendedores
    if (grupos.length > 1) {
      const confirmar = confirm(
        `Se abrirán ${grupos.length} conversaciones de WhatsApp (una por cada vendedor).\n\n` +
        grupos.map(g => `• ${g.colonoNombre}`).join('\n') +
        '\n\n¿Continuar?'
      );
      
      if (!confirmar) return;
    }

    // Enviar a cada colono
    let enviados = 0;
    grupos.forEach((grupo, index) => {
      if (grupo.colonoTelefono) {
        // Delay entre mensajes para que no se bloqueen las ventanas
        setTimeout(() => {
          enviarPedidoColono(grupo);
        }, index * 500);
        enviados++;
      } else {
        alert(`No se pudo enviar pedido a ${grupo.colonoNombre} (sin teléfono)`);
      }
    });

    if (enviados > 0) {
      setTimeout(() => {
        if (confirm('¿Deseas vaciar el carrito?')) {
          clearCart();
          onClose();
        }
      }, grupos.length * 500 + 1000);
    }
  };

  /**
   * Toggle expandir/colapsar grupo de colono
   */
  const toggleExpandColono = (colonoId) => {
    setExpandedColonos(prev => ({
      ...prev,
      [colonoId]: !prev[colonoId]
    }));
  };

  const handleClienteChange = (campo, valor) => {
    setClienteData(prev => ({
      ...prev,
      [campo]: valor
    }));
  };

  const totalItems = getTotalItems();
  const totalPrecio = getTotal();
  const gruposColonos = agruparPorColono();

  return (
    <>
      {/* OVERLAY */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-[9998] transition-opacity duration-300"
          onClick={onClose}
        />
      )}

      {/* DRAWER */}
      <div
        className={`
          fixed top-0 right-0 h-full w-full md:w-96 
          bg-white shadow-2xl 
          z-[9999]
          transform transition-all duration-300 ease-in-out
          flex flex-col
          ${isOpen 
            ? 'translate-x-0 opacity-100 visible' 
            : 'translate-x-full opacity-0 invisible'
          }
        `}
      >
        {/* Header del drawer */}
        <div className="bg-green-600 text-white p-4 flex items-center justify-between flex-shrink-0">
          <div className="flex items-center gap-3">
            <ShoppingCart className="w-6 h-6" />
            <div>
              <h2 className="text-lg font-bold">Mi Carrito</h2>
              <p className="text-sm text-green-100">
                {totalItems} {totalItems === 1 ? 'producto' : 'productos'}
                {gruposColonos.length > 1 && ` • ${gruposColonos.length} vendedores`}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white/10 rounded-lg transition-colors"
            aria-label="Cerrar carrito"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Contenido scrolleable */}
        <div className="flex-1 overflow-y-auto p-4">
          {cartItems.length === 0 ? (
            // Carrito vacío
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingCart className="w-20 h-20 text-gray-300 mb-4" />
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                Tu carrito está vacío
              </h3>
              <p className="text-gray-500 mb-4">
                Agrega productos desde el catálogo
              </p>
              <button
                onClick={onClose}
                className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors"
              >
                Ver productos
              </button>
            </div>
          ) : (
            // AGRUPACIÓN POR COLONO
            <div className="space-y-4">
              {gruposColonos.map((grupo) => {
                const isExpanded = expandedColonos[grupo.colonoId] !== false; // Por defecto expandido
                const subtotal = calcularSubtotalGrupo(grupo.productos);

                return (
                  <div key={grupo.colonoId} className="border-2 border-gray-200 rounded-xl overflow-hidden">
                    {/* Header del grupo (vendedor) */}
                    <div 
                      className="bg-gradient-to-r from-green-50 to-green-100 p-3 cursor-pointer hover:from-green-100 hover:to-green-150 transition-colors"
                      onClick={() => toggleExpandColono(grupo.colonoId)}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
                            <User className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <p className="font-bold text-gray-800 text-sm">{grupo.colonoNombre}</p>
                            <p className="text-xs text-gray-600">
                              {grupo.productos.length} {grupo.productos.length === 1 ? 'producto' : 'productos'}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-green-700 text-sm">
                            ${(subtotal / 100).toFixed(2)}
                          </span>
                          {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                        </div>
                      </div>
                    </div>

                    {/* Productos del grupo (colapsable) */}
                    {isExpanded && (
                      <div className="p-3 space-y-3 bg-white">
                        {grupo.productos.map((item) => (
                          <div
                            key={item.id}
                            className="bg-gray-50 rounded-lg p-3 border border-gray-200"
                          >
                            <div className="flex gap-3">
                              {/* Imagen */}
                              <div className="w-16 h-16 flex-shrink-0 bg-white rounded-lg overflow-hidden border border-gray-200">
                                {item.imagen ? (
                                  <img
                                    src={item.imagen}
                                    alt={item.nombre}
                                    className="w-full h-full object-cover"
                                  />
                                ) : (
                                  <div className="w-full h-full flex items-center justify-center">
                                    <ShoppingCart className="w-6 h-6 text-gray-300" />
                                  </div>
                                )}
                              </div>

                              {/* Info */}
                              <div className="flex-1 min-w-0">
                                <h3 className="font-semibold text-gray-800 text-sm truncate mb-1">
                                  {item.nombre}
                                </h3>
                                <p className="text-green-600 font-bold text-sm mb-2">
                                  ${(item.precio / 100).toFixed(2)} c/u
                                </p>

                                {/* Controles */}
                                <div className="flex items-center gap-2">
                                  <button
                                    onClick={() => decrementQuantity(item.id)}
                                    className="w-7 h-7 flex items-center justify-center bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition-colors"
                                  >
                                    <Minus className="w-3 h-3" />
                                  </button>

                                  <span className="w-8 text-center font-bold text-sm">
                                    {item.cantidad}
                                  </span>

                                  <button
                                    onClick={() => incrementQuantity(item.id)}
                                    disabled={item.cantidad >= item.stock}
                                    className="w-7 h-7 flex items-center justify-center bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition-colors disabled:opacity-50"
                                  >
                                    <Plus className="w-3 h-3" />
                                  </button>

                                  <button
                                    onClick={() => removeFromCart(item.id)}
                                    className="ml-auto w-7 h-7 flex items-center justify-center text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                                  >
                                    <Trash2 className="w-3 h-3" />
                                  </button>
                                </div>

                                <p className="text-xs text-gray-600 mt-1">
                                  Subtotal: <span className="font-semibold">${((item.precio * item.cantidad) / 100).toFixed(2)}</span>
                                </p>
                              </div>
                            </div>
                          </div>
                        ))}

                        {/* Botón para enviar solo a este vendedor */}
                        <button
                          onClick={() => enviarPedidoColono(grupo)}
                          disabled={!grupo.colonoTelefono}
                          className="w-full bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white py-2 px-3 rounded-lg font-medium text-sm flex items-center justify-center gap-2 transition-colors"
                        >
                          <Send className="w-4 h-4" />
                          Pedir a {grupo.colonoNombre}
                        </button>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div className="border-t border-gray-200 p-4 space-y-4 flex-shrink-0">
            {/* Datos del cliente */}
            <div className="space-y-2">
              <h3 className="font-semibold text-gray-700 text-sm">
                Tus datos (opcional)
              </h3>
              <input
                type="text"
                placeholder="Tu nombre"
                value={clienteData.nombre}
                onChange={(e) => handleClienteChange('nombre', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <input
                type="tel"
                placeholder="Tu teléfono"
                value={clienteData.telefono}
                onChange={(e) => handleClienteChange('telefono', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <input
                type="text"
                placeholder="Dirección de entrega"
                value={clienteData.direccion}
                onChange={(e) => handleClienteChange('direccion', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            {/* Total general */}
            <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
              <div className="flex items-center justify-between border-t border-gray-300 pt-2">
                <span className="text-lg font-bold text-gray-800">Total General:</span>
                <span className="text-2xl font-bold text-green-600">
                  ${(totalPrecio / 100).toFixed(2)}
                </span>
              </div>
            </div>

            {/* Botones */}
            <div className="space-y-2">
              {/* Botón principal: Enviar todos */}
              <button
                onClick={enviarTodosPedidos}
                className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-lg font-bold flex items-center justify-center gap-2 transition-colors shadow-lg"
              >
                <Send className="w-5 h-5" />
                {gruposColonos.length > 1 
                  ? `Enviar Todos los Pedidos (${gruposColonos.length})`
                  : 'Finalizar Pedido por WhatsApp'
                }
              </button>

              {gruposColonos.length > 1 && (
                <p className="text-xs text-center text-gray-500">
                  Se abrirán {gruposColonos.length} conversaciones, una por cada vendedor
                </p>
              )}

              <button
                onClick={() => {
                  if (confirm('¿Estás seguro de vaciar el carrito?')) {
                    clearCart();
                  }
                }}
                className="w-full bg-gray-200 hover:bg-gray-300 text-gray-700 py-2 px-4 rounded-lg font-medium flex items-center justify-center gap-2 transition-colors"
              >
                <Trash2 className="w-4 h-4" />
                Vaciar carrito
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;