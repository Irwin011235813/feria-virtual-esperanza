import { useState, useEffect } from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db, updateProducto } from "../../services/firebase";
import { obtenerColonoActual, cerrarSesionColono } from '../../services/auth';
import { useNavigate } from 'react-router-dom';
import { Package, Plus, Minus, Edit2, PlusCircle, LogOut, Loader } from 'lucide-react';
import ProductForm from './ProductForm';

/**
 * Panel de Administración para Colonos (CON AUTENTICACIÓN)
 * Permite gestión ultra-simple de stock desde el celular
 * - Autenticación con Firebase Auth
 * - Actualización de stock con +/- en 1 clic
 * - Acceso al formulario de productos para agregar/editar
 */
const ColonoAdmin = () => {
  const navigate = useNavigate();

  // Estado para el colono autenticado
  const [colonoSeleccionado, setColonoSeleccionado] = useState(null);
  const [loadingColono, setLoadingColono] = useState(true);

  // Estado para productos del colono
  const [productos, setProductos] = useState([]);
  const [loadingProductos, setLoadingProductos] = useState(false);

  // Estado para el modal del formulario
  const [showForm, setShowForm] = useState(false);
  const [productoAEditar, setProductoAEditar] = useState(null);

  // Estado para feedback visual
  const [updatingStock, setUpdatingStock] = useState({});

  // Cargar datos del colono autenticado al montar
  useEffect(() => {
    cargarColonoAutenticado();
  }, []);

  // Cargar productos cuando se obtiene el colono
  useEffect(() => {
    if (colonoSeleccionado) {
      cargarProductosColono();
    }
  }, [colonoSeleccionado]);

  /**
   * Obtiene los datos del colono actualmente autenticado
   */
  const cargarColonoAutenticado = async () => {
    try {
      const colono = await obtenerColonoActual();
      
      if (!colono) {
        // Si no hay colono, redirigir al login
        navigate('/login');
        return;
      }

      setColonoSeleccionado(colono);
    } catch (error) {
      console.error('Error cargando colono:', error);
      navigate('/login');
    } finally {
      setLoadingColono(false);
    }
  };

  /**
   * Obtiene productos del colono autenticado
   */
  const cargarProductosColono = async () => {
    setLoadingProductos(true);
    try {
      const q = query(
        collection(db, 'productos'),
        where('colonoId', '==', colonoSeleccionado.id)
      );
      const productosSnapshot = await getDocs(q);
      const productosList = productosSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      // Ordenar por nombre para mejor UX
      productosList.sort((a, b) => a.nombre.localeCompare(b.nombre));
      setProductos(productosList);
    } catch (error) {
      console.error('Error cargando productos:', error);
      alert('Error al cargar productos. Intenta nuevamente.');
    } finally {
      setLoadingProductos(false);
    }
  };

  /**
   * Actualiza el stock de un producto (incremento o decremento)
   * @param {string} productoId - ID del producto a actualizar
   * @param {number} cambio - Cantidad a sumar o restar (1 o -1)
   */
  const actualizarStock = async (productoId, cambio) => {
    const producto = productos.find(p => p.id === productoId);
    const nuevoStock = Math.max(0, producto.stock + cambio);

    setUpdatingStock(prev => ({ ...prev, [productoId]: true }));

    try {
      await updateProducto(productoId, { stock: nuevoStock });
      
      setProductos(prev =>
        prev.map(p =>
          p.id === productoId ? { ...p, stock: nuevoStock } : p
        )
      );
    } catch (error) {
      console.error('Error actualizando stock:', error);
      alert('Error al actualizar stock. Intenta nuevamente.');
    } finally {
      setUpdatingStock(prev => ({ ...prev, [productoId]: false }));
    }
  };

  /**
   * Abre el formulario para crear un nuevo producto
   */
  const handleNuevoProducto = () => {
    setProductoAEditar(null);
    setShowForm(true);
  };

  /**
   * Abre el formulario para editar un producto existente
   */
  const handleEditarProducto = (producto) => {
    setProductoAEditar(producto);
    setShowForm(true);
  };

  /**
   * Cierra el formulario y recarga productos si hubo cambios
   */
  const handleCerrarForm = (huboCambios) => {
    setShowForm(false);
    setProductoAEditar(null);
    if (huboCambios) {
      cargarProductosColono();
    }
  };

  /**
   * Cierra sesión y redirige al login
   */
  const handleCerrarSesion = async () => {
    if (confirm('¿Seguro que quieres cerrar sesión?')) {
      try {
        await cerrarSesionColono();
        navigate('/login');
      } catch (error) {
        console.error('Error cerrando sesión:', error);
        alert('Error al cerrar sesión');
      }
    }
  };

  // PANTALLA DE LOADING
  if (loadingColono) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center">
        <div className="text-center">
          <Loader className="w-12 h-12 text-green-600 animate-spin mx-auto mb-4" />
          <p className="text-gray-600 font-medium">Cargando panel...</p>
        </div>
      </div>
    );
  }

  // PANTALLA DE GESTIÓN DE PRODUCTOS
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header con info del colono y botón de cerrar sesión */}
      <div className="bg-green-600 text-white p-4 shadow-lg sticky top-0 z-10">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <span className="font-bold text-lg">
                  {colonoSeleccionado?.nombre?.charAt(0).toUpperCase() || 'C'}
                </span>
              </div>
              <div>
                <h2 className="font-bold text-lg">
                  {colonoSeleccionado?.nombre || 'Colono'}
                </h2>
                <p className="text-sm text-green-100">
                  {productos.length} productos
                </p>
              </div>
            </div>
            <button
              onClick={handleCerrarSesion}
              className="p-2 hover:bg-white/10 rounded-lg transition-colors"
              title="Cerrar sesión"
            >
              <LogOut className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Lista de Productos */}
      <div className="max-w-4xl mx-auto p-4">
        {loadingProductos ? (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto"></div>
            <p className="text-gray-600 mt-4">Cargando productos...</p>
          </div>
        ) : productos.length === 0 ? (
          <div className="text-center py-12">
            <Package className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              No tienes productos todavía
            </h3>
            <p className="text-gray-500 mb-6">
              Agrega tu primer producto para comenzar a vender
            </p>
            <button
              onClick={handleNuevoProducto}
              className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors"
            >
              <PlusCircle className="w-5 h-5" />
              Agregar Producto
            </button>
          </div>
        ) : (
          <div className="space-y-3">
            {productos.map((producto) => (
              <div
                key={producto.id}
                className="bg-white rounded-lg shadow-md p-4 border border-gray-200"
              >
                <div className="flex items-start gap-4">
                  {/* Imagen del producto */}
                  <div className="w-20 h-20 flex-shrink-0 bg-gray-100 rounded-lg overflow-hidden">
                    {producto.imagen ? (
                      <img
                        src={producto.imagen}
                        alt={producto.nombre}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <Package className="w-8 h-8 text-gray-400" />
                      </div>
                    )}
                  </div>

                  {/* Info del producto */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-gray-800 truncate">
                          {producto.nombre}
                        </h3>
                        <p className="text-green-600 font-bold">
                          ${(producto.precio / 100).toFixed(2)}
                        </p>
                      </div>
                      <button
                        onClick={() => handleEditarProducto(producto)}
                        className="p-2 text-gray-500 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors flex-shrink-0"
                        title="Editar producto"
                      >
                        <Edit2 className="w-5 h-5" />
                      </button>
                    </div>

                    {/* Controles de Stock */}
                    <div className="flex items-center gap-3">
                      <span className="text-sm text-gray-600 font-medium">
                        Stock:
                      </span>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => actualizarStock(producto.id, -1)}
                          disabled={producto.stock === 0 || updatingStock[producto.id]}
                          className="w-10 h-10 flex items-center justify-center bg-red-100 text-red-700 rounded-lg hover:bg-red-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors active:scale-95"
                        >
                          <Minus className="w-5 h-5" />
                        </button>

                        <div className="w-16 text-center">
                          <span className={`text-2xl font-bold ${
                            producto.stock === 0 
                              ? 'text-red-600' 
                              : producto.stock < 5 
                              ? 'text-orange-600' 
                              : 'text-gray-800'
                          }`}>
                            {updatingStock[producto.id] ? '...' : producto.stock}
                          </span>
                        </div>

                        <button
                          onClick={() => actualizarStock(producto.id, 1)}
                          disabled={updatingStock[producto.id]}
                          className="w-10 h-10 flex items-center justify-center bg-green-100 text-green-700 rounded-lg hover:bg-green-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors active:scale-95"
                        >
                          <Plus className="w-5 h-5" />
                        </button>
                      </div>
                    </div>

                    {/* Badge de estado de stock */}
                    {producto.stock === 0 && (
                      <span className="inline-block mt-2 px-2 py-1 bg-red-100 text-red-700 text-xs font-medium rounded">
                        Sin stock
                      </span>
                    )}
                    {producto.stock > 0 && producto.stock < 5 && (
                      <span className="inline-block mt-2 px-2 py-1 bg-orange-100 text-orange-700 text-xs font-medium rounded">
                        Stock bajo
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Botón Flotante para Agregar Producto */}
      {productos.length > 0 && (
        <button
          onClick={handleNuevoProducto}
          className="fixed bottom-6 right-6 w-14 h-14 bg-green-600 text-white rounded-full shadow-lg hover:bg-green-700 transition-all duration-200 flex items-center justify-center active:scale-95 z-20"
          title="Agregar producto"
        >
          <PlusCircle className="w-7 h-7" />
        </button>
      )}

      {/* Modal del Formulario de Producto */}
      {showForm && (
        <div className="fixed inset-0 bg-black/50 z-30 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full my-8">
            <div className="p-4 border-b border-gray-200 flex items-center justify-between">
              <h2 className="text-xl font-bold text-gray-800">
                Agregar Producto
              </h2>
              <button
                onClick={() => handleCerrarForm(false)}
                className="text-2xl text-gray-500 hover:text-gray-700 transition-colors"
              >
                ✕
              </button>
            </div>
            <div className="p-6">
              <ProductForm
                colonoData={colonoSeleccionado}
                onSuccess={(productId) => {
                  console.log('Producto creado:', productId);
                  handleCerrarForm(true);
                }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ColonoAdmin;