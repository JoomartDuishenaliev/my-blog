import React from 'react';
import styles from "../Main/Main.module.css";

const UserCard = (props) => {
    return (
        <div key={props.id} className={styles.redCard}>
            <p>{props.title}</p>
            <img src={props.url}></img>
        </div>
    );
};

export default UserCard;