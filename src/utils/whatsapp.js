// ============================================
// WHATSAPP HELPER
// ============================================
// Generador de links de WhatsApp con mensaje formateado
// del pedido para enviar a los colonos

/**
 * Genera un link de WhatsApp con el detalle del pedido
 * @param {Object} pedido - Datos del pedido
 * @param {string} pedido.colonoTelefono - Teléfono del colono (formato: +5493756123456)
 * @param {string} pedido.clienteNombre - Nombre del cliente
 * @param {string} pedido.clienteTelefono - Teléfono del cliente
 * @param {string} pedido.clienteUbicacion - Ubicación del cliente
 * @param {Array} pedido.items - Items del pedido
 * @param {number} pedido.total - Total del pedido en centavos
 * @returns {string} URL de WhatsApp lista para abrir
 */
export const generateWhatsAppLink = ({
  colonoTelefono,
  clienteNombre,
  clienteTelefono,
  clienteUbicacion,
  items,
  total
}) => {
  // Formatear el mensaje del pedido
  const mensaje = formatPedidoMessage({
    clienteNombre,
    clienteTelefono,
    clienteUbicacion,
    items,
    total
  });

  // Limpiar el número de teléfono (solo dígitos)
  const telefonoLimpio = colonoTelefono.replace(/\D/g, '');

  // Codificar el mensaje para URL
  const mensajeCodificado = encodeURIComponent(mensaje);

  // Generar link de WhatsApp
  // Formato: https://wa.me/NUMERO?text=MENSAJE
  return `https://wa.me/${telefonoLimpio}?text=${mensajeCodificado}`;
};

/**
 * Formatea el mensaje del pedido para WhatsApp
 * @param {Object} params - Parámetros del pedido
 * @returns {string} Mensaje formateado
 */
const formatPedidoMessage = ({
  clienteNombre,
  clienteTelefono,
  clienteUbicacion,
  items,
  total
}) => {
  // Header del mensaje
  let mensaje = `🛒 *NUEVO PEDIDO - Feria Virtual Esperanza*\n\n`;

  // Datos del cliente
  mensaje += `👤 *Cliente:* ${clienteNombre}\n`;
  mensaje += `📞 *Teléfono:* ${clienteTelefono}\n`;
  mensaje += `📍 *Ubicación:* ${clienteUbicacion}\n\n`;

  // Detalle de productos
  mensaje += `📦 *PRODUCTOS:*\n`;
  mensaje += `${'─'.repeat(30)}\n`;

  items.forEach((item, index) => {
    mensaje += `${index + 1}. *${item.nombre}*\n`;
    mensaje += `   • Cantidad: ${item.cantidad} ${item.unidad}\n`;
    mensaje += `   • Precio unit: $${formatPrice(item.precio)}\n`;
    mensaje += `   • Subtotal: $${formatPrice(item.precio * item.cantidad)}\n\n`;
  });

  // Total
  mensaje += `${'─'.repeat(30)}\n`;
  mensaje += `💰 *TOTAL: $${formatPrice(total)}*\n\n`;

  // Footer
  mensaje += `_Pedido generado desde Feria Virtual Esperanza_`;

  return mensaje;
};

/**
 * Genera múltiples links de WhatsApp cuando hay productos de varios colonos
 * @param {Object} itemsByColono - Items agrupados por colono
 * @param {Object} clienteInfo - Información del cliente
 * @returns {Array} Array de objetos con { colonoNombre, link }
 */
export const generateMultipleWhatsAppLinks = (itemsByColono, clienteInfo) => {
  return Object.entries(itemsByColono).map(([colonoId, data]) => ({
    colonoId,
    colonoNombre: data.colonoNombre,
    link: generateWhatsAppLink({
      colonoTelefono: data.colonoTelefono,
      clienteNombre: clienteInfo.nombre,
      clienteTelefono: clienteInfo.telefono,
      clienteUbicacion: clienteInfo.ubicacion,
      items: data.items,
      total: data.total
    })
  }));
};

/**
 * Formatea un precio de centavos a pesos
 * @param {number} centavos - Precio en centavos
 * @returns {string} Precio formateado (ej: "1.250,00")
 */
const formatPrice = (centavos) => {
  const pesos = centavos / 100;
  
  // Formato argentino: separador de miles (.) y decimales (,)
  return pesos.toLocaleString('es-AR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
};

/**
 * Valida un número de teléfono argentino
 * @param {string} telefono - Número de teléfono
 * @returns {boolean} true si es válido
 */
export const validateArgentinePhone = (telefono) => {
  // Formato esperado: +54 9 3756 123456 (con o sin espacios/guiones)
  const cleaned = telefono.replace(/\D/g, '');
  
  // Debe empezar con 54 (código de país) y tener entre 12-13 dígitos
  return cleaned.startsWith('54') && cleaned.length >= 12 && cleaned.length <= 13;
};

/**
 * Formatea un número de teléfono argentino
 * @param {string} telefono - Número sin formato
 * @returns {string} Número formateado +54 9 3756 123456
 */
export const formatArgentinePhone = (telefono) => {
  const cleaned = telefono.replace(/\D/g, '');
  
  if (!cleaned.startsWith('54')) {
    // Si no tiene código de país, agregarlo
    return `+54${cleaned}`;
  }
  
  return `+${cleaned}`;
};

/**
 * Abre WhatsApp en una nueva ventana/tab
 * @param {string} link - Link de WhatsApp generado
 */
export const openWhatsApp = (link) => {
  window.open(link, '_blank', 'noopener,noreferrer');
};

/**
 * Comparte múltiples links de WhatsApp (cuando hay varios colonos)
 * Abre cada link con un pequeño delay para evitar bloqueos del navegador
 * @param {Array} links - Array de links de WhatsApp
 */
export const openMultipleWhatsApp = (links) => {
  links.forEach((linkData, index) => {
    setTimeout(() => {
      openWhatsApp(linkData.link);
    }, index * 500); // 500ms de delay entre cada apertura
  });
};

export default {
  generateWhatsAppLink,
  generateMultipleWhatsAppLinks,
  validateArgentinePhone,
  formatArgentinePhone,
  openWhatsApp,
  openMultipleWhatsApp
};