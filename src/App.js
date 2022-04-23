import React from "react";
import PostDescription from "./components/PostDescription/PostDescription";
import "./App.css";

const App = () => {
    return (
        <>
            <div className="w3-content" style={{maxWidth: "1400px"}}>
                <PostDescription
                    title="Main Title"
                    desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur deleniti magni modi mollitia
                          nihil, quae quasi quia. Assumenda consequuntur earum enim est et excepturi nesciunt, officia
                          perferendis praesentium quisquam ratione? Lorem ipsum dolor sit amet, consectetur
                          adipisicing elit. Amet at beatae debitis dignissimos eligendi ex impedit magni porro quae, quia ratione
                          repellat vero voluptatem. A alias at doloribus eos repellendus."
                    img="https://images.unsplash.com/photo-1650450430541-9a95627ef2eb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1206&q=80"
                    prevComments="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad asperiores commodi iure
                                  omnis provident quasi, quibusdam repellendus voluptatibus! Debitis ex iure, quos
                                  repudiandae sequi velit voluptatibus! Eos ex neque rem!"
                />
            </div>
        </>
    )
}

export default App;