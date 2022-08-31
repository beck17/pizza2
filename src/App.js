import React from "react";
import {Route, Routes} from "react-router-dom";

import {Header} from "./components";
import {Cart, Home} from "./pages";

import './scss/app.scss'


function App() {
    return (
        <div className="wrapper">
            <Header/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/cart' element={<Cart/>}/>
                <Route path='*' element={<h1>Not Found</h1>}/>
            </Routes>
        </div>
    );
}

export default App;
