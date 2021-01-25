import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";


const App = () => {
    return (

        <div className="ui container comments">

            <ApprovalCard/>

            <CommentDetail
                author={"jon"}
                timeAgo={"Today at 4:00PM"} text={"What time are you guys meeting up?"}
                image={faker.image.image()}
            />
            <CommentDetail
                author={"alex"}
                timeAgo={"Today at 2:00PM"} text={"Not Sure"}
                image={faker.image.image()}
            />
            <CommentDetail
                author={"margery"}
                timeAgo={"Today at 3:00PM"}
                text={"I think around 5"}
                image={faker.image.image()}
            />
        </div>
    )
};


ReactDOM.render(<App/>, document.querySelector('#root'))

