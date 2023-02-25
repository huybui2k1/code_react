/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import './Articles.css'
import Morepost from '../Morepost'
import Comment from '../Comment'

function Article_6() {
  return (
    <>
      <div className="article-header">
        <div className="article-title">
          Business strategy for marketing system
        </div>
      </div>
      <div className="article-body">
        <div className="article-container">
          <img src="https://kodesolution.com/wp-content/uploads/2022/10/news6-1024x683.jpg" />
          <h1>Definition and Examples of a Profit and Loss Statement</h1>
          <p>
            A PnL statement, also known as an “income statement,” is a financial
            statement that details income and expenses over a specific period.
            This report helps you understand what's behind a company's
            profitability by categorizing revenues and expenses. For example,
            you can see if a business spends more than it earns on production,
            and you can view operating profits separately from financing costs
            and taxes.
          </p>
          <h1>How a Profit and Loss Statement Works</h1>
          <div className="img-line">
            <img src="https://kodesolution.com/wp-content/uploads/2022/10/bg12-1024x683.jpg" />
            <img src="https://kodesolution.com/wp-content/uploads/2022/10/bg16-1024x683.jpg" />
            <img src="https://kodesolution.com/wp-content/uploads/2022/10/service5-1024x683.jpg" />
          </div>
          <h1>Analyzing Profit and Loss Statements Over Time</h1>
          <p>
            A PnL statement provides valuable information about income and
            expenses. But for a complete view of an organization's financial
            health, it’s wise to review other financial statements, as well.
          </p>
          <h1>Cash Flow Statement</h1>
          <p>
            <i class="fa-solid fa-leaf"></i>A PnL statement explains the income
            and expenses that lead to a company's profits. <br />
            <i class="fa-solid fa-leaf"></i>The document proceeds from top-line
            revenue to the bottom line.
            <br />
            <i class="fa-solid fa-leaf"></i>It's ideal to review changes in PnL
            statements over multiple periods.
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

export default Article_6
