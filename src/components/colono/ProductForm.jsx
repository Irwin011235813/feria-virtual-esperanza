import { useState, useRef, useEffect } from 'react';
import { Camera, X, Loader, Save, Trash2 } from 'lucide-react';
import { db, storage } from '../../services/firebase'; // Ajusta si tu ruta es distinta
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { collection, addDoc, updateDoc, doc } from 'firebase/firestore';

const ProductForm = ({ colonoData, producto, onSuccess, onCancel }) => {
  const [nombre, setNombre] = useState(producto?.nombre || '');
  const [precio, setPrecio] = useState(producto?.precio ? (producto.precio / 100).toString() : '');
  const [categoria, setCategoria] = useState(producto?.categoria || '');
  const [stock, setStock] = useState(producto?.stock || 0);
  
  const [imageFile, setImageFile] = useState(null);
  const [preview, setPreview] = useState(producto?.imagen || null);
  const [loading, setLoading] = useState(false);
  
  const fileInputRef = useRef(null);

  // Manejar captura de cámara/archivo
  const handleCapture = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      let imageUrl = producto?.imagen || '';

      // Si hay una foto nueva, subirla a Firebase Storage
      if (imageFile) {
        const storageRef = ref(storage, `productos/${Date.now()}_${imageFile.name}`);
        const snapshot = await uploadBytes(storageRef, imageFile);
        imageUrl = await getDownloadURL(snapshot.ref);
      }

      const datosProducto = {
        nombre,
        precio: Math.round(parseFloat(precio) * 100), // Guardar en centavos
        categoria,
        stock: parseInt(stock),
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
      alert("Hubo un error al guardar el producto");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* 📸 SECCIÓN DE CÁMARA E IMAGEN */}
      <div className="flex flex-col items-center">
        <div 
          onClick={() => fileInputRef.current.click()}
          className="w-full h-48 border-2 border-dashed border-green-300 rounded-2xl bg-green-50 flex flex-col items-center justify-center cursor-pointer overflow-hidden hover:bg-green-100 transition-all shadow-inner"
        >
          {preview ? (
            <img src={preview} alt="Vista previa" className="w-full h-full object-cover" />
          ) : (
            <div className="text-center p-4">
              <Camera className="w-12 h-12 text-green-600 mx-auto mb-2" />
              <p className="text-sm font-bold text-green-700">Tocar para sacar foto</p>
              <p className="text-xs text-green-500">Obligatorio para vender</p>
            </div>
          )}
        </div>
        <input 
          type="file" 
          ref={fileInputRef}
          accept="image/*" 
          capture="environment" 
          onChange={handleCapture}
          className="hidden" 
        />
        {preview && (
          <button 
            type="button" 
            onClick={() => {setPreview(null); setImageFile(null);}}
            className="mt-2 text-xs text-red-500 flex items-center gap-1 hover:underline"
          >
            <Trash2 size={12}/> Quitar foto
          </button>
        )}
      </div>

      {/* CAMPOS DEL FORMULARIO */}
      <div className="grid grid-cols-1 gap-4">
        <input
          type="text"
          placeholder="Nombre (ej: Bollito Casero)"
          className="w-full p-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-green-500 outline-none transition-all"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />
        
        <div className="flex gap-2">
          <input
            type="number"
            step="0.01"
            placeholder="Precio (ej: 500)"
            className="flex-1 p-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-green-500 outline-none"
            value={precio}
            onChange={(e) => setPrecio(e.target.value)}
            required
          />
          <input
            type="number"
            placeholder="Stock"
            className="w-24 p-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-green-500 outline-none"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
            required
          />
        </div>

        <select
          className="w-full p-3 rounded-xl border border-gray-200 bg-white outline-none focus:ring-2 focus:ring-green-500"
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
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
          className="flex-1 py-3 px-4 bg-green-600 text-white font-bold rounded-xl hover:bg-green-700 shadow-lg shadow-green-200 flex items-center justify-center gap-2 disabled:opacity-50"
          disabled={loading}
        >
          {loading ? <Loader className="animate-spin" size={20} /> : <><Save size={20} /> Guardar</>}
        </button>
      </div>
    </form>
  );
};

export default ProductForm;
