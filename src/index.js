import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";


const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
               <div>
                   <h4>Warning</h4>

               </div>
            </ApprovalCard>


            <ApprovalCard>
                <CommentDetail
                    author={"jon"}
                    timeAgo={"Today at 4:00PM"} text={"What time are you guys meeting up?"}
                    image={faker.image.image()}/>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author={"alex"}
                    timeAgo={"Today at 2:00PM"} text={"Not Sure"}
                    image={faker.image.image()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author={"margery"}
                    timeAgo={"Today at 3:00PM"}
                    text={"I think around 5"}
                    image={faker.image.image()}
                />
            </ApprovalCard>
        </div>
    )
};


ReactDOM.render(<App/>, document.querySelector('#root'))

