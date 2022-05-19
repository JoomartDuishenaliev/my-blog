import React, {useEffect, useState} from "react";
import styles from "./Main.module.css";

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
                albumPhoto.map((elem) => {
                    if (elem.albumId === 1){
                        return (
                            <div key={elem.id} className={styles.redCard}>
                                <p>{elem.title}</p>
                                <img src={elem.url}></img>
                            </div>
                        )
                    } else if(elem.albumId === 2){
                        return (
                            <div key={elem.id} className={styles.blueCard}>
                                <p>{elem.title}</p>
                                <img src={elem.url}></img>
                            </div>
                        )
                    } else if(elem.albumId === 3){
                        return (
                            <div key={elem.id} className={styles.greenCard}>
                                <p>{elem.title}</p>
                                <img src={elem.url}></img>
                            </div>
                        )
                    }
                })

            }
        </div>
    )
}

export default Main;