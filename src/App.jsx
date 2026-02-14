import { CartProvider } from './context/CartContext';
import { useCart } from './context/CartContext';

console.log("🔴🔴🔴 APP.JSX SE ESTÁ CARGANDO 🔴🔴🔴");

function TestButton() {
  console.log("🟢 TestButton RENDERIZANDO");
  
  const { getTotalItems } = useCart();
  const total = getTotalItems();
  
  console.log("🟢 Total items:", total);
  
  return (
    <button
      onClick={() => {
        console.log("🔴 CLICK DETECTADO!!!");
        alert("Click funciona!");
      }}
      style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        width: '100px',
        height: '100px',
        backgroundColor: 'red',
        color: 'white',
        fontSize: '20px',
        border: 'none',
        borderRadius: '50%',
        cursor: 'pointer',
        zIndex: 9999
      }}
    >
      TEST
      <br />
      {total}
    </button>
  );
}

function App() {
  console.log("🟡 App RENDERIZANDO");
  
  return (
    <CartProvider>
      <div style={{ padding: '50px', fontSize: '24px' }}>
        <h1>TEST APP</h1>
        <p>Si ves esto, React funciona</p>
        <TestButton />
      </div>
    </CartProvider>
  );
}

export default App;
