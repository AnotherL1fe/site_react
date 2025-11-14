import { useState, useRef, useEffect } from "react";
import style from "./style.module.css";
 const popularSearches = [
        "футболка",
        "свитшот",
        "сертификат",
        "куртка",
        "детская футболка",
        "подарочный сертификат",
        "штаны спортивные",
        "сертификат на 1000 рублей",
        "шапка",
        "брелок"
    ];
const Search = ({ onSearch, productsCount }) => {
    const [searchQuery, setSearchQuery] = useState("");
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const searchRef = useRef(null);

   

    const handleSearchChange = (e) => {
        const value = e.target.value;
        setSearchQuery(value);
        onSearch(value);
    };

    const handleSearchClick = () => {
        setIsSearchOpen(true);
    };

    const handleCloseSearch = () => {
        setIsSearchOpen(false);
        setSearchQuery("");
        onSearch("");
    };

    const handlePopularSearch = (query) => {
        setSearchQuery(query);
        onSearch(query);
        setIsSearchOpen(false);
    };

    const clearSearch = () => {
        setSearchQuery("");
        onSearch("");
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (searchRef.current && !searchRef.current.contains(event.target)) {
                setIsSearchOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className={style.searchSection} ref={searchRef}>
            <div className={style.searchContainer}>
                <input
                    type="text"
                    placeholder="Найти товары"
                    value={searchQuery}
                    onChange={handleSearchChange}
                    onClick={handleSearchClick}
                    className={style.searchInput}
                />
                {searchQuery && (
                    <button
                        onClick={clearSearch}
                        className={style.clearButton}
                        title="Очистить поиск"
                    >
                        ×
                    </button>
                )}
            </div>

            {isSearchOpen && (
                <div className={style.searchDropdown}>
                    <div className={style.dropdownHeader}>
                        <span className={style.dropdownTitle}>Часто ищут</span>
                        <button
                            onClick={handleCloseSearch}
                            className={style.closeButton}
                        >
                            ✕ Закрыть
                        </button>
                    </div>

                    <div className={style.popularSearches}>
                        {popularSearches.map((search, index) => (
                            <div
                                key={index}
                                className={style.popularSearchItem}
                                onClick={() => handlePopularSearch(search)}
                            >
                                <span className={style.searchBullet}>•</span>
                                <span className={style.searchText}>{search}</span>
                            </div>
                        ))}
                    </div>

                    <div className={style.tgChannel}>
                        <span>наш tg-канал</span>
                    </div>
                </div>
            )}

            {searchQuery && (
                <div className={style.searchResults}>
                    Найдено товаров: {productsCount}
                </div>
            )}
        </div>
    );
};

export default Search;