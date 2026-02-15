import { Link, useNavigate, useLocation } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../services/firebase";
import { Store, LogOut, PlusCircle, Home, User } from "lucide-react";

const Header = ({ user }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/");
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
  };

  const handleSubirProducto = () => {
    if (location.pathname === "/admin") {
      navigate("/admin?action=new", { replace: true });
    } else {
      navigate("/admin?action=new");
    }
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50 w-full">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <div className="bg-green-600 p-2 rounded-lg">
            <Store className="text-white w-6 h-6" />
          </div>
          <span className="text-xl font-bold text-gray-800 hidden sm:block">
            Feria Virtual Esperanza
          </span>
        </Link>

        <nav className="flex items-center gap-2 sm:gap-6">
          <Link 
            to="/" 
            className="flex items-center gap-1 text-gray-600 hover:text-green-600 font-medium transition-colors text-sm sm:text-base"
          >
            <Home className="w-4 h-4" />
            <span className="hidden md:inline">Inicio</span>
          </Link>

          {user ? (
            <>
              <div className="hidden lg:flex items-center gap-2 text-gray-500 border-l pl-6 border-gray-200">
                <User className="w-4 h-4" />
                <span className="text-xs italic">{user.email}</span>
              </div>

              {/* 🔥 Botón inteligente */}
              <button 
                onClick={handleSubirProducto}
                className="flex items-center gap-1 bg-green-50 text-green-700 px-3 py-2 rounded-full hover:bg-green-100 transition-colors font-semibold text-sm"
              >
                <PlusCircle className="w-4 h-4" />
                Subir Producto
              </button>

              <button 
                onClick={handleLogout}
                className="flex items-center gap-1 text-red-500 hover:bg-red-50 px-3 py-2 rounded-full transition-colors text-sm font-medium"
              >
                <LogOut className="w-4 h-4" />
                <span className="hidden sm:inline">Cerrar Sesión</span>
              </button>
            </>
          ) : (
            <Link 
              to="/login" 
              className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors font-medium shadow-sm"
            >
              Ingreso Colono
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
