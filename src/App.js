import React from "react";
import {Routes, Route} from "react-router-dom";
import Main from "./components/Pages/Main/Main";
import TestFetch from "./components/Pages/TestFetch/TestFetch";
import "./App.css";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Main/>}/>
            <Route path="/test-fetch" element={<TestFetch/>}/>
        </Routes>
    )
}

export default App;