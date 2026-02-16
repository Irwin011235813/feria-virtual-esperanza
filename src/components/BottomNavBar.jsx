// ============================================
// BOTTOM NAVIGATION BAR - FERIA VIRTUAL ESPERANZA
// ============================================
// Barra de navegación inferior estilo Mercado Libre
// Integrada con CartContext y Router existente

import { useNavigate, useLocation } from 'react-router-dom';
import { Home, Package, ShoppingCart, Plus, Menu } from 'lucide-react';
import { useCart } from '../context/CartContext';

const BottomNavBar = ({ onCartClick, onOpenProduct }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { getTotalItems } = useCart();

  const cartCount = getTotalItems();

  const navItems = [
    {
      id: 'inicio',
      label: 'Inicio',
      icon: Home,
      path: '/',
      onClick: () => navigate('/'),
      description: 'Ver productos disponibles'
    },
    {
      id: 'mis-productos',
      label: 'Mis Productos',
      icon: Package,
      path: '/admin',
      onClick: () => navigate('/admin'),
      description: 'Gestionar mis ventas'
    },
    {
      id: 'carrito',
      label: 'Carrito',
      icon: ShoppingCart,
      isCenter: true,
      onClick: onCartClick, // Abre el CartDrawer existente
      description: 'Ver mi carrito'
    },
    {
      id: 'vender',
      label: 'Vender',
      icon: Plus,
      onClick: onOpenProduct, // Usa la función existente de App.jsx
      description: 'Cargar nuevo producto'
    },
    {
      id: 'mas',
      label: 'Más',
      icon: Menu,
      onClick: () => {
        // TODO: Crear página de perfil/ajustes
        alert('Próximamente: Perfil y ajustes');
      },
      description: 'Perfil y ajustes'
    },
  ];

  // Determinar tab activo basado en la ruta actual
  const getActiveTab = () => {
    const currentPath = location.pathname;
    
    // Lógica especial para detectar cuando está en admin
    if (currentPath === '/admin') {
      const params = new URLSearchParams(location.search);
      if (params.get('action') === 'new') {
        return 'vender'; // Activar botón "Vender" cuando está abriendo el modal
      }
      return 'mis-productos';
    }

    if (currentPath === '/') return 'inicio';
    
    return 'inicio';
  };

  const activeTab = getActiveTab();

  const handleClick = (item) => {
    if (item.onClick) {
      item.onClick();
    }
    
    // Feedback háptico en móviles
    if (navigator.vibrate) {
      navigator.vibrate(30);
    }
  };

  return (
    <>
      {/* Espaciador para que el contenido no quede debajo de la barra */}
      <div className="h-20" />

      {/* 🌾 BOTTOM NAVIGATION BAR */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white shadow-2xl border-t border-gray-200 z-50">
        <div className="relative flex items-end justify-around h-16 max-w-lg mx-auto px-2">
          
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            
            // 🛒 BOTÓN CENTRAL DEL CARRITO (Destacado estilo Mercado Libre)
            if (item.isCenter) {
              return (
                <button
                  key={item.id}
                  onClick={() => handleClick(item)}
                  className="relative flex flex-col items-center justify-center -mt-8 group touch-manipulation"
                  aria-label={item.label}
                  title={item.description}
                >
                  {/* Círculo blanco elevado con sombra pronunciada */}
                  <div className={`
                    relative w-16 h-16 rounded-full flex items-center justify-center
                    transition-all duration-300 transform
                    ${isActive 
                      ? 'bg-green-600 shadow-2xl shadow-green-600/50 scale-110' 
                      : 'bg-white shadow-xl border-4 border-green-100 group-hover:scale-105 group-hover:shadow-2xl group-active:scale-100'
                    }
                  `}>
                    <Icon 
                      size={28} 
                      strokeWidth={2.5}
                      className={`
                        transition-colors duration-300
                        ${isActive ? 'text-white' : 'text-green-600 group-hover:text-green-700'}
                      `}
                    />
                    
                    {/* 🔴 BADGE DEL CONTADOR - Integrado con CartContext */}
                    {cartCount > 0 && (
                      <div 
                        className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full min-w-[24px] h-6 px-1.5 flex items-center justify-center shadow-lg border-2 border-white"
                        style={{
                          animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
                        }}
                      >
                        {cartCount > 99 ? '99+' : cartCount}
                      </div>
                    )}
                  </div>
                  
                  {/* Label debajo */}
                  <span className={`
                    text-[10px] font-bold mt-1 transition-colors duration-300
                    ${isActive ? 'text-green-600' : 'text-gray-500'}
                  `}>
                    {item.label}
                  </span>
                </button>
              );
            }

            // 🔘 BOTONES NORMALES (Inicio, Mis Productos, Vender, Más)
            return (
              <button
                key={item.id}
                onClick={() => handleClick(item)}
                className="flex flex-col items-center justify-center min-w-[60px] py-2 group touch-manipulation"
                aria-label={item.label}
                title={item.description}
              >
                <Icon 
                  size={24} 
                  strokeWidth={2}
                  className={`
                    transition-all duration-300
                    ${isActive 
                      ? 'text-green-600 scale-110' 
                      : 'text-gray-500 group-hover:text-green-600 group-hover:scale-105 group-active:scale-100'
                    }
                  `}
                />
                <span className={`
                  text-[10px] font-bold mt-1 transition-colors duration-300
                  ${isActive ? 'text-green-600' : 'text-gray-500 group-hover:text-green-600'}
                `}>
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>
      </nav>

      {/* Estilos para animación del badge */}
      <style jsx>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.05);
          }
        }
      `}</style>
    </>
  );
};

export default BottomNavBar;