import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import {POSTS} from "./constants";

export const CheckIfActive = () => (object) => object.isActive ? "active-link" : "";

export const Main = () => <h1 className="title">Главная страничка</h1>;

export const Products = () => <h1 className="title">Наши продукты</h1>;

export const About = () => <h1 className="title">О нас</h1>;

export const Contacts = () => <h1 className="title">Контакты</h1>;

export const Post = () => {
    const {id} = useParams();
    const [post, setPost] = useState({})

    const getPost = () => {
        const post = POSTS.find(item => item.id === parseInt(id));
        setPost(post);
    }

    useEffect(() => {
        getPost();
    }, [])

    return (
        <div className="post">
            <h1 className="title">{post.title}</h1>;
            <p>{post.desc}</p>;
        </div>
    )
}

export const Posts = () => {
    return (
        <div className="posts">
            <h1 className="title">Все посты</h1>
            <ul>
                {
                    POSTS.map(item => {
                        return <li><Link to={`/post/${item.id}`} key={item.id}>{item.title}</Link></li>
                    })
                }
            </ul>
        </div>
    )
}


export const NotFound = () => <h1 className="title">Страничка не найдена. <Link to="/">Перейти на главную</Link></h1>;