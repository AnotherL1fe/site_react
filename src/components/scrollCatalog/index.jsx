import { useRef } from "react";
import style from "./style.module.css";

// Импорт изображений для категорий
import accessoryIcon from "../../assets/accessory.png";
import tshirtIcon from "../../assets/tshirt.png";
import hoodieIcon from "../../assets/hoodie.png";
import jacketIcon from "../../assets/jacket.png";
import pantsIcon from "../../assets/pants.png";
import certificateIcon from "../../assets/certificate.png";

const ScrollCatalog = () => {
    const categories = [
        { name: "Аксессуары", icon: accessoryIcon },
        { name: "Футболки", icon: tshirtIcon },
        { name: "Толстовки", icon: hoodieIcon },
        { name: "Куртки", icon: jacketIcon },
        { name: "Штаны", icon: pantsIcon },
        { name: "Сертификаты", icon: certificateIcon }
    ];

    const catalogRef = useRef(null);
    
    const handleWheel = (e) => {
        if (catalogRef.current) {
            e.preventDefault();
            catalogRef.current.scrollLeft += e.deltaY;
        }
    };

    return (
        <div className={style.catalogSection}>
            <div
                className={style.catalogContainer}
                ref={catalogRef}
                onWheel={handleWheel}
            >
                <div className={style.catalogWrapper}>
                    <nav className={style.catalogNav}>
                        <ul className={style.categoryList}>
                            {categories.map((category, index) => (
                                <li key={index} className={style.categoryItem}>
                                    <a href="#" className={style.categoryLink}>
                                        <div className={style.categoryContent}>
                                            <img 
                                                src={category.icon} 
                                                alt={category.name}
                                                className={style.categoryIcon}
                                            />
                                            <span className={style.categoryName}>
                                                {category.name}
                                            </span>
                                        </div>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </div>
            <div className={style.scrollIndicators}>
            </div>
        </div>
    );
};

export default ScrollCatalog;