import { useState } from "react";
import style from "./style.module.css";

// Импорт иконок для лайка
import likeEmpty from "../../assets/like-empty.png";
import likeFilled from "../../assets/like-filled.png";

const ProductCards = ({ products }) => {
    const [likedProducts, setLikedProducts] = useState(new Set());

    const toggleLike = (productId) => {
        setLikedProducts(prev => {
            const newLiked = new Set(prev);
            if (newLiked.has(productId)) {
                newLiked.delete(productId);
            } else {
                newLiked.add(productId);
            }
            return newLiked;
        });
    };

    return (
        <div className={style.productsSection}>
            <div className={style.productsGrid}>
                {products.map((product, index) => (
                    <div key={index} className={style.productCard}>
                        {/* Контейнер для бейджей */}
                        <div className={style.badgesContainer}>
                            {/* Бейдж ХИТ */}
                            {product.brand === "ХИТ" && (
                                <div className={style.hitBadge}>{product.brand}</div>
                            )}
                            
                            {/* Бейдж SALE */}
                            {product.brand === "SALE" && (
                                <div className={style.saleBadge}>{product.brand}</div>
                            )}
                            
                            {/* Бейдж NEW */}
                            {product.isNew && (
                                <div className={style.newBadge}>NEW</div>
                            )}

                            {/* Бейдж ПРЕМИУМ */}
                            {product.premium && (
                                <div className={style.premiumBadge}>ПРЕМИУМ</div>
                            )}
                        </div>

                        {/* Кнопка лайка */}
                        <button 
                            className={style.likeButton}
                            onClick={() => toggleLike(index)}
                        >
                            <img 
                                src={likedProducts.has(index) ? likeFilled : likeEmpty} 
                                alt="Like"
                                className={style.likeIcon}
                            />
                        </button>

                        {/* Изображение товара */}
                        <div className={style.productImage}>
                            <img
                                src={product.image}
                                alt={product.name}
                                onError={(e) => {
                                    e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjBGMEYwIi8+CjxwYXRoIGQ9Ik04MCA2MEgxMjBNODAgMTAwSDE0ME04MCAxNDBIMTIwTTYwIDgwVjEyMCIgc3Ryb2tlPSIjQ0NDQ0NDIiBzdHJva2Utd2lkdGg9IjIiLz4KPC9zdmc+';
                                }}
                            />
                        </div>

                        <div className={style.productInfo}>
                            <div className={style.productPrice}>{product.price}</div>
                            <h3 className={style.productName}>{product.name}</h3>
                            {product.description && (
                                <p className={style.productDescription}>{product.description}</p>
                            )}
                            <button className={style.chooseButton}>Выбрать</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductCards;