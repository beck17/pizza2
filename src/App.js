import React, {useEffect, useState} from "react";

import {Categories, Header, PizzaBlock, Sort} from "./components";

import './scss/app.scss'


function App() {
    const [pizzas, setPizzas] = useState([])

    useEffect(() => {
        fetch(
            'https://63028f4bc6dda4f287bb7e94.mockapi.io/pizzas'
        )
            .then((res) => res.json())
            .catch((e) => console.warn(e))
            .then((data) => setPizzas(data))
    }, [])

    return (
        <div className="wrapper">
            <Header/>
            <div className="content">
                <div className="container">
                    <div className="content__top">
                        <Categories/>
                        <Sort/>
                    </div>
                    <h2 className="content__title">Все пиццы</h2>
                    <div className="content__items">
                        {
                            pizzas.map((pizza) =>

                                <PizzaBlock {...pizza} key={pizza.id}/>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
