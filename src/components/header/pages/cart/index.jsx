import style from "./style.module.css";

const Cart = () => {
    return (
        <div className={style.cart}>
            <h1>Корзина</h1>
            <p>Ваши товары для покупки</p>
        </div>
    );
};

export default Cart;