import React from "react";

const Post = () => {
    return (
        <div className="w3-col l12 s12">
            <div className="w3-card-4 w3-margin w3-white">
                <h1 className="title">Lorem ipsum dolor sit amet.</h1>
                <div className="mainFlex">
                    <div className="leftFlex">
                        <p className="largeFont">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad delectus eaque, eum eveniet facere ipsam magni nihil odit officia quasi reiciendis repudiandae sit velit veritatis voluptatem. Fuga iusto quae sunt?</p>
                    </div>
                    <div className="rightFlex">
                        <img className="img" src="https://habrastorage.org/r/w1560/getpro/habr/upload_files/73b/13f/8e9/73b13f8e905795688f912f41c100a4ce.jpeg" alt="mountain"/>
                    </div>
                </div>
                <hr className="line"/>
                <h4 className="leftMargin">Оставить комментарий*</h4>
                <div className="commentFlex">
                    <input className="input:focus commentWidth" type="text" placeholder="Введите ваше имя"/>
                    <textarea className="textarea:focus commentWidth" placeholder="Внесите комментарий"/>
                    <button className="btn">Отправить</button>
                </div>
                <hr className="line"/>
                <div className="colFlex">
                    <h4 className="leftMargin">Все комментарии*</h4>
                    <div className="colFlex">
                        <div className="rowFlex">
                            <div className="commentSectionDetails">
                                <span className="italicFont">Jane Doe</span>
                                <span className="italicFont">10.10.2010</span>
                            </div>
                            <div className="commentSectionContent">
                                <span className="commentSectionBorder">Lorem ipsum dolor sit amet.</span>
                            </div>
                        </div>
                        <div className="rowFlex">
                            <div className="commentSectionDetails">
                                <span className="italicFont">John Doe</span>
                                <span className="italicFont">12.10.2013</span>
                            </div>
                            <div className="commentSectionContent">
                                <span className="commentSectionBorder">Lorem ipsum dolor sit amet.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post;