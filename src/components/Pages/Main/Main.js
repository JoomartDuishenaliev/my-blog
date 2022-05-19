import React, {useEffect, useState} from "react";
import styles from "./Main.module.css";
import {NavLink} from "react-router-dom";

const Main = () => {
    const [albumPhoto, setAlbumPhoto] = useState([]);

    useEffect(() => {
        const url = 'https://jsonplaceholder.typicode.com/photos';
        fetch(url)
            .then((response) => response.json())
            .then(data => setAlbumPhoto(data));
    }, [])

    return (
        <div className={styles.container}>
            {
                albumPhoto.map(photo => {
                    return (
                        <>
                            {
                                function changeStyle () {
                                    if (photo.albumId === 1) {
                                        return (
                                            <div key={photo.id} className={styles.card}>
                                                <p>{photo.title}</p>
                                                <NavLink to={photo.url}><p>Photo link</p></NavLink>
                                                <img src={photo.thumbnailUrl}></img>
                                            </div>
                                        )
                                    }
                                }
                            }
                        </>
                    )
                })
            }
        </div>
    )
}

export default Main;