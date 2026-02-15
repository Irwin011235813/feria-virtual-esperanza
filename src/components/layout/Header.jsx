import { Link, useNavigate } from "react-router-dom";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../../services/firebase";
import { useEffect, useState } from "react";

const Header = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  // Detecta si el usuario está logueado
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/");
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
  };

  return (
    <header className="header">
      <div className="header-container">

        {/* Logo */}
        <Link to="/" className="logo">
          Feria Virtual Esperanza
        </Link>

        <nav className="nav-links">
          <Link to="/">Inicio</Link>

          {/* Si está logueado */}
          {user ? (
            <>
              <Link to="/colono">Subir Producto</Link>
              <button onClick={handleLogout}>
                Cerrar Sesión
              </button>
            </>
          ) : (
            <Link to="/login">Ingreso Colono</Link>
          )}
        </nav>

      </div>
    </header>
  );
};

export default Header;
