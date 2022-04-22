import React from "react";
import Header from "./components/header/Header";
import BlogEntries from "./components/BlogEntries/BlogEntries";
import PostDescription from "./components/PostDescription/PostDescription";
import "./App.css";

const App = () => {
    return (
        <>
            <div className="w3-content" style={{maxWidth: "1400px"}}>
                <Header/>
                <div className="w3-row">
                    <BlogEntries/>
                    <PostDescription/>
                </div>
            </div>
        </>
    )
}

export default App;