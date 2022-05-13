import React, {useEffect, useState} from "react";

const Main = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then((data) => setData(data))
    }, [])
    if(!data) return <span>loading...</span>

    return (
        <div className="dataBody">
            <h1>Users' data</h1>
            <div className="dataCard">
                {data.map((prop) => (
                    <div className="dataContent" key={prop.id}>
                        <h4 className="dataSpacing1">{prop.name}</h4>
                        <p className="dataSpacing2">(nickname: '{prop.username}')</p>
                        <span className="dataFont">Contact details:</span>
                        <h6>phone: {prop.phone}</h6>
                        <h6>email: {prop.email}</h6>
                        <h6>Works at <span className="dataDecoration">{prop.company.name}</span></h6>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Main;