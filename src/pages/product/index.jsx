import { useState, useContext, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { CartContext } from "../../context/cartContext";
import style from "./style.module.css";


import likeEmpty from "../../assets/like-empty.png";
import likeFilled from "../../assets/like-filled.png";
import arrowLeft from "../../assets/arrowLeft.webp";
import shareIcon from "../../assets/shareIcon.webp";

import card1 from "../../assets/products/1card.png";
import card2 from "../../assets/products/2card.png";
import card3 from "../../assets/products/3card.png";
import card4 from "../../assets/products/4card.png";
import card5 from "../../assets/products/5card.png";
import card6 from "../../assets/products/6card.png";
import { getProductById } from "../../api/products";


const Product = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { addToCart, isInCart, updateQuantity, cartItems } = useContext(CartContext);

    const [product, setProduct] = useState(null);
    const [selectedImage, setSelectedImage] = useState(0);
    const [selectedSize, setSelectedSize] = useState("");
    const [selectedColor, setSelectedColor] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [isLiked, setIsLiked] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect( () => {
        async function  getitem() {
            setIsLoading(true)
            const p = await getProductById(id)
            setProduct(p)
            setSelectedColor(p.colors?.[0] || "")
            setSelectedSize(p.sizes?.[0] || "");
            setIsLoading(false)
        }
        getitem()
        // setTimeout(() => {
        //     const productData = mockProducts[id];
        //     if (productData) {
        //         setProduct(productData);
        //         setSelectedSize(productData.sizes?.[0] || "");
        //         setSelectedColor(productData.colors?.[0] || "");
        //     }
        //     setIsLoading(false);
        // }, 500);
    }, []);

    const handleAddToCart = () => {
        if (!selectedSize && product.sizes && product.sizes.length > 0) {
            alert("Пожалуйста, выберите размер");
            return;
        }

        const cartProduct = {
            ...product,
            selectedSize,
            selectedColor,
            quantity
        };

        addToCart(cartProduct);

        const button = document.querySelector(`.${style.addToCartButton}`);
        if (button) {
            const originalText = button.textContent;
            button.textContent = 'Добавлено в корзину!';
            button.style.background = '#4CAF50';
            button.disabled = true;

            setTimeout(() => {
                button.textContent = originalText;
                button.style.background = '';
                button.disabled = false;
            }, 2000);
        }
    };

    const handleShare = async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: product.name,
                    text: product.description,
                    url: window.location.href,
                });
            } catch (error) {
                console.log('Ошибка sharing:', error);
            }
        } else {
            navigator.clipboard.writeText(window.location.href);
            alert('Ссылка скопирована в буфер обмена!');
        }
    };

    const incrementQuantity = () => setQuantity(prev => prev + 1);
    const decrementQuantity = () => setQuantity(prev => prev > 1 ? prev - 1 : 1);

    if (isLoading) {
        return (
            <div className={style.productPage}>
                <div className={style.loading}>
                    <div className={style.loadingSpinner}></div>
                    <p>Загрузка товара...</p>
                </div>
            </div>
        );
    }

    if (!product) {
        return (
            <div className={style.productPage}>
                <div className={style.notFound}>
                    <h2>Товар не найден</h2>
                    <p>Извините, запрашиваемый товар не существует.</p>
                    <button onClick={() => navigate("/")} className={style.backButton}>
                        Вернуться на главную
                    </button>
                </div>
            </div>
        );
    }

    const cartItem = cartItems.find(item => item.id === product.id);
    const isInCartCurrently = isInCart(product.id);

    return (
        <div className={style.productPage}>
            <nav className={style.breadcrumbs}>
                <Link to="/">Главная</Link>
                <span> / </span>
                <Link to="/catalog">Каталог</Link>
                <span> / </span>
                <span>{product.category}</span>
                <span> / </span>
                <span className={style.currentProduct}>{product.name}</span>
            </nav>

            <button onClick={() => navigate(-1)} className={style.backButton}>
                <img src={arrowLeft} alt="Назад" />
                Назад
            </button>

            <div className={style.productContainer}>
                <div className={style.imageGallery}>
                    <div className={style.mainImage}>
                        <img
                            src={product.images?.[selectedImage] || product.image}
                            alt={product.name}
                        />
                        {/* Бейджи */}
                        <div className={style.badges}>
                            {product.brand === "ХИТ" && (
                                <div className={style.hitBadge}>ХИТ</div>
                            )}
                            {product.brand === "SALE" && (
                                <div className={style.saleBadge}>SALE</div>
                            )}
                            {product.isNew && (
                                <div className={style.newBadge}>NEW</div>
                            )}
                            {product.premium && (
                                <div className={style.premiumBadge}>ПРЕМИУМ</div>
                            )}
                            {product.discount && (
                                <div className={style.discountBadge}>-{product.discount}%</div>
                            )}
                        </div>
                    </div>

                    {/* {product.images && product.images.length > 1 && (
                        <div className={style.thumbnailList}>
                            {product.images.map((img, index) => (
                                <button
                                    key={index}
                                    className={`${style.thumbnail} ${selectedImage === index ? style.active : ''}`}
                                    onClick={() => setSelectedImage(index)}
                                >
                                    <img src={img} alt={`${product.name} ${index + 1}`} />
                                </button>
                            ))}
                        </div>
                    )} */}
                </div>

                <div className={style.productInfo}>
                    <div className={style.header}>
                        <h1 className={style.productTitle}>{product.name}</h1>
                        <div className={style.actions}>
                            <button
                                className={style.likeButton}
                                onClick={() => setIsLiked(!isLiked)}
                            >
                                <img
                                    src={isLiked ? likeFilled : likeEmpty}
                                    alt="Like"
                                />
                            </button>
                            <button
                                className={style.shareButton}
                                onClick={handleShare}
                            >
                                <img src={shareIcon} alt="Поделиться" />
                            </button>
                        </div>
                    </div>

                    <div className={style.priceSection}>
                        <span className={style.currentPrice}>{product.price}</span>
                        {product.originalPrice && (
                            <span className={style.originalPrice}>{product.originalPrice}</span>
                        )}
                    </div>

                    <div className={style.description}>
                        <p>{product.description}</p>
                    </div>


                    {product.sizes && product.sizes.length > 0 && (
                        <div className={style.sizeSection}>
                            <h3>Размер:</h3>
                            <div className={style.sizeOptions}>
                                {product.sizes.map(size => (
                                    <button
                                        key={size}
                                        className={`${style.sizeOption} ${selectedSize === size ? style.selected : ''}`}
                                        onClick={() => setSelectedSize(size)}
                                    >
                                        {size}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}


                    {product.colors && product.colors.length > 0 && (
                        <div className={style.colorSection}>
                            <h3>Цвет:</h3>
                            <div className={style.colorOptions}>
                                {product.colors.map(color => (
                                    <button
                                        key={color}
                                        className={`${style.colorOption} ${selectedColor === color ? style.selected : ''}`}
                                        onClick={() => setSelectedColor(color)}
                                        title={color}
                                    >
                                        <span className={style.colorName}>{color}</span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}


                    <div className={style.quantitySection}>
                        <h3>Количество:</h3>
                        <div className={style.quantityControls}>
                            <button onClick={decrementQuantity} className={style.quantityButton}>-</button>
                            <span className={style.quantity}>{quantity}</span>
                            <button onClick={incrementQuantity} className={style.quantityButton}>+</button>
                        </div>
                    </div>


                    <div className={style.actionButtons}>
                        <button
                            className={`${style.addToCartButton} ${isInCartCurrently ? style.inCart : ''}`}
                            onClick={handleAddToCart}
                            disabled={!product.inStock}
                        >
                            {isInCartCurrently ? 'В корзине' : 'Добавить в корзину'}
                        </button>
                        <button className={style.buyNowButton}>
                            Купить сейчас
                        </button>
                    </div>


                    <div className={style.deliveryInfo}>
                        <div className={style.deliveryItem}>
                            <strong>🚚 Бесплатная доставка</strong>
                            <span>от 3000 ₽</span>
                        </div>
                        <div className={style.deliveryItem}>
                            <strong>📦 Самовывоз</strong>
                            <span>из магазина сегодня</span>
                        </div>
                        <div className={style.deliveryItem}>
                            <strong>🔄 Возврат</strong>
                            <span>14 дней</span>
                        </div>
                    </div>
                </div>
            </div>


            <div className={style.additionalInfo}>
                <div className={style.features}>
                    <h3>Характеристики</h3>
                    <ul>
                        {product.features?.map((feature, index) => (
                            <li key={index}>{feature}</li>
                        ))}
                    </ul>
                </div>

                <div className={style.descriptionFull}>
                    <h3>Описание</h3>
                    <p>{product.description}</p>
                    <p>Высококачественный материал, удобная посадка, стильный дизайн. Идеально подходит для повседневного ношения.</p>
                </div>
            </div>
        </div>
    );
};

export default Product;
