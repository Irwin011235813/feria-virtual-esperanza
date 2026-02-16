import { useState, useEffect } from 'react';
import { collection, getDocs, query, where, deleteDoc, doc } from 'firebase/firestore';
import { db, updateProducto } from "../../services/firebase";
import { obtenerColonoActual } from '../../services/auth';
import { useNavigate, useLocation } from 'react-router-dom';
import { Package, Plus, Minus, Edit2, Loader, X, Trash2 } from 'lucide-react';
import ProductForm from './ProductForm';

const ColonoAdmin = ({ isModalOpen, setIsModalOpen, onCloseModal, onOpenModal }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const [colonoSeleccionado, setColonoSeleccionado] = useState(null);
  const [loadingColono, setLoadingColono] = useState(true);
  const [productos, setProductos] = useState([]);
  const [loadingProductos, setLoadingProductos] = useState(false);
  const [productoAEditar, setProductoAEditar] = useState(null);
  const [productoBorrar, setProductoBorrar] = useState(null); // Para confirmación de borrado

  // 1. 🔥 Sincronización con la URL (?action=new) para abrir desde el Header
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    if (params.get("action") === "new") {
      setProductoAEditar(null);
      setIsModalOpen(true);
    }
  }, [location.search, setIsModalOpen]);

  // 2. 🎯 CIERRE CON TECLA ESC
  useEffect(() => {
    const handleEscKey = (e) => {
      if (e.key === 'Escape') {
        if (productoBorrar) {
          setProductoBorrar(null); // Cerrar modal de confirmación
        } else if (isModalOpen) {
          handleCerrarForm(false); // Cerrar modal de producto
        }
      }
    };

    document.addEventListener('keydown', handleEscKey);
    return () => document.removeEventListener('keydown', handleEscKey);
  }, [isModalOpen, productoBorrar]);

  useEffect(() => {
    cargarColonoAutenticado();
  }, []);

  useEffect(() => {
    if (colonoSeleccionado) {
      cargarProductosColono();
    }
  }, [colonoSeleccionado]);

  const cargarColonoAutenticado = async () => {
    try {
      const colono = await obtenerColonoActual();
      if (!colono) { navigate('/login'); return; }
      setColonoSeleccionado(colono);
    } catch (error) {
      console.error('Error cargando colono:', error);
      navigate('/login');
    } finally {
      setLoadingColono(false);
    }
  };

  const cargarProductosColono = async () => {
    setLoadingProductos(true);
    try {
      const q = query(collection(db, 'productos'), where('colonoId', '==', colonoSeleccionado.id));
      const snapshot = await getDocs(q);
      const lista = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      lista.sort((a, b) => a.nombre.localeCompare(b.nombre));
      setProductos(lista);
    } catch (error) {
      console.error('Error cargando productos:', error);
    } finally {
      setLoadingProductos(false);
    }
  };

  const actualizarStock = async (productoId, cambio) => {
    const producto = productos.find(p => p.id === productoId);
    const nuevoStock = Math.max(0, producto.stock + cambio);
    try {
      await updateProducto(productoId, { stock: nuevoStock });
      setProductos(prev => prev.map(p => p.id === productoId ? { ...p, stock: nuevoStock } : p));
    } catch (error) {
      console.error('Error actualizando stock:', error);
    }
  };

  const handleEditarProducto = (producto) => {
    setProductoAEditar(producto);
    setIsModalOpen(true);
  };

  // 🗑️ NUEVO: Confirmar eliminación
  const handleConfirmarEliminar = (producto) => {
    setProductoBorrar(producto);
  };

  // 🗑️ NUEVO: Eliminar producto
  const handleEliminarProducto = async () => {
    if (!productoBorrar) return;

    try {
      await deleteDoc(doc(db, 'productos', productoBorrar.id));
      setProductos(prev => prev.filter(p => p.id !== productoBorrar.id));
      setProductoBorrar(null);
    } catch (error) {
      console.error('Error eliminando producto:', error);
      alert('Error al eliminar el producto. Intentá de nuevo.');
    }
  };

  // ✅ Función crucial para destrabar el modal y limpiar la URL
  const handleCerrarForm = (huboCambios) => {
    setProductoAEditar(null);
    onCloseModal();
    if (huboCambios) cargarProductosColono();
  };

  // 3. 🖱️ MANEJADOR PARA CLIC EN EL OVERLAY
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      handleCerrarForm(false);
    }
  };

  if (loadingColono) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <Loader className="w-10 h-10 text-green-600 animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-24 relative">
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-3xl font-bold text-green-800 mb-1">Panel de Control</h1>
        <p className="text-gray-500 mb-8 font-medium">Gestiona tus productos y stock</p>

        {loadingProductos ? (
          <div className="text-center py-12"><Loader className="animate-spin mx-auto text-green-600" /></div>
        ) : productos.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-2xl shadow-sm border border-dashed border-gray-300">
            <Package className="w-12 h-12 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500 font-medium">Aún no tienes productos cargados.</p>
          </div>
        ) : (
          <div className="grid gap-4">
            {productos.map((producto) => (
              <div key={producto.id} className="bg-white rounded-xl shadow-sm p-5 border border-gray-100 flex items-center justify-between transition-all hover:shadow-md">
                
                {/* 📸 IMAGEN DEL PRODUCTO */}
                <div className="flex items-center gap-4 flex-1">
                  {producto.imagen ? (
                    <img 
                      src={producto.imagen} 
                      alt={producto.nombre}
                      className="w-16 h-16 object-cover rounded-lg border-2 border-green-100"
                    />
                  ) : (
                    <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center border-2 border-gray-200">
                      <Package className="w-8 h-8 text-gray-400" />
                    </div>
                  )}

                  <div>
                    <h3 className="font-bold text-gray-800 text-lg">{producto.nombre}</h3>
                    <p className="text-green-600 font-bold">${(producto.precio / 100).toFixed(2)}</p>
                    {producto.categoria && (
                      <span className="text-xs text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full mt-1 inline-block">
                        {producto.categoria}
                      </span>
                    )}
                  </div>
                </div>

                {/* CONTROLES DE STOCK Y ACCIONES */}
                <div className="flex items-center gap-3">
                  {/* Control de stock */}
                  <div className="flex items-center bg-gray-100 rounded-lg p-1 border border-gray-200">
                    <button 
                      onClick={() => actualizarStock(producto.id, -1)} 
                      className="p-2 text-red-500 hover:bg-red-50 rounded-md transition-colors"
                      title="Disminuir stock"
                    >
                      <Minus size={18}/>
                    </button>
                    <span className="w-12 text-center font-bold text-xl">{producto.stock}</span>
                    <button 
                      onClick={() => actualizarStock(producto.id, 1)} 
                      className="p-2 text-green-600 hover:bg-green-50 rounded-md transition-colors"
                      title="Aumentar stock"
                    >
                      <Plus size={18}/>
                    </button>
                  </div>

                  {/* Botón Editar */}
                  <button 
                    onClick={() => handleEditarProducto(producto)} 
                    className="p-2 text-blue-500 hover:bg-blue-50 rounded-lg transition-colors" 
                    title="Editar producto"
                  >
                    <Edit2 size={20}/>
                  </button>

                  {/* 🗑️ NUEVO: Botón Eliminar */}
                  <button 
                    onClick={() => handleConfirmarEliminar(producto)} 
                    className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors" 
                    title="Eliminar producto"
                  >
                    <Trash2 size={20}/>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* 🟢 BOTÓN FLOTANTE "+" CON Z-INDEX CORREGIDO */}
      <button
        onClick={onOpenModal}
        className="fixed bottom-24 right-8 bg-green-600 text-white w-16 h-16 rounded-full shadow-2xl flex items-center justify-center hover:bg-green-700 hover:scale-110 active:scale-95 transition-all z-[60] border-4 border-white"
        title="Cargar nuevo producto"
      >
        <Plus size={32} strokeWidth={3} />
      </button>

      {/* 🖼️ MODAL DE CARGA */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50 overflow-y-auto"
          onClick={handleOverlayClick}
        >
          <div 
            className="bg-white rounded-2xl max-w-lg w-full p-8 shadow-2xl relative my-auto animate-in zoom-in duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => handleCerrarForm(false)} 
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-800 transition-colors p-1"
            >
              <X size={24} />
            </button>

            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              {productoAEditar ? 'Editar Producto' : 'Cargar Nuevo Producto'}
            </h2>
            
            <ProductForm 
              colonoData={colonoSeleccionado} 
              producto={productoAEditar} 
              onSuccess={() => handleCerrarForm(true)} 
              onCancel={() => handleCerrarForm(false)}
            />
          </div>
        </div>
      )}

      {/* 🗑️ NUEVO: MODAL DE CONFIRMACIÓN DE ELIMINACIÓN */}
      {productoBorrar && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-[70]"
          onClick={() => setProductoBorrar(null)}
        >
          <div 
            className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl animate-in zoom-in duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Icono de advertencia */}
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Trash2 className="w-6 h-6 text-red-600" />
            </div>

            <h3 className="text-xl font-bold text-gray-800 text-center mb-2">
              ¿Eliminar producto?
            </h3>
            
            <p className="text-gray-600 text-center mb-6">
              Estás por eliminar <span className="font-bold text-gray-800">"{productoBorrar.nombre}"</span>. Esta acción no se puede deshacer.
            </p>

            <div className="flex gap-3">
              <button
                onClick={() => setProductoBorrar(null)}
                className="flex-1 py-3 px-4 bg-gray-100 text-gray-700 font-bold rounded-xl hover:bg-gray-200 transition-colors"
              >
                Cancelar
              </button>
              <button
                onClick={handleEliminarProducto}
                className="flex-1 py-3 px-4 bg-red-600 text-white font-bold rounded-xl hover:bg-red-700 transition-colors flex items-center justify-center gap-2"
              >
                <Trash2 size={20} />
                Eliminar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ColonoAdmin;