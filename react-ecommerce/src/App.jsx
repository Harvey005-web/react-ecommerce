import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import ProductList from './pages/ProductList';
import SingleProduct from "./pages/SingleProduct";
import About from './pages/About';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import Policy from './pages/Policy';

/*import Tshirt from "./pages/tshirt";
import Pants from "./pages/Pants";
import Shoes from "./pages/Shoes";
import Hoodiejacket from "./pages/Hoodiejacket";
import Headwear from "./pages/Headwear";
import Accessories from "./pages/Accessories";
*/


import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import WishlistPage from "./pages/WishlistPage";
import ComparisonPage from "./pages/ComparisonPage";

import CartProvider from "./context/CartContext";
import AppProvider from "./context/AppContext";
//import { CartContext } from "./context/CartContext";
//import { AppContext } from "./context/AppContext";



function App() {
  return (
    <AppProvider>
      <CartProvider>
    <Router>
      {/* Always full width */}
      <Header />
      <Navbar />

      {/* Main content wrapper - full width, no shrinking */}
      <div className="container-fluid px-4 py-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/:category" element={<ProductList />} />
          <Route path="/product/:id" element={<SingleProduct/>} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/policy" element={<Policy />} />
          {/*
          <Route path="/tshirt" element={<Tshirt />} />
          <Route path="/pants" element={<Pants />} />
          <Route path="/shoes" element={<Shoes />} />
          <Route path="/hoodiejacket" element={<Hoodiejacket />} />
          <Route path="/headwear" element={<Headwear />} />
          <Route path="/accessories" element={<Accessories />} />
          */}
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/wishlist" element={<WishlistPage />} />
          <Route path="/compare" element={<ComparisonPage />} />
        </Routes>
      </div>

    <Footer />
    </Router>
     </CartProvider>
    </AppProvider>
  );
};

export default App;
