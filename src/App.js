import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Cart from './Cart';
import { CartProvider } from 'react-use-cart';

function App() {
  return (
   <>
   <CartProvider>
   <Home/>
   <Cart/>
   </CartProvider>
   </>
  );
}

export default App;
