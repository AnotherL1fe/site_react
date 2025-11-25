import { useEffect, useRef, useState } from "react";
import ProductCards from "../ProductCards";
import PromotionBanner from "../PromotionBanner";
import ScrollCatalog from "../scrollCatalog";
import Search from "../Search";
import style from "./style.module.css";


import card1 from "../../assets/products/1card.png";
import card2 from "../../assets/products/2card.png";
import card3 from "../../assets/products/3card.png";
import card4 from "../../assets/products/4card.png";
import card5 from "../../assets/products/5card.png";
import card6 from "../../assets/products/6card.png";
import { getProducts } from "../../api/products";



const Body = () => {
  const [allProducts, setAllProducts] = useState({})

  const catalogRef = useRef(null);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = Object.values(allProducts).filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    (product.brand && product.brand.toLowerCase().includes(searchQuery.toLowerCase())) ||
    product.price.toLowerCase().includes(searchQuery.toLowerCase()) ||
    (product.description && product.description.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  useEffect(()=>{
    async function fetchData() {
      const products = await getProducts()
      console.log(products);
      
      setAllProducts(products)
    }
    fetchData()
  })

  return (
    <div className={style.body}>
      <Search
        onSearch={handleSearch}
        productsCount={filteredProducts.length} />
      <PromotionBanner />
      <ScrollCatalog />
      <ProductCards products={filteredProducts} />
    </div>
  );
};

export default Body;