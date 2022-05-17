import React, {useEffect, useState} from "react";
import styles from "./Main.module.css";
import UserCard from "../UserCard/UserCard";

const Main = () => {
    const [userData, setUserData] = useState([]);

    const FetchData = () => {
        useEffect(() => {
            const url = 'https://jsonplaceholder.typicode.com/users';
            fetch(url)
                .then((response) => response.json())
                .then(data => setUserData(data));
        }, [])
    }

    FetchData();

    return (
        <div className={styles.container}>
            {
                userData.map((item, index) => {
                    return (
                        <div key={index} className={styles.card}>
                            <UserCard name={item.name}
                                      username={item.username}
                                      email={item.email}
                                      phone={item.phone}
                                      company={item.company.name}/>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Main;