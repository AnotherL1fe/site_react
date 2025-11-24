import { useContext, useState } from "react";
import useCart from "../../hooks/useCart";
import style from "./style.module.css";

// Импорт иконок для лайка
import likeEmpty from "../../../src/assets/like-empty.png";
import likeFilled from "../../../src/assets/like-filled.png";
import { CartContext } from "../../context/cartContext";

const ProductCards = ({ products }) => {
    const [likedProducts, setLikedProducts] = useState(new Set());
    const { addToCart, isInCart } = useContext(CartContext);

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

    const handleAddToCart = (product, event) => {
        event.preventDefault();
        event.stopPropagation();
        addToCart(product);
        
        const button = event.target;
        const originalText = button.textContent;
        
        button.textContent = 'Добавлено!';
        button.style.background = '#4CAF50'
        button.style.color = '#ffffffff';
        button.disabled = true;
        
        setTimeout(() => {
            button.textContent = originalText;
            button.style.background = '#000000';
            button.disabled = false;
        }, 1500);
    };

    return (
        <div className={style.productsSection}>
            <div className={style.productsGrid}>
                {products.map((product, index) => {
                    const productId = product.id || `product-${index}`;
                    
                    return (
                        <div key={productId} className={style.productCard}>
                            <div className={style.badgesContainer}>
                                {product.brand === "ХИТ" && (
                                    <div className={style.hitBadge}>{product.brand}</div>
                                )}
                                {product.brand === "SALE" && (
                                    <div className={style.saleBadge}>{product.brand}</div>
                                )}
                                {product.isNew && (
                                    <div className={style.newBadge}>NEW</div>
                                )}
                                {product.premium && (
                                    <div className={style.premiumBadge}>ПРЕМИУМ</div>
                                )}
                            </div>

                            <button 
                                className={style.likeButton}
                                onClick={() => toggleLike(productId)}
                            >
                                <img 
                                    src={likedProducts.has(productId) ? likeFilled : likeEmpty} 
                                    alt="Like"
                                    className={style.likeIcon}
                                />
                            </button>

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
                                <button 
                                    className={`${style.chooseButton} ${isInCart(productId) ? style.inCart : ''}`}
                                    onClick={(e) => handleAddToCart(product, e)}
                                >
                                    {isInCart(productId) ? 'В корзине' : 'Выбрать'}
                                </button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default ProductCards;