import { useState, useRef, useEffect } from 'react';
import { Camera, X, Loader, Save, Trash2, AlertCircle, Phone } from 'lucide-react';
import { db, storage } from '../../services/firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { collection, addDoc, updateDoc, doc } from 'firebase/firestore';

const ProductForm = ({ colonoData, producto, onSuccess, onCancel }) => {
  const [nombre, setNombre] = useState(producto?.nombre || '');
  const [precio, setPrecio] = useState(producto?.precio ? (producto.precio / 100).toString() : '');
  const [categoria, setCategoria] = useState(producto?.categoria || '');
  const [stock, setStock] = useState(producto?.stock || 0);
  
  // ✅ NUEVO: Estado para el teléfono (toma el de colonoData si existe)
  const [telefono, setTelefono] = useState(producto?.colonoTelefono || colonoData?.telefono || '');
  
  const [imageFile, setImageFile] = useState(null);
  const [preview, setPreview] = useState(producto?.imagen || null);
  const [loading, setLoading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [error, setError] = useState('');
  
  const fileInputRef = useRef(null);

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => setError(''), 5000);
      return () => clearTimeout(timer);
    }
  }, [error]);

  const handleCapture = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (!file.type.startsWith('image/')) {
      setError('Por favor seleccioná una imagen válida.');
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      setError('La imagen es muy grande. Máximo 5MB.');
      return;
    }
    setImageFile(file);
    setPreview(URL.createObjectURL(file));
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!producto && !imageFile) {
      setError('Debes seleccionar una foto del producto para poder venderlo.');
      return;
    }

    // ✅ VALIDACIÓN: Teléfono obligatorio
    if (!telefono || telefono.trim().length < 8) {
      setError('Por favor, ingresá un teléfono de contacto válido para que te puedan comprar.');
      return;
    }

    const precioNum = parseFloat(precio);
    if (isNaN(precioNum) || precioNum <= 0) {
      setError('El precio debe ser mayor a 0.');
      return;
    }

    setLoading(true);
    try {
      let imageUrl = producto?.imagen || '';

      if (imageFile) {
        setUploadProgress(25);
        const storageRef = ref(storage, `productos/${colonoData.id}/${Date.now()}_${imageFile.name}`);
        const snapshot = await uploadBytes(storageRef, imageFile);
        imageUrl = await getDownloadURL(snapshot.ref);
      }

      const datosProducto = {
        nombre: nombre.trim(),
        precio: Math.round(precioNum * 100),
        categoria,
        stock: parseInt(stock),
        imagen: imageUrl,
        colonoId: colonoData.id,
        colonoNombre: colonoData.nombre,
        colonoTelefono: telefono.trim(), // ✅ GUARDAMOS EL TELÉFONO EN FIRESTORE
        updatedAt: new Date()
      };

      if (producto?.id) {
        await updateDoc(doc(db, 'productos', producto.id), datosProducto);
      } else {
        await addDoc(collection(db, 'productos'), {
          ...datosProducto,
          createdAt: new Date()
        });
      }

      onSuccess();
    } catch (error) {
      console.error("Error al guardar:", error);
      setError('Hubo un error al guardar. Revisa tu conexión.');
    } finally {
      setLoading(false);
    }
  };

  const handleRemoveImage = () => {
    setPreview(null);
    setImageFile(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {error && (
        <div className="bg-red-50 border-2 border-red-200 rounded-xl p-3 flex items-start gap-2 animate-bounce">
          <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-red-700 font-medium">{error}</p>
        </div>
      )}

      {/* SECCIÓN IMAGEN */}
      <div className="flex flex-col items-center">
        <div 
          onClick={() => !loading && fileInputRef.current.click()}
          className={`w-full h-48 border-2 border-dashed rounded-2xl bg-green-50 flex flex-col items-center justify-center overflow-hidden transition-all ${
            preview ? 'border-green-500' : 'border-green-300 hover:bg-green-100'
          } ${loading ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
        >
          {preview ? (
            <img src={preview} alt="Vista previa" className="w-full h-full object-cover" />
          ) : (
            <div className="text-center p-4">
              <Camera className="w-10 h-10 text-green-600 mx-auto mb-2" />
              <p className="text-sm font-bold text-green-700">Tocar para seleccionar foto</p>
              <p className="text-xs text-gray-500">Cámara o Galería</p>
            </div>
          )}
        </div>
        <input type="file" ref={fileInputRef} accept="image/*" onChange={handleCapture} className="hidden" disabled={loading} />
      </div>

      {/* CAMPOS TEXTO */}
      <div className="space-y-3">
        <div>
          <label className="text-xs font-bold text-gray-500 uppercase ml-1">Nombre del Producto *</label>
          <input
            type="text"
            className="w-full p-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-green-500 outline-none transition-all"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="text-xs font-bold text-gray-500 uppercase ml-1">Precio (ARS) *</label>
            <input
              type="number"
              className="w-full p-3 rounded-xl border border-gray-200 bg-gray-50 focus:ring-2 focus:ring-green-500 outline-none"
              value={precio}
              onChange={(e) => setPrecio(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="text-xs font-bold text-gray-500 uppercase ml-1">Stock *</label>
            <input
              type="number"
              className="w-full p-3 rounded-xl border border-gray-200 bg-gray-50 focus:ring-2 focus:ring-green-500 outline-none"
              value={stock}
              onChange={(e) => setStock(e.target.value)}
              required
            />
          </div>
        </div>

        <div>
          <label className="text-xs font-bold text-gray-500 uppercase ml-1">Categoría *</label>
          <select
            className="w-full p-3 rounded-xl border border-gray-200 bg-gray-50 focus:ring-2 focus:ring-green-500 outline-none"
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
            required
          >
            <option value="">Seleccionar Categoría</option>
            <option value="Verduras">Verduras</option>
            <option value="Frutas">Frutas</option>
            <option value="Panificados">Panificados</option>
            <option value="Lácteos">Lácteos</option>
            <option value="Otros">Otros</option>
          </select>
        </div>

        {/* ✅ CAMPO NUEVO: TELÉFONO DE WHATSAPP */}
        <div>
          <label className="text-xs font-bold text-gray-500 uppercase ml-1 flex items-center gap-1">
            <Phone size={12}/> Teléfono de WhatsApp *
          </label>
          <input
            type="tel"
            placeholder="Ej: 3757123456"
            className="w-full p-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-green-500 outline-none transition-all"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
            required
          />
          <p className="text-[10px] text-gray-400 mt-1 ml-1 italic">
            Sin el +54, solo el código de área y el número.
          </p>
        </div>
      </div>

      {/* BOTONES */}
      <div className="flex gap-3 pt-2">
        <button
          type="button"
          onClick={onCancel}
          className="flex-1 p-3 rounded-xl font-bold text-gray-500 hover:bg-gray-100 transition-colors"
          disabled={loading}
        >
          Cancelar
        </button>
        <button
          type="submit"
          className="flex-2 bg-green-600 text-white p-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-green-700 transition-all shadow-lg shadow-green-200 disabled:opacity-50"
          disabled={loading}
        >
          {loading ? <Loader className="animate-spin" /> : <Save size={20} />}
          {producto ? 'Actualizar' : 'Publicar'}
        </button>
      </div>
    </form>
  );
};

export default ProductForm;
