import React  from 'react'

function CommentList(props) {
    const { comment: { user, text } } = props;
    return (
        <div>
            <h4>{ user }</h4>
            <p>{ text }</p>
        </div>
    )
}

export default CommentList