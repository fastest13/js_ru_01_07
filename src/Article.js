import React, { Component } from 'react'
import CommentList from './CommentList'


class Article extends Component {
    state = {
        isOpen: false,
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
        const { isOpen} = this.state
        const body = isOpen ? <section>{ article.text }</section> : null
        const commentsLink = (article.comments) ? <CommentList comments = {article.comments}/> : null;

        return (
            <div>
                <h1 onClick = {this.toggleOpen}>{ article.title }</h1>
                {body}
                {commentsLink}
            </div>
        )
    }

    toggleOpen = (ev) => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}


export default Article
