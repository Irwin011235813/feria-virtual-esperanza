import { useState, useEffect } from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db, updateProducto } from "../../services/firebase";
import { obtenerColonoActual } from '../../services/auth';
import { useNavigate, useLocation } from 'react-router-dom';
import { Package, Plus, Minus, Edit2, PlusCircle, Loader } from 'lucide-react';
import ProductForm from './ProductForm';

const ColonoAdmin = ({ isModalOpen, setIsModalOpen, onCloseModal }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const [colonoSeleccionado, setColonoSeleccionado] = useState(null);
  const [loadingColono, setLoadingColono] = useState(true);

  const [productos, setProductos] = useState([]);
  const [loadingProductos, setLoadingProductos] = useState(false);

  const [productoAEditar, setProductoAEditar] = useState(null);
  const [updatingStock, setUpdatingStock] = useState({});

  // 🔥 Detectar ?action=new
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const action = params.get("action");

    if (action === "new") {
      setProductoAEditar(null);
      setIsModalOpen(true);
    }
  }, [location.search, setIsModalOpen]);

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

      if (!colono) {
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

  const cargarProductosColono = async () => {
    setLoadingProductos(true);
    try {
      const q = query(
        collection(db, 'productos'),
        where('colonoId', '==', colonoSeleccionado.id)
      );

      const snapshot = await getDocs(q);
      const lista = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));

      lista.sort((a, b) => a.nombre.localeCompare(b.nombre));
      setProductos(lista);
    } catch (error) {
      console.error('Error cargando productos:', error);
      alert('Error al cargar productos');
    } finally {
      setLoadingProductos(false);
    }
  };

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
      alert('Error al actualizar stock');
    } finally {
      setUpdatingStock(prev => ({ ...prev, [productoId]: false }));
    }
  };

  const handleNuevoProducto = () => {
    setProductoAEditar(null);
    setIsModalOpen(true);
  };

  const handleEditarProducto = (producto) => {
    setProductoAEditar(producto);
    setIsModalOpen(true);
  };

  const handleCerrarForm = (huboCambios) => {
    setProductoAEditar(null);
    onCloseModal(); // 🔥 limpia estado global + URL
    if (huboCambios) cargarProductosColono();
  };

  if (loadingColono) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <Loader className="w-10 h-10 text-green-600 animate-spin mx-auto mb-4" />
          <p className="text-gray-600">Cargando panel...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-20">

      <div className="max-w-4xl mx-auto p-4">
        <h1 className="text-2xl font-bold text-green-700 mb-2">
          Panel de Control
        </h1>
        <p className="text-gray-500 mb-6">
          Gestiona tus productos y stock disponible
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-4">
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
            <button
              onClick={handleNuevoProducto}
              className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition"
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
                className="bg-white rounded-lg shadow p-4 border"
              >
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="font-semibold text-gray-800">
                      {producto.nombre}
                    </h3>
                    <p className="text-green-600 font-bold">
                      ${(producto.precio / 100).toFixed(2)}
                    </p>
                  </div>

                  <button
                    onClick={() => handleEditarProducto(producto)}
                    className="text-gray-500 hover:text-green-600"
                  >
                    <Edit2 size={18} />
                  </button>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => actualizarStock(producto.id, -1)}
                    disabled={producto.stock === 0}
                    className="bg-red-100 text-red-700 p-2 rounded"
                  >
                    <Minus size={16} />
                  </button>

                  <span className="text-xl font-bold w-10 text-center">
                    {producto.stock}
                  </span>

                  <button
                    onClick={() => actualizarStock(producto.id, 1)}
                    className="bg-green-100 text-green-700 p-2 rounded"
                  >
                    <Plus size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* 🔥 Modal sincronizado */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-xl w-full p-6">
            <ProductForm
              colonoData={colonoSeleccionado}
              producto={productoAEditar}
              onSuccess={() => handleCerrarForm(true)}
            />
            <button
              onClick={() => handleCerrarForm(false)}
              className="mt-4 text-gray-500"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ColonoAdmin;
