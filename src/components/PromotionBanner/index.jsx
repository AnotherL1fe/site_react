import style from "./style.module.css";


const PromotionBanner = ({banner}) => {
    return (
        <div className={style.promotionBanner}>
            <div className={style.bannerContent}>
                <div className={style.bannerText}>
                    <h1 className={style.bannerTitle}>ВСЕМ КЛИЕНТАМ ДАРИМ 500 РУБ.</h1>
                    <p className={style.bannerSubtitle}>На первый заказ в телеграм-боте</p>
                </div>
                <button className={style.detailsButton}>Подробнее</button>
            </div>
        </div>
    );
};

export default PromotionBanner