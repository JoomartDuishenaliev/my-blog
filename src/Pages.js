import React from "react";
import {Link, useParams} from "react-router-dom";

export const CheckIfActive = () => {
    return (object) => object.isActive ? "active-link" : "";
}

export const Main = () => <h1 className="title">Главная страничка</h1>;

export const Products = () => <h1 className="title">Наши продукты</h1>;

export const About = () => <h1 className="title">О нас</h1>;

export const Contacts = () => <h1 className="title">Контакты</h1>;

export const Post = () => {
    const params = useParams();
    return <h1 className="title">Пост с ID: {params.id}</h1>;
}

export const NotFound = () => <h1 className="title">Страничка не найдена. <Link to="/">Перейти на главную</Link></h1>;