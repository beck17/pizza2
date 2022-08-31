import React, {useEffect, useState} from 'react';

import {Categories, IsLoadingPizza, PizzaBlock, Sort} from "../components";

function Home() {
    const [pizzas, setPizzas] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetch(
            'https://63028f4bc6dda4f287bb7e94.mockapi.io/pizzas'
        )
            .then((res) => res.json())
            .catch((e) => console.warn(e))
            .then((data) => {
                setPizzas(data)
                setIsLoading(!isLoading)
            })

    }, [])
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
                            [...new Array(40)].map((_, index) => (
                                <IsLoadingPizza key={index}/>
                            ))
                        ) : (
                            pizzas.map((pizza) =>
                                <PizzaBlock {...pizza} key={pizza.id}/>
                            ))
                    }
                </div>
            </div>
        </div>
    );
}

export default Home;