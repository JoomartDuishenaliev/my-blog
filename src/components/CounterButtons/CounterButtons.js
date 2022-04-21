import React, {useState} from 'react';

const CounterButtons = () => {
    const [count, setCount] = useState(0);
    return (
        <div style={{display: "flex", flexDirection: "column"}}>
            <div style={{display:"flex", justifyContent:"center"}}>
                <h1>{count}</h1>
            </div>
            <div style={{display: "flex"}}>
                <button onClick={() => setCount(prevState => prevState + 1)}
                        style={{width: "75px", height: "40px", backgroundColor: "lime", marginRight:"40px"}}>
                    Increase
                </button>
                <button onClick={() => setCount(prevState => prevState - 1)}
                        style={{width: "85px", height: "40px", backgroundColor: "yellow"}}>
                    Decrease
                </button>
            </div>
        </div>
    )
}

export default CounterButtons;