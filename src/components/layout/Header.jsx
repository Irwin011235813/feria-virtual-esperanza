import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";

const Header = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/");
  };

  return (
    <header className="header">
      <div className="header-container">

        {/* ✅ Logo clickeable */}
        <Link to="/" className="logo">
          Feria Virtual Esperanza
        </Link>

        <nav className="nav-links">

          {/* Siempre visible */}
          <Link to="/">Inicio</Link>

          {/* ✅ Solo si está logueado */}
          {user && (
            <>
              <Link to="/colono">Subir Producto</Link>
              <button onClick={handleLogout}>Cerrar Sesión</button>
            </>
          )}

          {/* Si NO está logueado */}
          {!user && (
            <Link to="/login">Ingreso Colono</Link>
          )}

        </nav>
      </div>
    </header>
  );
};

export default Header;
