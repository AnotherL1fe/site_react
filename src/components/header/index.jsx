import { Link, useLocation } from "react-router-dom";
import style from "./style.module.css";

import homeIcon from "../../assets/home.png";
import catalogIcon from "../../assets/catalog.png";
import favoriteIcon from "../../assets/favorite.png";
import cartIcon from "../../assets/cart.png";
import profileIcon from "../../assets/profile.png";

const Footer = () => {
    const location = useLocation();

    const isActive = (path) => {
        return location.pathname === path;
    };

    return (
        <footer className={style.footer}>
            <div className={style.footerContent}>
                <Link
                    to="/"
                    className={`${style.footerButton} ${isActive('/') ? style.active : ''}`}
                >
                    <img src={homeIcon} alt="Главная" className={style.buttonIcon} />
                </Link>
                <Link
                    to="/catalog"
                    className={`${style.footerButton} ${isActive('/catalog') ? style.active : ''}`}
                >
                    <img src={catalogIcon} alt="Каталог" className={style.buttonIcon} />
                </Link>
                <Link
                    to="/favorites"
                    className={`${style.footerButton} ${isActive('/favorites') ? style.active : ''}`}
                >
                    <img src={favoriteIcon} alt="Избранное" className={style.buttonIcon} />
                </Link>
                <Link
                    to="/cart"
                    className={`${style.footerButton} ${isActive('/cart') ? style.active : ''}`}
                >
                    <img src={cartIcon} alt="Корзина" className={style.buttonIcon} />
                </Link>
                <Link
                    to="/profile"
                    className={`${style.footerButton} ${isActive('/profile') ? style.active : ''}`}
                >
                    <img src={profileIcon} alt="Профиль" className={style.buttonIcon} />
                </Link>
            </div>
        </footer>
    );
};

export default Footer;