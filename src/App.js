import React from "react";
import {Routes, Route, NavLink} from "react-router-dom";
import {Main, About, Products, Contacts, Post, NotFound, CheckIfActive} from "./Pages";
import "./App.css";

const App = () => {
    return (
        <>
            <nav className="nav">
                <ul>
                    <li>
                        <NavLink className={CheckIfActive()} to="/">Главная</NavLink>
                    </li>
                    <li>
                        <NavLink className={CheckIfActive()} to="/products">Продукты</NavLink>
                    </li>
                    <li>
                        <NavLink className={CheckIfActive()} to="/about">О нас</NavLink>
                    </li>
                    <li>
                        <NavLink className={CheckIfActive()} to="/contacts">Контакты</NavLink>
                    </li>
                    <li>
                        <NavLink className={CheckIfActive()} to="/post/165">Пост</NavLink>
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route path="/" element={<Main/>}/>
                <Route path="/products" element={<Products/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/contacts" element={<Contacts/>}/>
                <Route path="/post/:id" element={<Post/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </>
    )
}

export default App;