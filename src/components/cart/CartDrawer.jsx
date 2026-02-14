// ============================================
// CART DRAWER COMPONENT
// ============================================
// Panel lateral del carrito con checkout y generación de WhatsApp

import React, { useState } from 'react';
import { useCartStore } from '../../store/cartStore';
import CartItem from './CartItem';
import { formatPrice, validateClientInfo } from '../../utils/formatters';
import { generateMultipleWhatsAppLinks, openMultipleWhatsApp } from '../../utils/whatsapp';

const CartDrawer = ({ isOpen, onClose }) => {
  const {
    items,
    clienteInfo,
    setClienteInfo,
    getTotalPrice,
    getItemsByColono,
    clearCart
  } = useCartStore();

  const [showCheckout, setShowCheckout] = useState(false);
  const [errors, setErrors] = useState([]);

  const totalPrice = getTotalPrice();
  const isEmpty = items.length === 0;

  // Handler para cambios en el formulario de cliente
  const handleClientInfoChange = (field, value) => {
    setClienteInfo({
      ...clienteInfo,
      [field]: value
    });
  };

  // Handler para finalizar compra
  const handleCheckout = () => {
    // Validar información del cliente
    const validation = validateClientInfo(clienteInfo);
    
    if (!validation.valid) {
      setErrors(validation.errors);
      return;
    }

    // Limpiar errores
    setErrors([]);

    // Agrupar items por colono
    const itemsByColono = getItemsByColono();

    // Generar links de WhatsApp
    const whatsappLinks = generateMultipleWhatsAppLinks(itemsByColono, clienteInfo);

    // Abrir WhatsApp para cada colono
    openMultipleWhatsApp(whatsappLinks);

    // Limpiar carrito y cerrar drawer
    setTimeout(() => {
      clearCart();
      setShowCheckout(false);
      onClose();
    }, 1000);
  };

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity"
          onClick={onClose}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-96 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-900">
            🛒 Mi Carrito
          </h2>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Cerrar carrito"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Contenido */}
        <div className="flex flex-col h-[calc(100%-4rem)]">
          {isEmpty ? (
            /* Carrito vacío */
            <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
              <div className="text-6xl mb-4">🛒</div>
              <h3 className="text-lg font-semibold text-gray-700 mb-2">
                Tu carrito está vacío
              </h3>
              <p className="text-gray-500 mb-6">
                Agrega productos para comenzar tu pedido
              </p>
              <button
                onClick={onClose}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
              >
                Explorar productos
              </button>
            </div>
          ) : (
            <>
              {/* Lista de items */}
              <div className="flex-1 overflow-y-auto p-4">
                {!showCheckout ? (
                  /* Vista de items */
                  <>
                    {items.map((item) => (
                      <CartItem key={item.id} item={item} />
                    ))}
                  </>
                ) : (
                  /* Vista de checkout */
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      📋 Datos de entrega
                    </h3>

                    {/* Formulario de cliente */}
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Nombre completo *
                        </label>
                        <input
                          type="text"
                          value={clienteInfo.nombre}
                          onChange={(e) => handleClientInfoChange('nombre', e.target.value)}
                          placeholder="Juan Pérez"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Teléfono *
                        </label>
                        <input
                          type="tel"
                          value={clienteInfo.telefono}
                          onChange={(e) => handleClientInfoChange('telefono', e.target.value)}
                          placeholder="+54 9 3756 123456"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Ubicación / Dirección *
                        </label>
                        <textarea
                          value={clienteInfo.ubicacion}
                          onChange={(e) => handleClientInfoChange('ubicacion', e.target.value)}
                          placeholder="Barrio Centro, Calle 3, Casa 15"
                          rows={3}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none"
                        />
                      </div>
                    </div>

                    {/* Errores de validación */}
                    {errors.length > 0 && (
                      <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg">
                        <p className="text-sm font-semibold text-red-800 mb-1">
                          ⚠️ Por favor completa:
                        </p>
                        <ul className="text-sm text-red-600 list-disc list-inside">
                          {errors.map((error, index) => (
                            <li key={index}>{error}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Resumen del pedido */}
                    <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Resumen del pedido
                      </h4>
                      <div className="space-y-1 text-sm text-gray-600">
                        {items.map((item) => (
                          <div key={item.id} className="flex justify-between">
                            <span>{item.nombre} x{item.cantidad}</span>
                            <span>{formatPrice(item.precio * item.cantidad)}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Botón volver */}
                    <button
                      onClick={() => setShowCheckout(false)}
                      className="mt-4 w-full py-2 text-blue-600 hover:text-blue-700 font-semibold"
                    >
                      ← Volver al carrito
                    </button>
                  </div>
                )}
              </div>

              {/* Footer con total y acciones */}
              <div className="border-t border-gray-200 p-4 bg-white">
                {/* Total */}
                <div className="flex justify-between items-center mb-4">
                  <span className="text-lg font-semibold text-gray-700">
                    Total:
                  </span>
                  <span className="text-2xl font-bold text-green-600">
                    {formatPrice(totalPrice)}
                  </span>
                </div>

                {/* Botones de acción */}
                {!showCheckout ? (
                  <button
                    onClick={() => setShowCheckout(true)}
                    className="w-full py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold transition-colors mb-2"
                  >
                    Continuar con el pedido →
                  </button>
                ) : (
                  <button
                    onClick={handleCheckout}
                    className="w-full py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold transition-colors mb-2 flex items-center justify-center gap-2"
                  >
                    <span>📱</span>
                    Enviar pedido por WhatsApp
                  </button>
                )}

                <button
                  onClick={() => {
                    if (confirm('¿Estás seguro de vaciar el carrito?')) {
                      clearCart();
                      setShowCheckout(false);
                    }
                  }}
                  className="w-full py-2 text-red-600 hover:text-red-700 font-semibold transition-colors"
                >
                  Vaciar carrito
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default CartDrawer;