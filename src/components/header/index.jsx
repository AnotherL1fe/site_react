import style from "./style.module.css";

import homeIcon from "../../assets/home.png";
import catalogIcon from "../../assets/catalog.png";
import favoriteIcon from "../../assets/favorite.png";
import cartIcon from "../../assets/cart.png";
import profileIcon from "../../assets/profile.png";

const Footer = () => {
    return (
        <footer className={style.footer}>
            <div className={style.footerContent}>
                <button className={style.footerButton}>
                    <img src={homeIcon} alt="Главная" className={style.buttonIcon} />
                </button>
                <button className={style.footerButton}>
                    <img src={catalogIcon} alt="Каталог" className={style.buttonIcon} />
                </button>
                <button className={style.footerButton}>
                    <img src={favoriteIcon} alt="Избранное" className={style.buttonIcon} />
                </button>
                <button className={style.footerButton}>
                    <img src={cartIcon} alt="Корзина" className={style.buttonIcon} />
                </button>
                <button className={style.footerButton}>
                    <img src={profileIcon} alt="Профиль" className={style.buttonIcon} />
                </button>
            </div>
        </footer>
    );
};

export default Footer;