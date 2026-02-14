// ============================================
// PRODUCT FORM COMPONENT
// ============================================
// Formulario simple de 4 campos para que colonos carguen productos

import React, { useState } from 'react';
import { createProducto, uploadProductImage } from '../../services/firebase';
import { 
  validateProduct, 
  validateImageFile, 
  CATEGORIAS, 
  UNIDADES,
  pesosTocents 
} from '../../utils/formatters';

const ProductForm = ({ colonoData, onSuccess }) => {
  const [formData, setFormData] = useState({
    nombre: '',
    precio: '',
    stock: '',
    categoria: 'verduras',
    unidad: 'unidad',
    descripcion: ''
  });

  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState([]);

  // Handler para cambios en inputs
  const handleChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value
    });
    
    // Limpiar errores al editar
    if (errors.length > 0) {
      setErrors([]);
    }
  };

  // Handler para selección de imagen
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    
    if (!file) {
      setImageFile(null);
      setImagePreview(null);
      return;
    }

    // Validar imagen
    const validation = validateImageFile(file);
    if (!validation.valid) {
      setErrors([validation.error]);
      return;
    }

    setImageFile(file);
    
    // Generar preview
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  // Handler para submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors([]);
    setLoading(true);

    try {
      // Preparar datos del producto
      const productData = {
        nombre: formData.nombre.trim(),
        precio: pesosTocents(parseFloat(formData.precio)),
        stock: parseInt(formData.stock),
        categoria: formData.categoria,
        unidad: formData.unidad,
        descripcion: formData.descripcion.trim(),
        colonoId: colonoData.id,
        colonoNombre: colonoData.nombre,
        colonoTelefono: colonoData.telefono
      };

      // Validar producto
      const validation = validateProduct(productData);
      if (!validation.valid) {
        setErrors(validation.errors);
        setLoading(false);
        return;
      }

      // Validar que haya imagen
      if (!imageFile) {
        setErrors(['Debes seleccionar una imagen del producto']);
        setLoading(false);
        return;
      }

      // Subir imagen
      const imageUrl = await uploadProductImage(imageFile, formData.nombre);
      productData.imagen = imageUrl;

      // Crear producto en Firestore
      const productId = await createProducto(productData);

      // Limpiar formulario
      setFormData({
        nombre: '',
        precio: '',
        stock: '',
        categoria: 'verduras',
        unidad: 'unidad',
        descripcion: ''
      });
      setImageFile(null);
      setImagePreview(null);

      // Callback de éxito
      if (onSuccess) {
        onSuccess(productId);
      }

      alert('✅ Producto creado exitosamente');
    } catch (error) {
      console.error('Error creando producto:', error);
      setErrors(['Error al crear el producto. Intenta nuevamente.']);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        ➕ Cargar Nuevo Producto
      </h2>

      {/* Errores de validación */}
      {errors.length > 0 && (
        <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-sm font-semibold text-red-800 mb-1">
            ⚠️ Errores en el formulario:
          </p>
          <ul className="text-sm text-red-600 list-disc list-inside">
            {errors.map((error, index) => (
              <li key={index}>{error}</li>
            ))}
          </ul>
        </div>
      )}

      <div className="space-y-4">
        {/* Nombre del producto */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Nombre del producto *
          </label>
          <input
            type="text"
            value={formData.nombre}
            onChange={(e) => handleChange('nombre', e.target.value)}
            placeholder="Ej: Lechuga criolla"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
            required
          />
        </div>

        {/* Precio y Stock en una fila */}
        <div className="grid grid-cols-2 gap-4">
          {/* Precio */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Precio (en pesos) *
            </label>
            <input
              type="number"
              step="0.01"
              min="0"
              value={formData.precio}
              onChange={(e) => handleChange('precio', e.target.value)}
              placeholder="800"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              required
            />
          </div>

          {/* Stock */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Stock disponible *
            </label>
            <input
              type="number"
              min="1"
              value={formData.stock}
              onChange={(e) => handleChange('stock', e.target.value)}
              placeholder="25"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              required
            />
          </div>
        </div>

        {/* Categoría y Unidad en una fila */}
        <div className="grid grid-cols-2 gap-4">
          {/* Categoría */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Categoría *
            </label>
            <select
              value={formData.categoria}
              onChange={(e) => handleChange('categoria', e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              required
            >
              {Object.values(CATEGORIAS).map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.emoji} {cat.nombre}
                </option>
              ))}
            </select>
          </div>

          {/* Unidad */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Unidad de venta *
            </label>
            <select
              value={formData.unidad}
              onChange={(e) => handleChange('unidad', e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              required
            >
              {UNIDADES.map((unidad) => (
                <option key={unidad.value} value={unidad.value}>
                  {unidad.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Descripción (opcional) */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Descripción (opcional)
          </label>
          <textarea
            value={formData.descripcion}
            onChange={(e) => handleChange('descripcion', e.target.value)}
            placeholder="Lechuga fresca de temporada, cultivada sin agroquímicos"
            rows={3}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none"
          />
        </div>

        {/* Upload de imagen */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Foto del producto *
          </label>
          
          {/* Input file oculto */}
          <input
            type="file"
            accept="image/jpeg,image/jpg,image/png,image/webp"
            onChange={handleImageChange}
            className="hidden"
            id="product-image"
            required
          />

          {/* Preview de imagen o botón de upload */}
          {imagePreview ? (
            <div className="relative">
              <img
                src={imagePreview}
                alt="Preview"
                className="w-full h-48 object-cover rounded-lg"
              />
              <button
                type="button"
                onClick={() => {
                  setImageFile(null);
                  setImagePreview(null);
                }}
                className="absolute top-2 right-2 p-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors"
              >
                🗑️
              </button>
            </div>
          ) : (
            <label
              htmlFor="product-image"
              className="flex flex-col items-center justify-center w-full h-48 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-blue-500 hover:bg-blue-50 transition-colors"
            >
              <div className="text-center">
                <div className="text-4xl mb-2">📷</div>
                <p className="text-sm text-gray-600">
                  Haz clic para seleccionar una imagen
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  JPG, PNG o WebP (máx. 5MB)
                </p>
              </div>
            </label>
          )}
        </div>
      </div>

      {/* Botón submit */}
      <button
        type="submit"
        disabled={loading}
        className={`mt-6 w-full py-3 rounded-lg font-semibold transition-colors ${
          loading
            ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
            : 'bg-blue-600 text-white hover:bg-blue-700'
        }`}
      >
        {loading ? (
          <span className="flex items-center justify-center">
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Guardando...
          </span>
        ) : (
          '✅ Guardar Producto'
        )}
      </button>
    </form>
  );
};

export default ProductForm;