import { useState } from 'react';
import { X, Trash2, Plus, Minus, ShoppingCart, Send, User, ChevronDown, ChevronUp, MapPin, Phone } from 'lucide-react';
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

  const [clienteData, setClienteData] = useState({
    nombre: '',
    telefono: '',
    direccion: ''
  });

  const [expandedColonos, setExpandedColonos] = useState({});

  /**
   * ✅ MEJORADO: Agrupa y busca el teléfono en múltiples campos
   */
  const agruparPorColono = () => {
    const grupos = {};
    
    cartItems.forEach(item => {
      const colonoId = item.colonoId || 'sin-colono';
      
      if (!grupos[colonoId]) {
        grupos[colonoId] = {
          colonoId: colonoId,
          colonoNombre: item.colonoNombre || 'Vendedor desconocido',
          // ✅ BUSCA EN TODAS LAS POSIBILIDADES
          colonoTelefono: item.colonoTelefono || item.telefono || item.vendedorTelefono || '',
          productos: []
        };
      }
      
      grupos[colonoId].productos.push(item);
    });

    return Object.values(grupos);
  };

  const calcularSubtotalGrupo = (productos) => {
    return productos.reduce((total, item) => {
      // Ajuste por si cantidad viene como quantity o cantidad
      const q = item.cantidad || item.quantity || 1;
      return total + (item.precio * q);
    }, 0);
  };

  const generarMensajeColono = (grupo) => {
    let mensaje = `🌱 *PEDIDO - FERIA VIRTUAL ESPERANZA*\n\n`;
    mensaje += `Hola ${grupo.colonoNombre}! 👋\n\n`;
    
    if (clienteData.nombre) mensaje += `👤 *Cliente:* ${clienteData.nombre}\n`;
    if (clienteData.telefono) mensaje += `📱 *Teléfono:* ${clienteData.telefono}\n`;
    if (clienteData.direccion) mensaje += `📍 *Dirección:* ${clienteData.direccion}\n`;
    mensaje += '\n📦 *PRODUCTOS:*\n';

    grupo.productos.forEach(item => {
      const q = item.cantidad || item.quantity || 1;
      const precioTotal = (item.precio * q) / 100;
      mensaje += `• ${q}x ${item.nombre}\n`;
      mensaje += `  $${(item.precio / 100).toFixed(2)} c/u = $${precioTotal.toFixed(2)}\n`;
    });

    const subtotal = calcularSubtotalGrupo(grupo.productos) / 100;
    mensaje += `\n💰 *TOTAL: $${subtotal.toFixed(2)}*\n\n`;
    mensaje += '¡Gracias! 🙏';

    return encodeURIComponent(mensaje);
  };

  /**
   * ✅ MEJORADO: Limpieza de número y prefijo 549
   */
  const enviarPedidoColono = (grupo) => {
    if (!grupo.colonoTelefono) {
      alert(`⚠️ No se pudo enviar el pedido. El vendedor "${grupo.colonoNombre}" no cargó su teléfono en este producto.`);
      return;
    }

    const mensaje = generarMensajeColono(grupo);
    // Limpia todo lo que no sea número
    let numLimpio = grupo.colonoTelefono.replace(/\D/g, '');
    
    // Si el número empieza con 0, se lo quitamos
    if (numLimpio.startsWith('0')) numLimpio = numLimpio.substring(1);
    
    // Si no tiene el 54, se lo ponemos (Formato internacional)
    const whatsappNumber = numLimpio.startsWith('54') ? numLimpio : `54${numLimpio}`;
    
    // Usamos api.whatsapp para mejor compatibilidad en móviles
    const whatsappUrl = `https://api.whatsapp.com{whatsappNumber}&text=${mensaje}`;
    
    window.open(whatsappUrl, '_blank');
  };

  const enviarTodosPedidos = () => {
    const grupos = agruparPorColono();
    
    if (grupos.length === 0) {
      alert('El carrito está vacío');
      return;
    }

    if (grupos.length > 1) {
      const confirmar = confirm(
        `Se abrirán ${grupos.length} conversaciones de WhatsApp (una para cada vendedor).\n\n` +
        grupos.map(g => `• ${g.colonoNombre}`).join('\n') +
        '\n\n¿Continuar?'
      );
      if (!confirmar) return;
    }

    grupos.forEach((grupo, index) => {
      setTimeout(() => {
        enviarPedidoColono(grupo);
      }, index * 800); // Un poquito más de delay para evitar bloqueos del navegador
    });

    setTimeout(() => {
      if (confirm('¿Los mensajes se abrieron correctamente? Si es así, ¿deseás vaciar el carrito?')) {
        clearCart();
        onClose();
      }
    }, grupos.length * 1000);
  };

  const handleClienteChange = (campo, valor) => {
    setClienteData(prev => ({ ...prev, [campo]: valor }));
  };

  const gruposColonos = agruparPorColono();

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black/60 z-[9998] backdrop-blur-sm transition-opacity" onClick={onClose} />
      )}

      <div className={`fixed top-0 right-0 h-full w-full md:w-96 bg-white shadow-2xl z-[9999] transform transition-transform duration-300 flex flex-col ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        
        {/* HEADER */}
        <div className="bg-green-600 text-white p-5 flex items-center justify-between shadow-md">
          <div className="flex items-center gap-3">
            <div className="bg-white/20 p-2 rounded-lg">
              <ShoppingCart className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-lg font-bold">Tu Pedido</h2>
              <p className="text-xs text-green-100 opacity-80">{getTotalItems()} productos seleccionados</p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-black/10 rounded-full transition-colors">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* CONTENIDO */}
        <div className="flex-1 overflow-y-auto p-4 space-y-6">
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-gray-400">
              <ShoppingCart size={64} strokeWidth={1} className="mb-4 opacity-20" />
              <p className="text-lg">Tu carrito está vacío</p>
            </div>
          ) : (
            <>
              {/* SECCIÓN DATOS CLIENTE */}
              <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100 space-y-3">
                <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider flex items-center gap-2">
                   <User size={14}/> Tus Datos (Para el envío)
                </h3>
                <input 
                  type="text" placeholder="Tu nombre" 
                  className="w-full p-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-green-500 outline-none transition-all"
                  value={clienteData.nombre} onChange={(e) => handleClienteChange('nombre', e.target.value)}
                />
                <input 
                  type="tel" placeholder="Tu teléfono" 
                  className="w-full p-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-green-500 outline-none transition-all"
                  value={clienteData.telefono} onChange={(e) => handleClienteChange('telefono', e.target.value)}
                />
                <input 
                  type="text" placeholder="Tu dirección (Puerto Esperanza)" 
                  className="w-full p-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-green-500 outline-none transition-all"
                  value={clienteData.direccion} onChange={(e) => handleClienteChange('direccion', e.target.value)}
                />
              </div>

              {/* LISTA POR VENDEDOR */}
              <div className="space-y-4">
                <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider ml-1">Productos</h3>
                {gruposColonos.map((grupo) => (
                  <div key={grupo.colonoId} className="border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
                    <div className="bg-green-50 p-3 flex justify-between items-center border-b border-green-100">
                      <span className="font-bold text-green-800 flex items-center gap-2 text-sm">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                        Vendedor: {grupo.colonoNombre}
                      </span>
                      <span className="text-xs font-bold text-green-600 bg-white px-2 py-1 rounded-lg">
                        ${(calcularSubtotalGrupo(grupo.productos) / 100).toFixed(2)}
                      </span>
                    </div>
                    <div className="p-2 space-y-2 bg-white">
                      {grupo.productos.map((item) => (
                        <div key={item.id} className="flex items-center gap-3 p-2 bg-gray-50 rounded-xl">
                          <img src={item.imagen} alt={item.nombre} className="w-12 h-12 rounded-lg object-cover" />
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-bold text-gray-800 truncate">{item.nombre}</p>
                            <p className="text-xs text-gray-500">${(item.precio / 100).toFixed(2)} x {item.cantidad || item.quantity}</p>
                          </div>
                          <div className="flex items-center gap-2 bg-white rounded-lg border border-gray-200 p-1">
                            <button onClick={() => decrementQuantity(item.id)} className="p-1 hover:bg-gray-100 rounded-md text-green-600"><Minus size={14}/></button>
                            <span className="text-sm font-bold w-4 text-center">{item.cantidad || item.quantity}</span>
                            <button onClick={() => incrementQuantity(item.id)} className="p-1 hover:bg-gray-100 rounded-md text-green-600"><Plus size={14}/></button>
                          </div>
                          <button onClick={() => removeFromCart(item.id)} className="p-2 text-red-400 hover:text-red-600 transition-colors"><Trash2 size={16}/></button>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>

        {/* FOOTER */}
        {cartItems.length > 0 && (
          <div className="p-5 border-t border-gray-100 bg-white space-y-4 shadow-[0_-10px_20px_rgba(0,0,0,0.05)]">
            <div className="flex justify-between items-end">
              <span className="text-gray-400 font-medium">Total General:</span>
              <span className="text-3xl font-black text-green-600">${(getTotal() / 100).toFixed(2)}</span>
            </div>
            <button
              onClick={enviarTodosPedidos}
              className="w-full bg-green-600 hover:bg-green-700 text-white p-4 rounded-2xl font-bold flex items-center justify-center gap-3 shadow-lg shadow-green-100 transition-all active:scale-95"
            >
              <Send size={20} />
              Finalizar Pedido por WhatsApp
            </button>
            <button onClick={() => { if(confirm('¿Vaciar todo el carrito?')) clearCart() }} className="w-full text-xs text-gray-400 hover:text-red-500 transition-colors py-2 font-medium">
              Vaciar carrito
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
