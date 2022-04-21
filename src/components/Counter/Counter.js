import React, {useState} from "react";
import styles from "./Counter.module.css";

const styleButton = {
    backgroundColor:"navy",
    padding:"15px 35px",
    border:"none",
    marginRight:"15px",
    color:"white",
    fontSize:"22px"
}

const Counter = () => {
    console.log(styles);
    const [count, setCount] = useState(0);

    const increase = () => {
        setCount(count + 1);
    }

    const decrease = () => {
        setCount(count - 1);
    }
    return (
        <>
            <button className={styles.btn} onClick={increase}>+++</button>
            <button className={styles.btn} onClick={decrease}>---</button>
            <h1 className="title">{count}</h1>
        </>
    )
}

export default Counter;