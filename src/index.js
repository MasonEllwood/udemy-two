import React from 'react';
import ReactDom from 'react-dom';
import CommentDetail from './CommentDetail';
import faker from 'faker';

const App = () => {
    return (
        <div className="ui container comments">
            <CommentDetail 
                avatar={faker.image.image()} 
                author="Sam" 
                timeAgo="Today at 4:45PM" 
                comment="Nice blog post!" 
            />
            <CommentDetail 
                avatar={faker.image.image()} 
                author="Alex" 
                timeAgo="Yesterday at 4:45PM" 
                comment="Nice blog post!" 
            />
            <CommentDetail 
                avatar={faker.image.image()} 
                author="Jane" 
                timeAgo="December at 4:45PM" 
                comment="Nice blog post!" 
            />
        </div>
    );
};

ReactDom.render(<App />, document.querySelector('#root'));