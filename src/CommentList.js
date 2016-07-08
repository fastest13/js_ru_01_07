import React, { Component } from 'react'
import Comment from './Comment'


class CommentList extends Component {
  state = {
    isOpen: false
  }

  /*
   constructor(props) {
   super(props)
   this.state = {
   isCommentsOpen: false
   }
   }
   */

  render() {
    const { isOpen } = this.state;
    const comments = (typeof (this.props.comments) !== 'undefined') ? this.props.comments : [];
    const commentsLength =  (comments.length) ? comments.length : 0;
    const listItems = isOpen ? comments.map((comment) => <li key = {comment.id}><Comment comment = {comment}/></li>) : null;

    return (
      <div>
        <a href="#" onClick = {this.toggleOpen}>Коментарии ({ commentsLength })</a>
        <ul>
          { listItems }
        </ul>
      </div>
    )
  }

  toggleOpen = (ev) => {
    ev.preventDefault();
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
}


export default CommentList
