// ============================================
// FIREBASE AUTHENTICATION SERVICE
// ============================================
// Gestión completa de autenticación para colonos

import { 
  getAuth, 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  setPersistence,
  browserLocalPersistence,
  updateProfile
} from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { db } from './firebase';

// Inicializar Auth con persistencia local
export const auth = getAuth();

// Configurar persistencia para mantener sesión activa
setPersistence(auth, browserLocalPersistence)
  .then(() => {
    console.log('✅ Persistencia de sesión configurada');
  })
  .catch((error) => {
    console.error('Error configurando persistencia:', error);
  });

/**
 * Registra un nuevo colono y crea su documento en Firestore
 * @param {Object} userData - Datos del colono
 * @param {string} userData.email - Email del colono
 * @param {string} userData.password - Contraseña
 * @param {string} userData.nombre - Nombre completo
 * @param {string} userData.telefono - Número de WhatsApp
 * @returns {Promise<Object>} Usuario autenticado y datos del colono
 */
export const registrarColono = async ({ email, password, nombre, telefono }) => {
  try {
    // 1. Crear usuario en Firebase Auth
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // 2. Actualizar perfil con nombre
    await updateProfile(user, {
      displayName: nombre
    });

    // 3. Crear documento en Firestore usando uid como ID
    const colonoData = {
      nombre: nombre.trim(),
      email: email.toLowerCase().trim(),
      telefono: telefono.trim(),
      createdAt: new Date(),
      updatedAt: new Date(),
      activo: true,
      rol: 'colono' // Por si más adelante quieres roles de admin
    };

    await setDoc(doc(db, 'colonos', user.uid), colonoData);

    console.log('✅ Colono registrado exitosamente:', user.uid);

    return {
      user,
      colonoData: {
        id: user.uid,
        ...colonoData
      }
    };
  } catch (error) {
    console.error('Error en registro:', error);
    
    // Mensajes de error más amigables
    const errorMessages = {
      'auth/email-already-in-use': 'Este email ya está registrado. Intenta iniciar sesión.',
      'auth/invalid-email': 'El formato del email no es válido.',
      'auth/operation-not-allowed': 'El registro está deshabilitado temporalmente.',
      'auth/weak-password': 'La contraseña debe tener al menos 6 caracteres.',
    };

    throw new Error(errorMessages[error.code] || 'Error al registrar. Intenta nuevamente.');
  }
};

/**
 * Inicia sesión de un colono existente
 * @param {string} email - Email del colono
 * @param {string} password - Contraseña
 * @returns {Promise<Object>} Usuario autenticado y datos del colono
 */
export const iniciarSesionColono = async (email, password) => {
  try {
    // 1. Autenticar con Firebase Auth
    const userCredential = await signInWithEmailAndPassword(
      auth, 
      email.toLowerCase().trim(), 
      password
    );
    const user = userCredential.user;

    // 2. Obtener datos del colono desde Firestore
    const colonoDoc = await getDoc(doc(db, 'colonos', user.uid));

    if (!colonoDoc.exists()) {
      throw new Error('No se encontraron datos del colono. Contacta al administrador.');
    }

    const colonoData = {
      id: colonoDoc.id,
      ...colonoDoc.data()
    };

    // 3. Verificar que el colono esté activo
    if (colonoData.activo === false) {
      await signOut(auth);
      throw new Error('Tu cuenta está desactivada. Contacta al administrador.');
    }

    console.log('✅ Sesión iniciada:', user.uid);

    return {
      user,
      colonoData
    };
  } catch (error) {
    console.error('Error en login:', error);

    // Mensajes de error más amigables
    const errorMessages = {
      'auth/invalid-credential': 'Email o contraseña incorrectos.',
      'auth/user-disabled': 'Esta cuenta ha sido deshabilitada.',
      'auth/user-not-found': 'No existe una cuenta con este email.',
      'auth/wrong-password': 'Contraseña incorrecta.',
      'auth/too-many-requests': 'Demasiados intentos fallidos. Intenta más tarde.',
    };

    throw new Error(errorMessages[error.code] || error.message || 'Error al iniciar sesión.');
  }
};

/**
 * Cierra la sesión del colono actual
 */
export const cerrarSesionColono = async () => {
  try {
    await signOut(auth);
    console.log('✅ Sesión cerrada');
  } catch (error) {
    console.error('Error cerrando sesión:', error);
    throw new Error('Error al cerrar sesión. Intenta nuevamente.');
  }
};

/**
 * Obtiene el colono actualmente autenticado
 * @returns {Promise<Object|null>} Datos del colono o null si no hay sesión
 */
export const obtenerColonoActual = async () => {
  const user = auth.currentUser;
  
  if (!user) {
    return null;
  }

  try {
    const colonoDoc = await getDoc(doc(db, 'colonos', user.uid));
    
    if (!colonoDoc.exists()) {
      return null;
    }

    return {
      id: colonoDoc.id,
      ...colonoDoc.data(),
      email: user.email,
      emailVerified: user.emailVerified
    };
  } catch (error) {
    console.error('Error obteniendo colono actual:', error);
    return null;
  }
};

/**
 * Hook para escuchar cambios en el estado de autenticación
 * @param {Function} callback - Función que se ejecuta cuando cambia el estado
 * @returns {Function} Función para cancelar la suscripción
 */
export const onAuthChange = (callback) => {
  return onAuthStateChanged(auth, async (user) => {
    if (user) {
      // Usuario autenticado, obtener datos de Firestore
      const colonoData = await obtenerColonoActual();
      callback({ user, colonoData });
    } else {
      // Usuario no autenticado
      callback({ user: null, colonoData: null });
    }
  });
};

/**
 * Verifica si hay un usuario autenticado
 * @returns {boolean}
 */
export const estaAutenticado = () => {
  return auth.currentUser !== null;
};

/**
 * Obtiene el ID del usuario actual
 * @returns {string|null}
 */
export const obtenerUserId = () => {
  return auth.currentUser?.uid || null;
};