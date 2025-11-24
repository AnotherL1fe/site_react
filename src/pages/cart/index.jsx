import { useContext } from 'react';
// import useCart from "../../context/cartContext"
import style from "./style.module.css";
import { CartContext } from '../../context/cartContext';

const Cart = () => {
    const { 
        cartItems, 
        removeFromCart, 
        updateQuantity, 
        getCartTotal,
        clearCart 
    } = useContext(CartContext);
    
    const handleQuantityChange = (productId, newQuantity) => {
        updateQuantity(productId, newQuantity);
    };

    const handleCheckout = () => {
        alert('Заказ оформлен!');
        clearCart();
    };

    if (cartItems.length === 0) {
        return (
            <div className={style.cart}>
                <h1>Корзина</h1>
                <div className={style.emptyCart}>
                    <p>Ваша корзина пуста</p>
                </div>
            </div>
        );
    }

    return (
        <div className={style.cart}>
            <h1>Корзина</h1>
            
            <div className={style.cartItems}>
                {cartItems.map((item) => (
                    <div key={item.id} className={style.cartItem}>
                        <img 
                            src={item.image} 
                            alt={item.name} 
                            className={style.itemImage}
                        />
                        <div className={style.itemInfo}>
                            <h3 className={style.itemName}>{item.name}</h3>
                            <p className={style.itemPrice}>{item.price}</p>
                        </div>
                        <div className={style.quantityControls}>
                            <button 
                                onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                                className={style.quantityButton}
                            >
                                -
                            </button>
                            <span className={style.quantity}>{item.quantity}</span>
                            <button 
                                onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                                className={style.quantityButton}
                            >
                                +
                            </button>
                        </div>
                        <button 
                            onClick={() => removeFromCart(item.id)}
                            className={style.removeButton}
                        >
                            ❌
                        </button>
                    </div>
                ))}
            </div>

            <div className={style.cartSummary}>
                <div className={style.total}>
                    <strong>Итого: {getCartTotal().toLocaleString('ru-RU')} ₽</strong>
                </div>
                <div className={style.actions}>
                    <button 
                        onClick={clearCart}
                        className={style.clearButton}
                    >
                        Очистить корзину
                    </button>
                    <button 
                        onClick={handleCheckout}
                        className={style.checkoutButton}
                    >
                        Оформить заказ
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Cart;