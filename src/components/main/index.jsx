import { useRef, useState } from "react";
import ProductCards from "../ProductCards";
import PromotionBanner from "../PromotionBanner";
import ScrollCatalog from "../scrollCatalog";
import Search from "../Search";
import style from "./style.module.css";

import card1 from "../../assets/1card.png";
import card2 from "../../assets/2card.png";
import card3 from "../../assets/3card.png";
import card4 from "../../assets/4card.png";
import card5 from "../../assets/5card.png";
import card6 from "../../assets/6card.png";

const Body = () => {
  const catalogRef = useRef(null);
  const [searchQuery, setSearchQuery] = useState("");

  const allProducts = [
    {
      brand: "ХИТ",
      premium: false,
      price: "2 800 ₽",
      name: "Футболка мужская Комары",
      isNew: false,
      image: card1
    },
    {
      brand: "",
      premium: false,
      price: "2 700 ₽",
      name: "Свитшот женский укороченный Yamal est.2017",
      isNew: false,
      image: card2
    },
    {
      brand: "SALE",
      premium: false,
      price: "1 550 ₽",
      name: "Шапка Yamal комбинация с бумбономапша",
      isNew: true,
      image: card3
    },
    {
      brand: "SALE",
      premium: false,
      price: "640 ₽",
      name: "Брелок фирменный «Созвездие»",
      isNew: false,
      image: card4
    },
    {
      brand: "",
      premium: false,
      price: "3 850 ₽",
      name: "Шорты мужские Yamal",
      isNew: true,
      image: card5
    },
    {
      brand: "",
      premium: true,
      price: "10 000 ₽",
      name: "Сертификат Yamal 10000",
      isNew: false,
      image: card6
    }
  ];

  const filteredProducts = allProducts.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    (product.brand && product.brand.toLowerCase().includes(searchQuery.toLowerCase())) ||
    product.price.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // const handleWheel = (e) => {
  //   if (catalogRef.current) {
  //     e.preventDefault();
  //     catalogRef.current.scrollLeft += e.deltaY;
  //   }
  // };

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

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