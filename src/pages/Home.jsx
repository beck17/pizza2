import React, {useEffect, useState} from 'react';

import {Categories, IsLoadingPizza, PizzaBlock, Sort} from "../components";

function Home() {
    const arrPaginate = [1, 2, 3, 4, 5]
    const sorts = ['популярности', 'цене', 'алфавиту']
    const sortsFilter = ['rating', 'price', 'name']
    const categories = ['Мясные', 'Вегетарианская', 'Гриль', 'Закуски', 'Напитки']


    const [pizzas, setPizzas] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [activePaginate, setActivePaginate] = useState(1)


    const [category, setCategory] = useState(null)
    const [activeSort, setActiveSort] = useState(0)
    const [isOpen, setIsOpen] = useState(false)

    const onClickPaginate = item => {
        setActivePaginate(item)
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
        });
    }


    const onClickSort = (i) => {
        setActiveSort(i)
        setIsOpen(!isOpen)
    }


    useEffect(() => {
        setIsLoading(true)
        fetch(
            `https://63028f4bc6dda4f287bb7e94.mockapi.io/pizzas?${category === null ? `p=${activePaginate}&l=8` : `category=${category}`}&sortBy=${sortsFilter[activeSort]}&order=desc`
        )
            .then((res) => res.json())
            .catch((e) => console.warn(e))
            .then((data) => {
                setPizzas(data)
                setIsLoading(false)
            })
    }, [activePaginate, category, activeSort])

    return (
        <div className="content">
            <div className="container">
                <div className="content__top">
                    <Categories
                        categories={categories}
                        category={category}
                        setCategory={setCategory}
                        onClickCategory={(index) => setCategory(index)}
                    />
                    <Sort
                        sorts={sorts}
                        activeSort={activeSort}
                        setActiveSort={setActiveSort}
                        onClickSort={onClickSort}
                        isOpen={isOpen}
                        setIsOpen={setIsOpen}
                    />
                </div>
                <h2 className="content__title">Все пиццы</h2>
                <div className="content__items">
                    {
                        isLoading ? (
                            [...new Array(8)].map((_, index) => (
                                <IsLoadingPizza key={index}/>
                            ))
                        ) : (
                            pizzas.map((pizza) =>
                                <PizzaBlock {...pizza} key={pizza.id}/>
                            ))
                    }
                </div>
                <div className={category === null ? 'paginate' : 'displayNone'}>
                    <ul>
                        {
                            arrPaginate.map((item) =>
                                <li
                                    key={item}
                                    className={activePaginate === item ? 'paginate-button_active' : 'paginate-button'}
                                    style={{marginRight: '17px'}}
                                    onClick={() => onClickPaginate(item)}
                                >
                                    {item}
                                </li>
                            )
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Home;