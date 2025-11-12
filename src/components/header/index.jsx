import { useState } from "react";
import style from "./style.module.css";

import tgIcon from "../../assets/telegram-icon.png";


const Header = () => {
    return (
        <header className={style.header}>
            <div className={style.headerContent}>
                {/* Центральная - кнопка телеграм */}
                <div className={style.rightSection}>
                    <button className={style.tgButton}>
                        {/* Иконка телеграма */}
                        <img src={tgIcon} alt="Telegram" className={style.tgIcon} />
                        <span className={style.tgText}>наш tg-канал</span>
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;