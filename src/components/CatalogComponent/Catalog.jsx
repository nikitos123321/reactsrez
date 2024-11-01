import Cards from "../CardComponent/Card";
import { products } from "../../data/data";
import style from './Catalog.module.css'

import { useState } from "react";
import { Search } from "../SearchComponent/Search";

export function Catalog() {
    const [query, setQuery] = useState('');
    const [sorting, setSorting] = useState('');
    const [category, setCategory] = useState(0)
    function sort(e) {
        setSorting(e.target.value)
    }
    function handleChange(e) {
        setQuery(e.target.value);
    }
    const filteredProducts = products.filter((product) => {
        return product.name.toLowerCase().includes(query.toLowerCase())
            && (product.category == category || category == 0);
    })

    const sortProduct = (sorting, products) => {
        switch (sorting) {
            case 'price_up':
                return [...products].sort((a, b) => a.price - b.price);
            case 'price_down':
                return [...products].sort((a, b) => b.price - a.price);
            default:
                return products;
        }
    }
    const sortedProducts = sortProduct(sorting, filteredProducts)
    return (
        <>
            <Search handleChange={handleChange} />
            <div className={style.category}>
                <button
                    onClick={() => setCategory(0)}
                    className={category === 0 ? style.active : ''}>
                    Все товары
                </button>
                <button
                    onClick={() => setCategory(1)}
                    className={category === 1 ? style.active : ''}>
                    Гитары
                </button>
                <button
                    onClick={() => setCategory(2)}
                    className={category === 2 ? style.active : ''}>
                    Пианино
                </button>
                <button
                    onClick={() => setCategory(3)}
                    className={category === 3 ? style.active : ''}>
                    Гармони
                </button>
            </div>
            <select className={style.sort} onChange={sort}>
                <option value="price_up" >Сначала дешевле</option>
                <option value="price_down">Сначала дороже</option>
            </select>
            <div className={style.flex}>
                {
                    sortedProducts.length ?
                        sortedProducts.map((product, index) => {
                            return (
                                <Cards {...product} />
                            )
                        })
                        :
                        <p className="error">Ничего не найдено по запросу "{query}"</p>
                }
            </div>
        </>
    )
}