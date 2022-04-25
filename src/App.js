import React from "react";
import Main from "./components/Pages/Main/Main";
import Post from "./components/Pages/Post/Post";
import "./App.css";
import {BrowserRouter, Routes, Route} from "react-router-dom";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main/>}/>
                <Route path="/post" element={<Post/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App;