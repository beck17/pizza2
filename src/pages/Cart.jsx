import React from 'react';
import {Link} from "react-router-dom";

function Cart() {
    return (
        <div className="content">
            <div className="container container--cart">
                <div className="cart cart--empty">
                    <h2>Корзина пустая</h2>
                    <p>
                        Вероятней всего, вы не заказывали ещё пиццу.<br/>
                        Для того, чтобы заказать пиццу, перейди на главную страницу.
                    </p>
                    <img src="/img/empty-cart.png" alt="Empty cart"/>
                    <Link to='/'>
                        <button className="button button--black">Вернуться назад</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Cart;