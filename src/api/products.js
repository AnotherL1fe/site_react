
import card1 from "../assets/products/1card.png";
import card2 from "../assets/products/2card.png";
import card3 from "../assets/products/3card.png";
import card4 from "../assets/products/4card.png";
import card5 from "../assets/products/5card.png";
import card6 from "../assets/products/6card.png";
import card7 from "../assets/products/7card.jpg";
import card8 from "../assets/products/8card.jpg";
const mockProducts = {
    1: {
        id: 1,
        brand: "ХИТ",
        premium: false,
        price: "2 800 ₽",
        originalPrice: "3 500 ₽",
        name: "Футболка мужская Комары",
        description: "Мужская футболка из 100% хлопка с уникальным принтом. Комфортная посадка, долговечная печать.",
        isNew: false,
        image: card1,
        images: [card1, card2, card3],
        sizes: ["S", "M", "L", "XL", "XXL"],
        colors: ["Черный", "Белый", "Серый"],
        features: ["100% хлопок", "Устойчивая печать", "Машинная стирка"],
        category: "Футболки",
        inStock: true,
        discount: 20
    },
    2: {
        id: 2,
        brand: "",
        premium: false,
        price: "2 700 ₽",
        name: "Свитшот женский укороченный Yamal est.2017",
        description: "Укороченный свитшот для женщин из мягкого футера. Стильный крой и комфортная посадка.",
        isNew: false,
        image: card2,
        images: [card2, card1],
        sizes: ["XS", "S", "M", "L"],
        colors: ["Розовый", "Бежевый", "Черный"],
        features: ["Мягкий футер", "Укороченный крой", "Качественная строчка"],
        category: "Толстовки",
        inStock: true
    },
    3: {
        id: 3,
        brand: "SALE",
        premium: false,
        price: "1 550 ₽",
        originalPrice: "2 200 ₽",
        name: "Шапка Yamal комбинация с бумбономапша",
        description: "Теплая шапка с помпоном, комбинированные материалы. Отлично защищает от холода, стильный дизайн. Подходит для зимних прогулок и активного отдыха.",
        isNew: true,
        image: card3,
        images: [card3, card1, card2],
        sizes: ["Универсальный"],
        colors: ["Черная", "Серая", "Синяя", "Красная"],
        features: ["Комбинированные материалы", "Мягкий помпон", "Эластичная резинка", "Не колется", "Сохраняет форму"],
        category: "Аксессуары",
        inStock: true,
        discount: 30,
        material: "Шерсть 70%, Акрил 30%",
        care: "Ручная стирка, не выжимать",
        delivery: "1-2 дня"
    },
    4: {
        id: 4,
        brand: "SALE",
        premium: false,
        price: "640 ₽",
        originalPrice: "800 ₽",
        name: "Брелок фирменный «Созвездие»",
        description: "Фирменный брелок с символикой бренда. Качественная металлическая фурнитура, долговечное покрытие. Отличный подарок для друзей и близких.",
        isNew: false,
        image: card4,
        images: [card4, card3],
        sizes: ["Один размер"],
        colors: ["Серебро", "Золото", "Черный"],
        features: ["Металлическая основа", "Качественное покрытие", "Прочное крепление", "Не выцветает", "Легкий уход"],
        category: "Аксессуары",
        inStock: true,
        discount: 20,
        material: "Металл с покрытием",
        care: "Протирать влажной тканью",
        delivery: "1-2 дня"
    },
    5: {
        id: 5,
        brand: "",
        premium: false,
        price: "3 850 ₽",
        name: "Шорты мужские Yamal",
        description: "Мужские шорты для спорта и отдыха. Удобный крой, качественные материалы. Идеальны для тренировок, пляжа или повседневной носки.",
        isNew: true,
        image: card5,
        images: [card5, card1, card4],
        sizes: ["S", "M", "L", "XL"],
        colors: ["Черный", "Синий", "Зеленый", "Серый"],
        features: ["Дышащий материал", "Эластичная резинка", "Карманы", "Быстросохнущий", "Комфортная посадка"],
        category: "Штаны",
        inStock: true,
        material: "Полиэстер 100%",
        care: "Стирка при 40°C, не гладить",
        delivery: "2-4 дня"
    },
    6: {
        id: 6,
        brand: "",
        premium: true,
        price: "10 000 ₽",
        name: "Сертификат Yamal 10000",
        description: "Подарочный сертификат на 10 000 рублей. Дарит свободу выбора - обладатель сможет самостоятельно выбрать понравившиеся товары в нашем магазине.",
        isNew: false,
        image: card6,
        images: [card6],
        sizes: ["Номинал 10 000 ₽"],
        colors: ["Подарочный"],
        features: ["Электронный или бумажный формат", "Доставка на email", "Срок действия 1 год", "Возможность доплаты", "Персональное поздравление"],
        category: "Сертификаты",
        inStock: true,
        material: "Цифровой/Бумажный",
        care: "Хранить в сухом месте",
        delivery: "Мгновенно"
    },
    7: {
        id: 7,
        brand: "",
        premium: true,
        price: "100 000 ₽",
        name: "Трусы Пашка",
        description: "Легендарные Superma трусы. Дарит свободу.",
        isNew: false,
        image: card7,
        images: [card7],
        sizes: ["S", "M", "L", "XL"],
        colors: ["Черный", "Синий", "Зеленый", "Серый", "Леопардовый"],
        features: ["Дышащий материал", "Эластичная резинка", "Карманы", "Быстросохнущий", "Комфортная посадка"],
        category: "Трусы",
        inStock: true,
        material: "Металл с покрытием",
        care: "Хранить в туалете",
        delivery: "Мгновенно"
    }
};


export async function getProducts() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(mockProducts)
        }, 1000)
    })
}

export async function getProductById(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(mockProducts[id])
        }, 1000)
    })
}


// const allProducts = [
//   {
//     brand: "ХИТ",
//     premium: false,
//     price: "2 800 ₽",
//     name: "Футболка мужская Комары",
//     description: "Мужская футболка из 100% хлопка с уникальным принтом",
//     isNew: false,
//     image: card1,
//     id: 1
//   },
//   {
//     brand: "",
//     premium: false,
//     price: "2 700 ₽",
//     name: "Свитшот женский укороченный Yamal est.2017",
//     description: "Укороченный свитшот для женщин из мягкого футера",
//     isNew: false,
//     image: card2,
//     id: 2
//   },
//   {
//     brand: "SALE",
//     premium: false,
//     price: "1 550 ₽",
//     name: "Шапка Yamal комбинация с бумбономапша",
//     description: "Теплая шапка с помпоном, комбинированные материалы",
//     isNew: true,
//     image: card3,
//     id: 3
//   },
//   {
//     brand: "SALE",
//     premium: false,
//     price: "640 ₽",
//     name: "Брелок фирменный «Созвездие»",
//     description: "Фирменный брелок с символикой бренда",
//     isNew: false,
//     image: card4,
//     id: 4
//   },
//   {
//     brand: "",
//     premium: false,
//     price: "3 850 ₽",
//     name: "Шорты мужские Yamal",
//     description: "Мужские шорты для спорта и отдыха",
//     isNew: true,
//     image: card5,
//     id: 5
//   },
//   {
//     brand: "",
//     premium: true,
//     price: "10 000 ₽",
//     name: "Сертификат Yamal 10000",
//     description: "Подарочный сертификат на 10 000 рублей",
//     isNew: false,
//     image: card6,
//     id: 6
//   }
// ];