import { useState } from "react";
import style from "./style.module.css";

const Search = ({ onSearch, productsCount }) => {
    const [searchQuery, setSearchQuery] = useState("");

    const handleSearchChange = (e) => {
        const value = e.target.value;
        setSearchQuery(value);
        onSearch(value);
    };

    const clearSearch = () => {
        setSearchQuery("");
        onSearch("");
    };

    return (
        <div className={style.searchSection}>
            <div className={style.searchContainer}>
                <input
                    type="text"
                    placeholder="Поиск товаров..."
                    value={searchQuery}
                    onChange={handleSearchChange}
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
            {searchQuery && (
                <div className={style.searchResults}>
                    Найдено товаров: {productsCount}
                </div>
            )}
        </div>
    );
};

export default Search;