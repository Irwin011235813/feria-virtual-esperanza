import { initializeApp } from "firebase/app";
import { 
  getFirestore, 
  collection, 
  getDocs, 
  addDoc, 
  query, 
  where, 
  serverTimestamp, 
  doc, 
  updateDoc 
} from "firebase/firestore";

import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { getAuth } from "firebase/auth"; // ✅ NUEVO

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app); // ✅ MUY IMPORTANTE

// --- UPDATE PRODUCTO ---
export const updateProducto = async (productId, updates) => {
  try {
    const productRef = doc(db, "productos", productId);
    await updateDoc(productRef, {
      ...updates,
      fechaActualizacion: serverTimestamp()
    });
  } catch (error) {
    throw new Error("Error al actualizar producto: " + error.message);
  }
};

// --- LEER PRODUCTOS ---
export const getProductos = async (filters = {}) => {
  try {
    const productosRef = collection(db, "productos");
    let q = query(productosRef);

    if (filters.categoria) {
      q = query(productosRef, where("categoria", "==", filters.categoria));
    }

    const querySnapshot = await getDocs(q);

    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));

  } catch (error) {
    throw new Error("Error al leer productos: " + error.message);
  }
};

// --- CREAR PRODUCTO ---
export const createProducto = async (productoData) => {
  try {
    const docRef = await addDoc(collection(db, "productos"), {
      ...productoData,
      activo: true,
      fechaCreacion: serverTimestamp()
    });

    return docRef.id;

  } catch (error) {
    throw new Error("Error al crear producto: " + error.message);
  }
};

// --- SUBIR IMAGEN ---
export const uploadProductImage = async (file) => {
  try {
    const storageRef = ref(storage, `productos/${Date.now()}_${file.name}`);
    const snapshot = await uploadBytes(storageRef, file);
    const downloadURL = await getDownloadURL(snapshot.ref);

    return downloadURL;

  } catch (error) {
    throw new Error("Error al subir la imagen: " + error.message);
  }
};
