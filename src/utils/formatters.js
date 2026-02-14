// ============================================
// FORMATTERS & VALIDATORS
// ============================================
// Utilidades para formateo de datos y validaciones

// ============================================
// FORMATEO DE PRECIOS
// ============================================

/**
 * Convierte pesos a centavos (para almacenar en BD)
 * @param {number} pesos - Precio en pesos
 * @returns {number} Precio en centavos
 */
export const pesosTocents = (pesos) => {
  return Math.round(pesos * 100);
};

/**
 * Convierte centavos a pesos (para mostrar)
 * @param {number} centavos - Precio en centavos
 * @returns {number} Precio en pesos
 */
export const centsToPesos = (centavos) => {
  return centavos / 100;
};

/**
 * Formatea un precio en centavos a string con formato argentino
 * @param {number} centavos - Precio en centavos
 * @returns {string} Precio formateado (ej: "$1.250,00")
 */
export const formatPrice = (centavos) => {
  const pesos = centsToPesos(centavos);
  
  return new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(pesos);
};

/**
 * Formatea un precio sin el símbolo de moneda
 * @param {number} centavos - Precio en centavos
 * @returns {string} Precio formateado sin símbolo
 */
export const formatPriceNumber = (centavos) => {
  const pesos = centsToPesos(centavos);
  
  return pesos.toLocaleString('es-AR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
};

// ============================================
// FORMATEO DE TEXTO
// ============================================

/**
 * Capitaliza la primera letra de un string
 * @param {string} str - String a capitalizar
 * @returns {string} String capitalizado
 */
export const capitalize = (str) => {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

/**
 * Trunca un texto a una longitud máxima
 * @param {string} text - Texto a truncar
 * @param {number} maxLength - Longitud máxima
 * @returns {string} Texto truncado con "..." si es necesario
 */
export const truncateText = (text, maxLength) => {
  if (!text || text.length <= maxLength) return text;
  return text.substring(0, maxLength - 3) + '...';
};

/**
 * Sanitiza un nombre de archivo
 * @param {string} filename - Nombre de archivo
 * @returns {string} Nombre sanitizado
 */
export const sanitizeFilename = (filename) => {
  return filename
    .toLowerCase()
    .replace(/\s+/g, '_')      // Espacios a guiones bajos
    .replace(/[^a-z0-9._-]/g, '') // Solo alfanuméricos y .-_
    .substring(0, 100);        // Max 100 caracteres
};

// ============================================
// FORMATEO DE FECHAS
// ============================================

/**
 * Formatea una fecha de Firestore a string legible
 * @param {Object} timestamp - Timestamp de Firestore
 * @returns {string} Fecha formateada (ej: "13 Feb 2026")
 */
export const formatDate = (timestamp) => {
  if (!timestamp) return '';
  
  // Convertir Firestore Timestamp a Date
  const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
  
  return new Intl.DateTimeFormat('es-AR', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  }).format(date);
};

/**
 * Formatea una fecha con hora
 * @param {Object} timestamp - Timestamp de Firestore
 * @returns {string} Fecha y hora formateadas
 */
export const formatDateTime = (timestamp) => {
  if (!timestamp) return '';
  
  const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
  
  return new Intl.DateTimeFormat('es-AR', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  }).format(date);
};

/**
 * Calcula cuánto tiempo hace desde una fecha
 * @param {Object} timestamp - Timestamp de Firestore
 * @returns {string} Tiempo relativo (ej: "hace 2 horas")
 */
export const timeAgo = (timestamp) => {
  if (!timestamp) return '';
  
  const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
  const now = new Date();
  const diffMs = now - date;
  const diffMins = Math.floor(diffMs / 60000);
  const diffHours = Math.floor(diffMs / 3600000);
  const diffDays = Math.floor(diffMs / 86400000);
  
  if (diffMins < 1) return 'recién';
  if (diffMins < 60) return `hace ${diffMins} min`;
  if (diffHours < 24) return `hace ${diffHours}h`;
  if (diffDays < 7) return `hace ${diffDays}d`;
  
  return formatDate(timestamp);
};

// ============================================
// VALIDACIONES
// ============================================

/**
 * Valida si un string es un email válido
 * @param {string} email - Email a validar
 * @returns {boolean} true si es válido
 */
export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Valida si un número es positivo
 * @param {number} num - Número a validar
 * @returns {boolean} true si es positivo
 */
export const isPositiveNumber = (num) => {
  return !isNaN(num) && num > 0;
};

/**
 * Valida si un string no está vacío
 * @param {string} str - String a validar
 * @returns {boolean} true si no está vacío
 */
export const isNotEmpty = (str) => {
  return str && str.trim().length > 0;
};

/**
 * Valida un producto antes de guardar
 * @param {Object} producto - Datos del producto
 * @returns {Object} { valid: boolean, errors: Array }
 */
