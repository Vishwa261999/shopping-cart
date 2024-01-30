// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import { Cart } from './pages/cart/cart';
import { Shop } from './pages/shop/shop';
import { ShopcontextProvider } from './context/shop-context';
import { ToastContainer } from 'react-toastify';
import Navbar from './components/Navbar';
import Wish from './pages/wish/Wish';



function App() {
  return (
    <div className="App">
      <ShopcontextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<Shop />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/wishlist' element={<Wish />} />
          </Routes>
        </Router>
      </ShopcontextProvider>
      <ToastContainer />
    </div>
  );
}

export default App;
