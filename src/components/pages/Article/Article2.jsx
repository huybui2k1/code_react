/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import './Articles.css'
import Morepost from '../Morepost'
import Comment from '../Comment'

function Article_2() {
  return (
    <>
      <div className="article-header">
        <div className="article-title">
          Necessity may give us best virtual court
        </div>
      </div>
      <div className="article-body">
        <div className="article-container">
          <img src="https://kodesolution.com/wp-content/uploads/2022/10/news2-1024x683.jpg" />
          <h1>We are Leader In Organic Market</h1>
          <p>
            The passage experienced a surge in during the 1960s when Letraset
            used it on their dry-transfer sheets, and again during the 90s as
            desktop publishers bundled the text with their software. Today it's
            seen all around the web; on templates, websites, and stock designs
          </p>
          <h1>Our Personal Approach</h1>
          <div className="img-line">
            <img src="https://kodesolution.com/wp-content/uploads/2022/10/bg12-1024x683.jpg" />
            <img src="https://kodesolution.com/wp-content/uploads/2022/10/bg16-1024x683.jpg" />
            <img src="https://kodesolution.com/wp-content/uploads/2022/10/service5-1024x683.jpg" />
          </div>
          <h1>Latest Articles Updated Daily</h1>
          <p>
            Pellentesque dignissim malesuada varius et semper semper rutrum ad
            risus felis eros. Cursus libero viverra tempus netus diam vestibulum
            lorem tincidunt congue porta. Non ligula egestas commodo massa.
            Lorem non gravida risus felis rutrum Non ligula semper
          </p>
          <h1>Making Perfect Placeholder</h1>
          <p>
            <i class="fa-solid fa-leaf"></i> Everything in your industry that
            happens text with their software passage. <br />
            <i class="fa-solid fa-leaf"></i> Distribution patterns may not be as
            critical the text with their software. <br />
            <i class="fa-solid fa-leaf"></i> Analysis is part of good management
            history of lorem ipsum the text with their.
          </p>
          <div className="time-n-cmt-info">
            <div className="time-info">
              <i class="fa-regular fa-calendar"></i> 29/01/2022
            </div>
            <div className="cmt-info">
              <i class="fa-regular fa-comments"></i> 1 comment
            </div>
          </div>
          <hr />
          <div className="cmt_container">
            <Comment />
          </div>
        </div>

        <div className="list-sidebar">
          <Morepost />
        </div>
      </div>
    </>
  )
}

export default Article_2
