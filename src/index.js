import React from 'react';
import ReactDom from 'react-dom';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
import faker from 'faker';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <h4>Warning!</h4>
                Are you sureyou want to do this?
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    avatar={faker.image.image()} 
                    author="Sam" 
                    timeAgo="Today at 4:45PM" 
                    comment="Nice blog post!" 
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    avatar={faker.image.image()} 
                    author="Alex" 
                    timeAgo="Yesterday at 4:45PM" 
                    comment="Nice blog post!" 
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    avatar={faker.image.image()} 
                    author="Jane" 
                    timeAgo="December at 4:45PM" 
                    comment="Nice blog post!" 
                />
            </ApprovalCard>
        </div>
    );
};

ReactDom.render(<App />, document.querySelector('#root'));