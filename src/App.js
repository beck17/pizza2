import React from "react";

import {Categories, Header, PizzaBlock, Sort} from "./components";
import pizzas from './db.json'

import './scss/app.scss'


function App() {
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
                            pizzas.pizzas.map((pizza) =>
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
