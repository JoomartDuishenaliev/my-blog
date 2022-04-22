import React from "react";

const PostDescription = () => {
    return (
        <div className="w3-col l12 s12 card">
            <div className="w3-card-4 w3-margin w3-white">
                <h1 className="title">Main Title</h1>
                <div className="mainFlex">
                    <div className="leftFlex">
                        <p className="largeFont">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Aspernatur
                            deleniti magni modi mollitia
                            nihil, quae quasi quia. Assumenda consequuntur earum enim est et excepturi nesciunt, officia
                            perferendis praesentium quisquam ratione? Lorem ipsum dolor sit amet, consectetur
                            adipisicing
                            elit. Amet at beatae debitis dignissimos eligendi ex impedit magni porro quae, quia ratione
                            repellat vero voluptatem. A alias at doloribus eos repellendus.</p>
                    </div>
                    <div className="rightFlex">
                        <img
                            src="https://images.unsplash.com/photo-1650450430541-9a95627ef2eb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1206&q=80"
                            alt="fjell"/>
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
                                <span className="commentSectionBorder">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad asperiores commodi iure
                                    omnis provident quasi, quibusdam repellendus voluptatibus! Debitis ex iure, quos
                                    repudiandae sequi velit voluptatibus! Eos ex neque rem!</span>
                            </div>
                        </div>
                        <div className="rowFlex">
                            <div className="commentSectionDetails">
                                <span className="italicFont">John Doe</span>
                                <span className="italicFont">12.10.2013</span>
                            </div>
                            <div className="commentSectionContent">
                                <span className="commentSectionBorder">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquid autem, blanditiis est eveniet id in maxime, nisi odit quibusdam repudiandae ullam, ut voluptatibus! Blanditiis culpa enim illum magnam reprehenderit!</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostDescription;