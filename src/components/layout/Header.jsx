import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../services/firebase";
import { Store, LogOut, PlusCircle, Home, User } from "lucide-react";

const Header = ({ user, onCartClick, onOpenProduct }) => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/");
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50 w-full">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        
        <button 
          onClick={() => navigate("/")}
          className="flex items-center gap-2 hover:opacity-80 transition-opacity"
        >
          <div className="bg-green-600 p-2 rounded-lg">
            <Store className="text-white w-6 h-6" />
          </div>
          <span className="text-xl font-bold text-gray-800 hidden sm:block">
            Feria Virtual Esperanza
          </span>
        </button>

        <nav className="flex items-center gap-4">

          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-1 text-gray-600 hover:text-green-600 font-medium"
          >
            <Home className="w-4 h-4" />
            Inicio
          </button>

          {user && (
            <>
              <button
                onClick={onOpenProduct}   
                className="flex items-center gap-1 bg-green-50 text-green-700 px-3 py-2 rounded-full hover:bg-green-100 font-semibold text-sm"
              >
                <PlusCircle className="w-4 h-4" />
                Subir Producto
              </button>

              <button
                onClick={handleLogout}
                className="flex items-center gap-1 text-red-500 hover:bg-red-50 px-3 py-2 rounded-full text-sm"
              >
                <LogOut className="w-4 h-4" />
                Cerrar Sesión
              </button>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
