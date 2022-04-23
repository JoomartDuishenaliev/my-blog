import React from "react";
import Header from "../../header/Header";
import BlogEntries from "../../BlogEntries/BlogEntries";
import IntroductionMenu from "../../IntroductionMenu/IntroductionMenu";
import Footer from "../../Footer/Footer";

const Main = () => {
    return (
        <>
            <div className="w3-content" style={{maxWidth: "1400px"}}>
                <Header/>
                <div className="w3-row">
                    <BlogEntries/>
                    <IntroductionMenu/>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Main;