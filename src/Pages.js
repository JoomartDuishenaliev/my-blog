import React, {useEffect, useState} from "react";
import {Link, useParams, useLocation, useNavigate} from "react-router-dom";
import {POSTS} from "./constants";

export const CheckIfActive = () => (object) => object.isActive ? "active-link" : "";

export const Main = () => <h1 className="title">Главная страничка</h1>;

export const Products = () => <h1 className="title">Наши продукты</h1>;

export const About = () => {
    const navigate = useNavigate();
    const goForward = () => {
        navigate("/products");
    }
    return (
        <>
            <h1 className="title">О нас</h1>;
            <button onClick={goForward}>Вперед</button>
        </>
    )
}

export const Contacts = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    }



    return (
        <>
            <h1 className="title">Контакты</h1>
            <button onClick={goBack}>Назад</button>

        </>
    )
}

export const Post = () => {
    const {id} = useParams();
    const [post, setPost] = useState({})
    const navigate = useNavigate();

    const getPost = () => {
        const post = POSTS.find(item => item.id === parseInt(id));
        if(!post){
            navigate('/');
        } else {
            setPost(post);
        }
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

export const QA = () => <h1 className="title">Вопросы и ответы</h1>

export const Feedback = () => <h1 className="title">Отзывы</h1>

export const Posts = () => {
    return (
        <div className="posts">
            <h1 className="title">Все посты</h1>
            <ul>
                {
                    POSTS.map(item => {
                        return <li key={item.id}><Link to={`/post/${item.id}`}>{item.title}</Link></li>
                    })
                }
            </ul>
        </div>
    )
}


export const NotFound = () => <h1 className="title">Страничка не найдена. <Link to="/">Перейти на главную</Link></h1>;