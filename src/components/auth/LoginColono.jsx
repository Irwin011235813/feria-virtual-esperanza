// ============================================
// LOGIN/REGISTRO COMPONENT PARA COLONOS
// ============================================
// Formulario moderno y mobile-first para autenticación

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registrarColono, iniciarSesionColono } from '../../services/auth';
import { Leaf, Mail, Lock, User, Phone, Eye, EyeOff, Loader } from 'lucide-react';

const LoginColono = () => {
  const navigate = useNavigate();
  
  // Estado para alternar entre login y registro
  const [modoRegistro, setModoRegistro] = useState(false);
  
  // Estado del formulario
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    nombre: '',
    telefono: ''
  });

  // Estados de UI
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [mostrarPassword, setMostrarPassword] = useState(false);

  /**
   * Maneja cambios en los inputs
   */
  const handleChange = (campo, valor) => {
    setFormData(prev => ({
      ...prev,
      [campo]: valor
    }));
    // Limpiar error al editar
    if (error) setError('');
  };

  /**
   * Validaciones del formulario
   */
  const validarFormulario = () => {
    // Email válido
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('Por favor ingresa un email válido');
      return false;
    }

    // Contraseña mínima
    if (formData.password.length < 6) {
      setError('La contraseña debe tener al menos 6 caracteres');
      return false;
    }

    // Validaciones extra para registro
    if (modoRegistro) {
      if (formData.nombre.trim().length < 3) {
        setError('El nombre debe tener al menos 3 caracteres');
        return false;
      }

      if (formData.telefono.trim().length < 10) {
        setError('Ingresa un número de teléfono válido');
        return false;
      }
    }

    return true;
  };

  /**
   * Maneja el submit del formulario
   */
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    // Validar
    if (!validarFormulario()) {
      return;
    }

    setLoading(true);

    try {
      if (modoRegistro) {
        // REGISTRO
        await registrarColono({
          email: formData.email,
          password: formData.password,
          nombre: formData.nombre,
          telefono: formData.telefono
        });
        
        // Redirigir al panel
        navigate('/admin');
      } else {
        // LOGIN
        await iniciarSesionColono(formData.email, formData.password);
        
        // Redirigir al panel
        navigate('/admin');
      }
    } catch (err) {
      setError(err.message || 'Ocurrió un error. Intenta nuevamente.');
    } finally {
      setLoading(false);
    }
  };

  /**
   * Alterna entre modo login y registro
   */
  const toggleModo = () => {
    setModoRegistro(!modoRegistro);
    setError('');
    setFormData({
      email: '',
      password: '',
      nombre: '',
      telefono: ''
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Header con logo */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-green-600 rounded-full mb-4 shadow-lg">
            <Leaf className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Feria Virtual Esperanza
          </h1>
          <p className="text-gray-600">
            {modoRegistro ? 'Registra tu cuenta de colono' : 'Ingresa a tu cuenta'}
          </p>
        </div>

        {/* Formulario */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <form onSubmit={handleSubmit} className="space-y-5">
            
            {/* Campo Nombre (solo en registro) */}
            {modoRegistro && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nombre completo
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    value={formData.nombre}
                    onChange={(e) => handleChange('nombre', e.target.value)}
                    placeholder="Juan Pérez"
                    className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all text-lg"
                    required={modoRegistro}
                    disabled={loading}
                  />
                </div>
              </div>
            )}

            {/* Campo Teléfono (solo en registro) */}
            {modoRegistro && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  WhatsApp
                </label>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="tel"
                    value={formData.telefono}
                    onChange={(e) => handleChange('telefono', e.target.value)}
                    placeholder="3764123456"
                    className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all text-lg"
                    required={modoRegistro}
                    disabled={loading}
                  />
                </div>
              </div>
            )}

            {/* Campo Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  placeholder="tu@email.com"
                  className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all text-lg"
                  required
                  disabled={loading}
                />
              </div>
            </div>

            {/* Campo Contraseña */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Contraseña
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type={mostrarPassword ? 'text' : 'password'}
                  value={formData.password}
                  onChange={(e) => handleChange('password', e.target.value)}
                  placeholder="Mínimo 6 caracteres"
                  className="w-full pl-12 pr-12 py-4 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all text-lg"
                  required
                  disabled={loading}
                />
                <button
                  type="button"
                  onClick={() => setMostrarPassword(!mostrarPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  tabIndex={-1}
                >
                  {mostrarPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
              {modoRegistro && (
                <p className="text-xs text-gray-500 mt-1">
                  Debe tener al menos 6 caracteres
                </p>
              )}
            </div>

            {/* Mensaje de error */}
            {error && (
              <div className="bg-red-50 border-2 border-red-200 rounded-xl p-4">
                <p className="text-red-700 text-sm font-medium">
                  ⚠️ {error}
                </p>
              </div>
            )}

            {/* Botón submit */}
            <button
              type="submit"
              disabled={loading}
              className={`w-full py-4 rounded-xl font-semibold text-lg transition-all ${
                loading
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  : 'bg-green-600 text-white hover:bg-green-700 active:scale-98 shadow-lg hover:shadow-xl'
              }`}
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <Loader className="w-5 h-5 animate-spin" />
                  {modoRegistro ? 'Registrando...' : 'Iniciando sesión...'}
                </span>
              ) : (
                modoRegistro ? '✅ Crear cuenta' : '🚀 Iniciar sesión'
              )}
            </button>
          </form>

          {/* Toggle entre Login y Registro */}
          <div className="mt-6 text-center">
            <button
              onClick={toggleModo}
              disabled={loading}
              className="text-green-600 hover:text-green-700 font-medium transition-colors disabled:opacity-50"
            >
              {modoRegistro ? (
                <>
                  ¿Ya tienes cuenta? <span className="underline">Inicia sesión</span>
                </>
              ) : (
                <>
                  ¿No tienes cuenta? <span className="underline">Regístrate aquí</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Footer informativo */}
        <div className="mt-6 text-center text-sm text-gray-500">
          <p>🌱 Sistema de gestión para colonos</p>
          <p className="mt-1">Administra tus productos de forma simple</p>
        </div>
      </div>
    </div>
  );
};

export default LoginColono;