export const validateProduct = (producto) => {
  const errors = [];
  
  if (!isNotEmpty(producto.nombre)) {
    errors.push('El nombre del producto es obligatorio');
  }
  
  if (!isPositiveNumber(producto.precio)) {
    errors.push('El precio debe ser mayor a 0');
  }
  
  if (!isPositiveNumber(producto.stock)) {
    errors.push('El stock debe ser mayor a 0');
  }
  
  if (!producto.categoria) {
    errors.push('Debe seleccionar una categoría');
  }
  
  return {
    valid: errors.length === 0,
    errors
  };
};

/**
 * Valida información del cliente antes de generar pedido
 * @param {Object} clienteInfo - Datos del cliente
 * @returns {Object} { valid: boolean, errors: Array }
 */
export const validateClientInfo = (clienteInfo) => {
  const errors = [];
  
  if (!isNotEmpty(clienteInfo.nombre)) {
    errors.push('El nombre es obligatorio');
  }
  
  if (!isNotEmpty(clienteInfo.telefono)) {
    errors.push('El teléfono es obligatorio');
  }
  
  if (!isNotEmpty(clienteInfo.ubicacion)) {
    errors.push('La ubicación es obligatoria');
  }
  
  return {
    valid: errors.length === 0,
    errors
  };
};

// ============================================
// CATEGORÍAS DE PRODUCTOS
// ============================================

export const CATEGORIAS = {
  verduras: {
    id: 'verduras',
    nombre: 'Verduras',
    emoji: '🥬',
    color: 'green'
  },
  lacteos: {
    id: 'lacteos',
    nombre: 'Lácteos',
    emoji: '🥛',
    color: 'blue'
  },
  conservas: {
    id: 'conservas',
    nombre: 'Conservas',
    emoji: '🥫',
    color: 'amber'
  }
};

/**
 * Obtiene la información de una categoría por su ID
 * @param {string} categoriaId - ID de la categoría
 * @returns {Object} Datos de la categoría
 */
export const getCategoriaInfo = (categoriaId) => {
  return CATEGORIAS[categoriaId] || CATEGORIAS.verduras;
};

// ============================================
// UNIDADES DE MEDIDA
// ============================================

export const UNIDADES = [
  { value: 'unidad', label: 'Unidad' },
  { value: 'kg', label: 'Kilogramo' },
  { value: 'litro', label: 'Litro' },
  { value: 'docena', label: 'Docena' },
  { value: 'atado', label: 'Atado' }
];

/**
 * Obtiene el label de una unidad
 * @param {string} unidadValue - Valor de la unidad
 * @returns {string} Label de la unidad
 */
export const getUnidadLabel = (unidadValue) => {
  const unidad = UNIDADES.find(u => u.value === unidadValue);
  return unidad ? unidad.label : unidadValue;
};

// ============================================
// HELPERS DE IMAGEN
// ============================================

/**
 * Valida si un archivo es una imagen válida
 * @param {File} file - Archivo a validar
 * @returns {Object} { valid: boolean, error: string }
 */
export const validateImageFile = (file) => {
  // Tipos MIME permitidos
  const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
  
  // Tamaño máximo: 5MB
  const maxSize = 5 * 1024 * 1024;
  
  if (!file) {
    return { valid: false, error: 'No se seleccionó ningún archivo' };
  }
  
  if (!allowedTypes.includes(file.type)) {
    return { valid: false, error: 'Formato no permitido. Use JPG, PNG o WebP' };
  }
  
  if (file.size > maxSize) {
    return { valid: false, error: 'La imagen no debe superar 5MB' };
  }
  
  return { valid: true, error: null };
};

/**
 * Genera un placeholder de imagen para productos sin foto
 * @param {string} productName - Nombre del producto
 * @returns {string} URL de placeholder
 */
export const getImagePlaceholder = (productName) => {
  // Usando DiceBear API para generar avatares únicos basados en el nombre
  const seed = encodeURIComponent(productName || 'producto');
  return `https://api.dicebear.com/7.x/shapes/svg?seed=${seed}&backgroundColor=b6e3f4`;
};

export default {
  // Precios
  pesosTocents,
  centsToPesos,
  formatPrice,
  formatPriceNumber,
  
  // Texto
  capitalize,
  truncateText,
  sanitizeFilename,
  
  // Fechas
  formatDate,
  formatDateTime,
  timeAgo,
  
  // Validaciones
  isValidEmail,
  isPositiveNumber,
  isNotEmpty,
  validateProduct,
  validateClientInfo,
  
  // Categorías y Unidades
  CATEGORIAS,
  getCategoriaInfo,
  UNIDADES,
  getUnidadLabel,
  
  // Imágenes
  validateImageFile,
  getImagePlaceholder
};