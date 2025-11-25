import { useRef, useState } from "react";
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

const allProducts = [
  {
    brand: "ХИТ",
    premium: false,
    price: "2 800 ₽",
    name: "Футболка мужская Комары",
    description: "Мужская футболка из 100% хлопка с уникальным принтом",
    isNew: false,
    image: card1,
    id: 1
  },
  {
    brand: "",
    premium: false,
    price: "2 700 ₽",
    name: "Свитшот женский укороченный Yamal est.2017",
    description: "Укороченный свитшот для женщин из мягкого футера",
    isNew: false,
    image: card2,
    id: 2
  },
  {
    brand: "SALE",
    premium: false,
    price: "1 550 ₽",
    name: "Шапка Yamal комбинация с бумбономапша",
    description: "Теплая шапка с помпоном, комбинированные материалы",
    isNew: true,
    image: card3,
    id: 3
  },
  {
    brand: "SALE",
    premium: false,
    price: "640 ₽",
    name: "Брелок фирменный «Созвездие»",
    description: "Фирменный брелок с символикой бренда",
    isNew: false,
    image: card4,
    id: 4
  },
  {
    brand: "",
    premium: false,
    price: "3 850 ₽",
    name: "Шорты мужские Yamal",
    description: "Мужские шорты для спорта и отдыха",
    isNew: true,
    image: card5,
    id: 5
  },
  {
    brand: "",
    premium: true,
    price: "10 000 ₽",
    name: "Сертификат Yamal 10000",
    description: "Подарочный сертификат на 10 000 рублей",
    isNew: false,
    image: card6,
    id: 6
  }
];

const Body = () => {
  const catalogRef = useRef(null);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = allProducts.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    (product.brand && product.brand.toLowerCase().includes(searchQuery.toLowerCase())) ||
    product.price.toLowerCase().includes(searchQuery.toLowerCase()) ||
    (product.description && product.description.toLowerCase().includes(searchQuery.toLowerCase()))
  );

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