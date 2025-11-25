import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Body from "./components/main";
import Footer from "./components/header";
import Catalog from "./pages/catalog";
import Favorites from "./pages/favorites";
import Cart from "./pages/cart";
import Profile from "./pages/profile";
import Product from "./pages/product";
import "./App.css";
import { CartProvider } from "./context/ContextProvider";
function App() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <CartProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Body searchQuery={searchQuery} />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/product/:id" element={<Product />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;