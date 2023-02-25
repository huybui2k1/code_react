import React from 'react'
import './Article/Articles.css'

function Comment() {
  return (
    <>
      <div className="cmt-header">Leave A Comment</div>
      <div className="cmt-note">
        Your email address will not be published. Required fields are marked *
      </div>
      <form action="" className="cmt-form">
        <textarea
          type="textarea"
          placeholder="Write your comment here..."
          className="wrt-cmt-area"
        ></textarea>
        <input type="text" placeholder="Name" className="cmt-input-name" />
        <div>
          <input type="email" placeholder="Email" className="cmt-input-mail" />
          <input type="url" placeholder="Website" className="cmt-input-web" />
        </div>
        <div className="cmt-checkbox">
          <input type="checkbox" />
          <span>
            {' '}
            Save my name, email, and website in this browser for the next time I
            comment.
          </span>
        </div>
        <button className="cmt-post-bnt">Post Comment</button>
      </form>
    </>
  )
}

export default Comment
