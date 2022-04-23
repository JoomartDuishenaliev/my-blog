import React from "react";
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import Post from "./components/Pages/Post/Post";
import "./App.css";
import Main from "./components/Pages/Main/Main";

const App = () => {
    return (
        <>
            <Main/>
            <BrowserRouter>
                <Link to="post"/>
                <Routes>
                    <Route path="post" element={<Post/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App;