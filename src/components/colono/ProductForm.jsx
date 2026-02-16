import { useState, useRef, useEffect } from 'react';
import { Camera, X, Loader, Save, Trash2, AlertCircle } from 'lucide-react';
import { db, storage } from '../../services/firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { collection, addDoc, updateDoc, doc } from 'firestore';

const ProductForm = ({ colonoData, producto, onSuccess, onCancel }) => {
  const [nombre, setNombre] = useState(producto?.nombre || '');
  const [precio, setPrecio] = useState(producto?.precio ? (producto.precio / 100).toString() : '');
  const [categoria, setCategoria] = useState(producto?.categoria || '');
  const [stock, setStock] = useState(producto?.stock || 0);
  
  const [imageFile, setImageFile] = useState(null);
  const [preview, setPreview] = useState(producto?.imagen || null);
  const [loading, setLoading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [error, setError] = useState('');
  
  const fileInputRef = useRef(null);

  // Limpiar error después de 5 segundos
  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => setError(''), 5000);
      return () => clearTimeout(timer);
    }
  }, [error]);

  // ✅ MEJORADO: Manejar selección de imagen desde cámara O galería
  const handleCapture = (e) => {
    const file = e.target.files?.[0];
    
    if (!file) return;

    // Validar tipo
    if (!file.type.startsWith('image/')) {
      setError('Por favor seleccioná una imagen válida.');
      return;
    }

    // Validar tamaño (máximo 5MB)
    if (file.size > 5 * 1024 * 1024) {
      setError('La imagen es muy grande. Máximo 5MB.');
      return;
    }

    // Guardar archivo y crear preview
    setImageFile(file);
    setPreview(URL.createObjectURL(file));
    setError(''); // Limpiar cualquier error previo
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    // ✅ VALIDACIÓN: Imagen obligatoria para productos nuevos
    if (!producto && !imageFile) {
      setError('Debes seleccionar una foto del producto para poder venderlo.');
      return;
    }

    // Validar precio
    const precioNum = parseFloat(precio);
    if (isNaN(precioNum) || precioNum <= 0) {
      setError('El precio debe ser mayor a 0.');
      return;
    }

    // Validar stock
    const stockNum = parseInt(stock);
    if (isNaN(stockNum) || stockNum < 0) {
      setError('El stock no puede ser negativo.');
      return;
    }

    setLoading(true);
    setUploadProgress(0);

    try {
      let imageUrl = producto?.imagen || '';

      // Si hay una foto nueva, subirla a Firebase Storage
      if (imageFile) {
        setUploadProgress(25);
        const storageRef = ref(storage, `productos/${colonoData.id}/${Date.now()}_${imageFile.name}`);
        
        setUploadProgress(50);
        const snapshot = await uploadBytes(storageRef, imageFile);
        
        setUploadProgress(75);
        imageUrl = await getDownloadURL(snapshot.ref);
        
        setUploadProgress(100);
      }

      const datosProducto = {
        nombre: nombre.trim(),
        precio: Math.round(precioNum * 100), // Guardar en centavos
        categoria,
        stock: stockNum,
        imagen: imageUrl,
        colonoId: colonoData.id,
        colonoNombre: colonoData.nombre,
        updatedAt: new Date()
      };

      if (producto?.id) {
        // Editar existente
        await updateDoc(doc(db, 'productos', producto.id), datosProducto);
      } else {
        // Crear nuevo
        await addDoc(collection(db, 'productos'), {
          ...datosProducto,
          createdAt: new Date()
        });
      }

      onSuccess(); // Cierra el modal y refresca la lista
    } catch (error) {
      console.error("Error al guardar:", error);
      setError('Hubo un error al guardar el producto. Intentá de nuevo.');
    } finally {
      setLoading(false);
      setUploadProgress(0);
    }
  };

  const handleRemoveImage = () => {
    setPreview(null);
    setImageFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* 🚨 MENSAJE DE ERROR */}
      {error && (
        <div className="bg-red-50 border-2 border-red-200 rounded-xl p-3 flex items-start gap-2 animate-in slide-in-from-top">
          <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-red-700 font-medium">{error}</p>
        </div>
      )}

      {/* 📸 SECCIÓN DE CÁMARA E IMAGEN */}
      <div className="flex flex-col items-center">
        <div 
          onClick={() => !loading && fileInputRef.current.click()}
          className={`w-full h-48 border-2 border-dashed rounded-2xl bg-green-50 flex flex-col items-center justify-center overflow-hidden transition-all shadow-inner ${
            preview ? 'border-green-500 cursor-pointer' : 'border-green-300 cursor-pointer hover:bg-green-100'
          } ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          {preview ? (
            <div className="relative w-full h-full">
              <img src={preview} alt="Vista previa" className="w-full h-full object-cover" />
              {!loading && (
                <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                  <p className="text-white font-bold text-sm">Tocar para cambiar foto</p>
                </div>
              )}
            </div>
          ) : (
            <div className="text-center p-4">
              <Camera className="w-12 h-12 text-green-600 mx-auto mb-2" />
              <p className="text-sm font-bold text-green-700">Tocar para seleccionar foto</p>
              <p className="text-xs text-gray-500 mt-1">Cámara o Galería</p>
              <p className="text-xs text-red-600 font-semibold mt-1">* Obligatorio para vender</p>
            </div>
          )}
        </div>
        
        {/* ✅ INPUT MEJORADO: Sin capture="environment" para permitir elegir */}
        <input 
          type="file" 
          ref={fileInputRef}
          accept="image/*"
          onChange={handleCapture}
          className="hidden"
          disabled={loading}
        />
        
        {preview && !loading && (
          <button 
            type="button" 
            onClick={handleRemoveImage}
            className="mt-2 text-xs text-red-500 flex items-center gap-1 hover:underline font-medium"
          >
            <Trash2 size={12}/> Quitar foto y seleccionar otra
          </button>
        )}

        {/* 📊 BARRA DE PROGRESO AL SUBIR */}
        {loading && uploadProgress > 0 && (
          <div className="w-full mt-2">
            <div className="bg-gray-200 rounded-full h-2 overflow-hidden">
              <div 
                className="bg-green-600 h-full transition-all duration-300"
                style={{ width: `${uploadProgress}%` }}
              />
            </div>
            <p className="text-xs text-center text-gray-500 mt-1">
              {uploadProgress < 100 ? 'Subiendo foto...' : 'Guardando producto...'}
            </p>
          </div>
        )}
      </div>

      {/* CAMPOS DEL FORMULARIO */}
      <div className="grid grid-cols-1 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Nombre del Producto *
          </label>
          <input
            type="text"
            placeholder="Ej: Bollito Casero"
            className="w-full p-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-green-500 outline-none transition-all"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            disabled={loading}
            required
          />
        </div>
        
        <div className="grid grid-cols-2 gap-2">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Precio (ARS) *
            </label>
            <input
              type="number"
              step="0.01"
              placeholder="500.00"
              className="w-full p-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-green-500 outline-none"
              value={precio}
              onChange={(e) => setPrecio(e.target.value)}
              disabled={loading}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Stock *
            </label>
            <input
              type="number"
              placeholder="0"
              className="w-full p-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-green-500 outline-none"
              value={stock}
              onChange={(e) => setStock(e.target.value)}
              disabled={loading}
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Categoría *
          </label>
          <select
            className="w-full p-3 rounded-xl border border-gray-200 bg-white outline-none focus:ring-2 focus:ring-green-500"
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
            disabled={loading}
            required
          >
            <option value="">Seleccionar Categoría</option>
            <option value="Panificados">Panificados</option>
            <option value="Verduras">Verduras</option>
            <option value="Frutas">Frutas</option>
            <option value="Lácteos">Lácteos</option>
            <option value="Otros">Otros</option>
          </select>
        </div>
      </div>

      {/* BOTONES DE ACCIÓN */}
      <div className="flex gap-3 mt-6">
        <button
          type="button"
          onClick={onCancel}
          className="flex-1 py-3 px-4 text-gray-500 font-bold hover:bg-gray-100 rounded-xl transition-colors"
          disabled={loading}
        >
          Cancelar
        </button>
        <button
          type="submit"
          className="flex-1 py-3 px-4 bg-green-600 text-white font-bold rounded-xl hover:bg-green-700 shadow-lg shadow-green-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
          disabled={loading}
        >
          {loading ? (
            <>
              <Loader className="animate-spin" size={20} />
              <span>Guardando...</span>
            </>
          ) : (
            <>
              <Save size={20} />
              <span>{producto ? 'Actualizar' : 'Guardar'}</span>
            </>
          )}
        </button>
      </div>
    </form>
  );
};

export default ProductForm;