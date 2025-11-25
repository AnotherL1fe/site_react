import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/cartContext";
import style from "./style.module.css";

import likeEmpty from "../../assets/like-empty.png";
import likeFilled from "../../assets/like-filled.png";

const ProductCards = ({ products }) => {
    const [likedProducts, setLikedProducts] = useState(new Set());
    const { addToCart, isInCart } = useContext(CartContext);

    const toggleLike = (productId, event) => {
        event.preventDefault();
        event.stopPropagation();
        
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

    const handleAddToCart = (product, event) => {
        event.preventDefault();
        event.stopPropagation();
        addToCart(product);
        
        const button = event.target;
        const originalText = button.textContent;
        
        button.textContent = 'Добавлено!';
        button.style.background = '#4CAF50';
        button.style.color = '#ffffff';
        button.disabled = true;
        
        setTimeout(() => {
            button.textContent = originalText;
            button.style.background = '#000000';
            button.disabled = false;
        }, 1500);
    };


    const getBadgeClass = (brand, isNew, premium) => {
        if (brand === "ХИТ") return style.hitBadge;
        if (brand === "SALE") return style.saleBadge;
        if (isNew) return style.newBadge;
        if (premium) return style.premiumBadge;
        return "";
    };


    const getBadgeText = (brand, isNew, premium) => {
        if (brand === "ХИТ") return "ХИТ";
        if (brand === "SALE") return "SALE";
        if (isNew) return "NEW";
        if (premium) return "ПРЕМИУМ";
        return "";
    };

    return (
        <div className={style.productsSection}>
            <div className={style.productsGrid}>
                {products.map((product, index) => {
                    const productId = product.id || `product-${index}`;
                    const badgeClass = getBadgeClass(product.brand, product.isNew, product.premium);
                    const badgeText = getBadgeText(product.brand, product.isNew, product.premium);
                    const isProductLiked = likedProducts.has(productId);
                    const isProductInCart = isInCart(productId);
                    
                    return (
                        <div key={productId} className={style.productCard}>
                            {badgeText && (
                                <div className={style.badgesContainer}>
                                    <div className={badgeClass}>{badgeText}</div>
                                </div>
                            )}

                            <button 
                                className={style.likeButton}
                                onClick={(e) => toggleLike(productId, e)}
                            >
                                <img 
                                    src={isProductLiked ? likeFilled : likeEmpty} 
                                    alt={isProductLiked ? "Убрать из избранного" : "Добавить в избранное"}
                                    className={style.likeIcon}
                                />
                            </button>

                            <Link 
                                to={`/product/${productId}`} 
                                className={style.productLink}
                            >
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
                                </div>
                            </Link>

                            <button 
                                className={`${style.chooseButton} ${isProductInCart ? style.inCart : ''}`}
                                onClick={(e) => handleAddToCart(product, e)}
                            >
                                {isProductInCart ? 'В корзине' : 'Выбрать'}
                            </button>
                        </div>
                    );
                })}
            </div>

            {products.length === 0 && (
                <div className={style.noProducts}>
                    <h3>Товары не найдены</h3>
                    <p>Попробуйте изменить параметры поиска</p>
                </div>
            )}
        </div>
    );
};

export default ProductCards;