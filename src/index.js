import React from 'react';
import ReactDom from 'react-dom';
import CommentDetail from './CommentDetail';

const App = () => {
    return (
        <div className="ui container comments">
            <CommentDetail author="Sam" timeAgo="Today at 4:45PM" />
            <CommentDetail author="Alex" timeAgo="Yesterday at 4:45PM" />
            <CommentDetail author="Jane" timeAgo="December at 4:45PM" />
        </div>
    );
};

ReactDom.render(<App />, document.querySelector('#root'));