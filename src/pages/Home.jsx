import React, {useEffect, useState} from 'react';

import {Categories, IsLoadingPizza, PizzaBlock, Sort} from "../components";

function Home() {
    const arrPaginate = [1, 2, 3, 4]

    const [pizzas, setPizzas] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [activePaginate, setActivePaginate] = useState(1)

    const onClickPaginate = item => {
        setActivePaginate(item)
        // window.scrollTo({top: 0});
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
        });
    }


    useEffect(() => {
        fetch(
            `https://63028f4bc6dda4f287bb7e94.mockapi.io/pizzas?p=${activePaginate}&l=12`
        )
            .then((res) => res.json())
            .catch((e) => console.warn(e))
            .then((data) => {
                setPizzas(data)
                setIsLoading(false)
            })
    }, [activePaginate])

    return (
        <div className="content">
            <div className="container">
                <div className="content__top">
                    <Categories/>
                    <Sort/>
                </div>
                <h2 className="content__title">Все пиццы</h2>
                <div className="content__items">
                    {
                        isLoading ? (
                            [...new Array(12)].map((_, index) => (
                                <IsLoadingPizza key={index}/>
                            ))
                        ) : (
                            pizzas.map((pizza) =>
                                <PizzaBlock {...pizza} key={pizza.id}/>
                            ))
                    }
                </div>
                <div className="paginate">
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