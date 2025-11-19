import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Body from "./components/main";
import Footer from "./components/header";
import Catalog from "./components/header/pages/catalog";
import Favorites from "./components/header/pages/favorites";
import Cart from "./components/header/pages/cart";
import Profile from "./components/header/pages/profile";
import "./App.css";

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Body searchQuery={searchQuery} />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;