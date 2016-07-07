import React, { Component } from 'react'
import CommentList from './CommentList'

class Article extends Component {
    state = {
        isOpen: false,
        isCommentsOpen: false
    }

/*
    constructor(props) {
        super(props)
        this.state = {
            isOpen: false
        }
    }
*/

    render() {
        const { article } = this.props;
        const { isOpen, isCommentsOpen } = this.state
        const body = isOpen ? <section>{ article.text }</section> : null
        const comments = (typeof (article.comments) !== 'undefined') ? article.comments : [];
        const commentsButton = (comments.length)? <a href="#" onClick = {this.commentsOpen}>Коментарии ({ comments.length })</a> : null;
        const listItems = isCommentsOpen ? comments.map((comment) => <li key = {comment.id}><CommentList comment = {comment}/></li>) : null;

        return (
            <div>
                <h1 onClick = {this.toggleOpen}>{ article.title }</h1>
                {body}
                {commentsButton}
                <ul>
                    {listItems}
                </ul>
            </div>
        )
    }

    toggleOpen = (ev) => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    commentsOpen = (ev) => {
        ev.preventDefault();
        this.setState({
            isCommentsOpen: !this.state.isCommentsOpen
        })
    }
}



/*
function Article(props) {
    const article = props.article
//    const { article: { title, text } } = props

    return (
        <div>
            <h1>{ article.title }</h1>
            <section>{ article.text }</section>
        </div>
    )
}
*/

export default Article