import React, {useEffect, useState} from "react";

const Main = () => {
    const [showProp, setShowProp] = useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((data) => setShowProp(showProp));
    }, [])

    return (
        <>
            <h1>Метод Fetch</h1>
        </>
    )
}

export default Main;