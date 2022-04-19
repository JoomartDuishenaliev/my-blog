import React from "react";
import CounterButtons from "./components/CounterButtons/CounterButtons";

const App = () => {
    return (
        <>
            <div className="w3-content" style={{maxWidth:"1400px", display:"flex", justifyContent:"center"}}>
                <div style={{display:"flex", justifyContent:"center", backgroundColor:"lightblue",
                height:"200px", width:"300px"}}>
                    <CounterButtons/>
                </div>
            </div>
        </>
    )
}

export default App;