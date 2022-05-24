import React, {useEffect, useState} from "react";
import styles from "./Main.module.css";

const BGColor = {
    1:styles.red,
    2:styles.blue,
    3:styles.pink,
    4:styles.green,
    5:styles.yellow
}

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
                albumPhoto.map((item, index) => {

                    return (
                        <div key={index} className={`${styles.card} ${BGColor[item.albumId]}`}>
                            <p>{item.title}</p>
                            <img src={item.url} alt=""/>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Main;