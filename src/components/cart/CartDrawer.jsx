// ============================================
// CART DRAWER COMPONENT
// ============================================
// Panel lateral del carrito con lista de productos, controles y checkout

import { useState } from 'react';
import { X, Trash2, Plus, Minus, ShoppingCart, Send } from 'lucide-react';
import { useCart } from '../../context/CartContext';

const CartDrawer = () => {
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

  // Estado para abrir/cerrar el drawer
  const [isOpen, setIsOpen] = useState(false);

  // Estado para datos del cliente
  const [clienteData, setClienteData] = useState({
    nombre: '',
    telefono: '',
    direccion: ''
  });

  /**
   * Abre el drawer
   */
  const openDrawer = () => setIsOpen(true);

  /**
   * Cierra el drawer
   */
  const closeDrawer = () => setIsOpen(false);

  /**
   * Genera el mensaje de WhatsApp con el pedido
   */
  const generarMensajeWhatsApp = () => {
    if (cartItems.length === 0) {
      alert('El carrito está vacío');
      return '';
    }

    let mensaje = '🌱 *PEDIDO - FERIA VIRTUAL ESPERANZA*\n\n';
    
    // Datos del cliente
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

    // Agrupar productos por colono
    const productosPorColono = {};
    cartItems.forEach(item => {
      if (!productosPorColono[item.colonoId]) {
        productosPorColono[item.colonoId] = {
          nombre: item.colonoNombre,
          telefono: item.colonoTelefono,
          productos: []
        };
      }
      productosPorColono[item.colonoId].productos.push(item);
    });

    // Construir mensaje por colono
    Object.values(productosPorColono).forEach((colono, index) => {
      mensaje += `🌾 *Colono ${index + 1}: ${colono.nombre}*\n`;
      if (colono.telefono) {
        mensaje += `📞 ${colono.telefono}\n`;
      }
      mensaje += '\n';

      colono.productos.forEach(item => {
        const precioTotal = (item.precio * item.cantidad) / 100;
        mensaje += `• ${item.cantidad}x ${item.nombre}\n`;
        mensaje += `  $${(item.precio / 100).toFixed(2)} c/u = $${precioTotal.toFixed(2)}\n`;
      });
      mensaje += '\n';
    });

    // Total general
    const total = getTotal() / 100;
    mensaje += `💰 *TOTAL: $${total.toFixed(2)}*\n\n`;
    mensaje += '¡Gracias por tu pedido! 🙏';

    return encodeURIComponent(mensaje);
  };

  /**
   * Envía el pedido por WhatsApp
   */
  const handleFinalizarPedido = () => {
    // Validar que haya productos
    if (cartItems.length === 0) {
      alert('El carrito está vacío');
      return;
    }

    // Generar mensaje
    const mensaje = generarMensajeWhatsApp();

    // Obtener el primer colono para enviar el mensaje
    // (podrías mejorar esto para enviar a múltiples colonos)
    const primerColono = cartItems[0];
    const whatsappNumber = primerColono.colonoTelefono?.replace(/\D/g, ''); // Limpiar formato

    if (!whatsappNumber) {
      alert('No se encontró número de WhatsApp del colono');
      return;
    }

    // Abrir WhatsApp con el mensaje
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${mensaje}`;
    window.open(whatsappUrl, '_blank');

    // Opcional: Vaciar carrito después de enviar
    if (confirm('¿Deseas vaciar el carrito?')) {
      clearCart();
      closeDrawer();
    }
  };

  /**
   * Maneja cambios en inputs de datos del cliente
   */
  const handleClienteChange = (campo, valor) => {
    setClienteData(prev => ({
      ...prev,
      [campo]: valor
    }));
  };

  const totalItems = getTotalItems();
  const totalPrecio = getTotal();

  return (
    <>
      {/* Botón flotante para abrir el carrito (móvil) */}
      {!isOpen && totalItems > 0 && (
        <button
          onClick={openDrawer}
          className="fixed bottom-6 right-6 z-40 bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-2xl transition-all duration-300 active:scale-95 md:hidden"
          aria-label="Abrir carrito"
        >
          <ShoppingCart className="w-6 h-6" />
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
            {totalItems}
          </span>
        </button>
      )}

      {/* Overlay oscuro */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 transition-opacity"
          onClick={closeDrawer}
        />
      )}

      {/* Drawer del carrito */}
      <div
        className={`fixed top-0 right-0 h-full w-full md:w-96 bg-white shadow-2xl z-50 transform transition-transform duration-300 flex flex-col ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header del drawer */}
        <div className="bg-green-600 text-white p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <ShoppingCart className="w-6 h-6" />
            <div>
              <h2 className="text-lg font-bold">Mi Carrito</h2>
              <p className="text-sm text-green-100">
                {totalItems} {totalItems === 1 ? 'producto' : 'productos'}
              </p>
            </div>
          </div>
          <button
            onClick={closeDrawer}
            className="p-2 hover:bg-white/10 rounded-lg transition-colors"
            aria-label="Cerrar carrito"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Contenido del carrito */}
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
                onClick={closeDrawer}
                className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors"
              >
                Ver productos
              </button>
            </div>
          ) : (
            // Lista de productos
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-gray-50 rounded-lg p-3 border border-gray-200"
                >
                  <div className="flex gap-3">
                    {/* Imagen del producto */}
                    <div className="w-20 h-20 flex-shrink-0 bg-white rounded-lg overflow-hidden border border-gray-200">
                      {item.imagen ? (
                        <img
                          src={item.imagen}
                          alt={item.nombre}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <ShoppingCart className="w-8 h-8 text-gray-300" />
                        </div>
                      )}
                    </div>

                    {/* Info del producto */}
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-gray-800 text-sm truncate mb-1">
                        {item.nombre}
                      </h3>
                      <p className="text-xs text-gray-500 mb-2">
                        🌱 {item.colonoNombre}
                      </p>

                      {/* Precio unitario */}
                      <p className="text-green-600 font-bold text-sm mb-2">
                        ${(item.precio / 100).toFixed(2)} c/u
                      </p>

                      {/* Controles de cantidad */}
                      <div className="flex items-center gap-2">
                        {/* Botón decrementar */}
                        <button
                          onClick={() => decrementQuantity(item.id)}
                          className="w-8 h-8 flex items-center justify-center bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition-colors active:scale-95"
                          aria-label="Decrementar cantidad"
                        >
                          <Minus className="w-4 h-4" />
                        </button>

                        {/* Cantidad */}
                        <input
                          type="number"
                          min="1"
                          max={item.stock}
                          value={item.cantidad}
                          onChange={(e) => {
                            const newValue = parseInt(e.target.value) || 1;
                            updateQuantity(item.id, newValue);
                          }}
                          className="w-14 text-center border border-gray-300 rounded-lg py-1 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-green-500"
                        />

                        {/* Botón incrementar */}
                        <button
                          onClick={() => incrementQuantity(item.id)}
                          disabled={item.cantidad >= item.stock}
                          className="w-8 h-8 flex items-center justify-center bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition-colors active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                          aria-label="Incrementar cantidad"
                        >
                          <Plus className="w-4 h-4" />
                        </button>

                        {/* Botón eliminar */}
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="ml-auto w-8 h-8 flex items-center justify-center text-red-600 hover:bg-red-50 rounded-lg transition-colors active:scale-95"
                          aria-label="Eliminar producto"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>

                      {/* Subtotal */}
                      <p className="text-xs text-gray-600 mt-2">
                        Subtotal: <span className="font-semibold">${((item.precio * item.cantidad) / 100).toFixed(2)}</span>
                      </p>

                      {/* Advertencia de stock */}
                      {item.cantidad >= item.stock && (
                        <p className="text-xs text-orange-600 mt-1">
                          ⚠️ Stock máximo alcanzado
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer con total y botón de checkout */}
        {cartItems.length > 0 && (
          <div className="border-t border-gray-200 p-4 space-y-4">
            {/* Datos del cliente (opcional) */}
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

            {/* Total */}
            <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm text-gray-600">Subtotal:</span>
                <span className="font-semibold">${(totalPrecio / 100).toFixed(2)}</span>
              </div>
              <div className="flex items-center justify-between border-t border-gray-300 pt-2">
                <span className="text-lg font-bold text-gray-800">Total:</span>
                <span className="text-2xl font-bold text-green-600">
                  ${(totalPrecio / 100).toFixed(2)}
                </span>
              </div>
            </div>

            {/* Botones de acción */}
            <div className="space-y-2">
              {/* Botón Finalizar Pedido */}
              <button
                onClick={handleFinalizarPedido}
                className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors active:scale-98 shadow-md"
              >
                <Send className="w-5 h-5" />
                Finalizar Pedido por WhatsApp
              </button>

              {/* Botón Vaciar Carrito */}
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