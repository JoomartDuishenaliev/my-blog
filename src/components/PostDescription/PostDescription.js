import React from "react";

const PostDescription = (props) => {
    return (
        <div className="w3-col l12 s12 card">
            <div className="w3-card-4 w3-margin w3-white">
                <h1 className="title">{props.title}</h1>
                <div className="mainFlex">
                    <div className="leftFlex">
                        <p className="largeFont">{props.desc}</p>
                    </div>
                    <div className="rightFlex">
                        <img className="img" src={props.img} alt="mountain"/>
                    </div>
                </div>
                <hr className="line"/>
                <h4 className="leftMargin">Оставить комментарий*</h4>
                <div className="commentFlex">
                    <input className="commentWidth" type="text" placeholder="Введите ваше имя"/>
                    <textarea className="commentWidth" placeholder="Внесите комментарий"/>
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
                                <span className="commentSectionBorder">{props.prevComments}</span>
                            </div>
                        </div>
                        <div className="rowFlex">
                            <div className="commentSectionDetails">
                                <span className="italicFont">John Doe</span>
                                <span className="italicFont">12.10.2013</span>
                            </div>
                            <div className="commentSectionContent">
                                <span className="commentSectionBorder">{props.prevComments}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostDescription;