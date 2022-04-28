import React from "react";
import Main from "./components/Pages/Main/Main";
import Post from "./components/Pages/Post/Post";
import "./App.css";
import {Routes, Route} from "react-router-dom";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Main/>}/>
            <Route path="/post" element={<Post/>}/>
        </Routes>
    )
}

export default App;