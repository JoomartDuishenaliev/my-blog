import React from "react";
import PostDescription from "./components/PostDescription/PostDescription";
import "./App.css";

const App = () => {
    return (
        <>
            <div className="w3-content" style={{maxWidth: "1400px"}}>
                <PostDescription/>
            </div>
        </>
    )
}

export default App;