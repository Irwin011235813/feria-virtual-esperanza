// ============================================
// SCRIPT DE MIGRACIÓN - PRODUCTOS
// ============================================
// Agrega colonoTelefono a productos que no lo tienen

import { useState } from 'react';
import { collection, getDocs, doc, updateDoc, getDoc } from 'firebase/firestore';
import { db } from '../../services/firebase';
import { Loader, CheckCircle, AlertCircle } from 'lucide-react';

const ActualizarProductos = () => {
  const [estado, setEstado] = useState('inicial');
  const [mensaje, setMensaje] = useState('');
  const [progreso, setProgreso] = useState({ actual: 0, total: 0 });
  const [productosActualizados, setProductosActualizados] = useState(0);

  const ejecutarActualizacion = async () => {
    setEstado('procesando');
    setMensaje('Escaneando productos...');
    
    try {
      // 1. Obtener todos los productos
      const productosSnapshot = await getDocs(collection(db, 'productos'));
      const totalProductos = productosSnapshot.docs.length;
      setProgreso({ actual: 0, total: totalProductos });

      let actualizados = 0;
      let yaCompletos = 0;

      // 2. Recorrer cada producto
      for (let i = 0; i < productosSnapshot.docs.length; i++) {
        const productoDoc = productosSnapshot.docs[i];
        const producto = productoDoc.data();

        setProgreso({ actual: i + 1, total: totalProductos });
        setMensaje(`Procesando ${producto.nombre || 'producto'}...`);

        // Si el producto ya tiene colonoTelefono, saltar
        if (producto.colonoTelefono) {
          yaCompletos++;
          continue;
        }

        // Si no tiene colonoId, no podemos hacer nada
        if (!producto.colonoId) {
          console.warn(`Producto ${productoDoc.id} sin colonoId`);
          continue;
        }

        // 3. Buscar el teléfono del colono
        const colonoDoc = await getDoc(doc(db, 'colonos', producto.colonoId));
        
        if (!colonoDoc.exists()) {
          console.warn(`Colono ${producto.colonoId} no encontrado`);
          continue;
        }

        const colono = colonoDoc.data();
        
        if (!colono.telefono) {
          console.warn(`Colono ${colono.nombre} sin teléfono`);
          continue;
        }

        // 4. Actualizar el producto con el teléfono
        await updateDoc(doc(db, 'productos', productoDoc.id), {
          colonoTelefono: colono.telefono
        });

        actualizados++;
        console.log(`✅ Actualizado: ${producto.nombre} → ${colono.telefono}`);
      }

      setProductosActualizados(actualizados);
      setMensaje(`
        ✅ Migración completada:
        • ${actualizados} productos actualizados
        • ${yaCompletos} ya tenían teléfono
        • ${totalProductos} productos en total
      `);
      setEstado('completado');

    } catch (error) {
      console.error('Error en migración:', error);
      setMensaje(`❌ Error: ${error.message}`);
      setEstado('error');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6 flex items-center justify-center">
      <div className="max-w-md w-full">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            🔧 Actualizar Productos
          </h1>
          <p className="text-gray-600 mb-6 text-sm">
            Agrega el teléfono del colono a todos los productos
          </p>

          {/* Estado inicial */}
          {estado === 'inicial' && (
            <div>
              <div className="bg-yellow-50 border-2 border-yellow-200 rounded-xl p-4 mb-4">
                <p className="text-sm text-yellow-800 mb-2">
                  ⚠️ Este script va a:
                </p>
                <ul className="text-xs text-yellow-700 space-y-1 list-disc list-inside">
                  <li>Escanear todos los productos</li>
                  <li>Buscar el teléfono de cada colono</li>
                  <li>Agregar el campo <code className="bg-yellow-100 px-1 rounded">colonoTelefono</code></li>
                </ul>
              </div>

              <button
                onClick={ejecutarActualizacion}
                className="w-full bg-green-600 text-white py-4 rounded-xl font-bold hover:bg-green-700 transition-colors shadow-lg"
              >
                🚀 Ejecutar Actualización
              </button>
            </div>
          )}

          {/* Procesando */}
          {estado === 'procesando' && (
            <div className="text-center py-8">
              <Loader className="w-12 h-12 text-blue-600 animate-spin mx-auto mb-4" />
              <p className="text-gray-700 font-medium mb-2">{mensaje}</p>
              {progreso.total > 0 && (
                <>
                  <p className="text-sm text-gray-500">
                    {progreso.actual} de {progreso.total} productos
                  </p>
                  <div className="w-full bg-gray-200 rounded-full h-2 mt-3">
                    <div 
                      className="bg-green-600 h-full rounded-full transition-all duration-300"
                      style={{ width: `${(progreso.actual / progreso.total) * 100}%` }}
                    />
                  </div>
                </>
              )}
            </div>
          )}

          {/* Completado */}
          {estado === 'completado' && (
            <div className="text-center py-8">
              <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
              <h2 className="text-xl font-bold text-gray-800 mb-2">
                ¡Listo!
              </h2>
              <div className="text-left bg-green-50 border-2 border-green-200 rounded-xl p-4 mb-4">
                <pre className="text-sm text-green-800 whitespace-pre-line">
                  {mensaje}
                </pre>
              </div>
              <button
                onClick={() => {
                  // Eliminar el parámetro de la URL y recargar
                  window.history.replaceState({}, '', '/');
                  window.location.href = '/';
                }}
                className="w-full bg-green-600 text-white py-3 rounded-xl font-bold hover:bg-green-700 transition-colors"
              >
                Ir al Inicio
              </button>
            </div>
          )}

          {/* Error */}
          {estado === 'error' && (
            <div className="text-center py-8">
              <AlertCircle className="w-16 h-16 text-red-600 mx-auto mb-4" />
              <h2 className="text-xl font-bold text-gray-800 mb-2">
                Error
              </h2>
              <div className="text-left bg-red-50 border-2 border-red-200 rounded-xl p-4 mb-4">
                <p className="text-sm text-red-800">{mensaje}</p>
              </div>
              <button
                onClick={() => setEstado('inicial')}
                className="w-full bg-red-600 text-white py-3 rounded-xl font-bold hover:bg-red-700 transition-colors"
              >
                Reintentar
              </button>
            </div>
          )}
        </div>

        {/* Advertencia */}
        <div className="mt-4 bg-blue-50 border-2 border-blue-200 rounded-xl p-4">
          <p className="text-xs text-blue-800">
            💡 <strong>Tip:</strong> Después de ejecutar esto, eliminá este componente del código.
            Los nuevos productos ya se crean con el teléfono automáticamente.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ActualizarProductos;
