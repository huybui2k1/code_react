/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import './Articles.css'
import Morepost from '../Morepost'
import Comment from '../Comment'

function Article_4() {
  return (
    <>
      <div className="article-header">
        <div className="article-title">10 Tips for managing small business</div>
      </div>
      <div className="article-body">
        <div className="article-container">
          <img src="https://kodesolution.com/wp-content/uploads/2022/10/news4-1024x683.jpg" />
          <h1>What Qualifies as a Business Expense?</h1>
          <p>
            Starting a business is no easy task, and some significant expenses
            can apply. Depending on your business scope, you may be able to
            deduct certain startup costs as business expenses from your taxes.
            Business expenses are costs incurred by your business to generate
            more revenue.{' '}
          </p>
          <p>
            Any expense that helps your business make more money could
            potentially count as a business expense. This can include costs such
            as advertising, payroll, rent, software fees, utility fees, and
            more.{' '}
          </p>
          <p>
            To help your startup save money, you should understand how to
            achieve the maximum tax deductions. Read on to understand what
            business expenses are, which expenses are not deductible, and how to
            use tax deductions in your favor.{' '}
          </p>
          <h1>What Does Not Count as a Business Expense?</h1>
          <div>
            <img
              src="https://kodesolution.com/wp-content/uploads/2022/10/service5-1024x683.jpg"
              width="100%"
            />
            <p>
              As important as knowing what you can write off as a business
              expense is knowing what you cannot. When you can differentiate
              between what does and does not count as a business expense, you
              can file your taxes correctly.
            </p>
          </div>
          <h1>Limits To Deducting Startup Costs</h1>
          <p>
            The IRS defines a startup as a business that intends to have or does
            have a limited life span. In cases where the business will be
            profitable and not more than five years, the IRS doesn't allow for
            full expensing. Expenses must be depreciated.
          </p>
          <h1>Key Takeaways</h1>
          <p>
            <i class="fa-solid fa-leaf"></i> Business expenses are necessary,
            recurring costs incurred while operating a business in order to make
            a profit. <br />
            <i class="fa-solid fa-leaf"></i> Many expenses related to starting a
            new business count as business expenses that can be deducted. <br />
            <i class="fa-solid fa-leaf"></i> Up to $5,000 in startup costs and
            $5,000 in organization costs are deductible as business expenses in
            your first year of operation. <br />
            <i class="fa-solid fa-leaf"></i> Some business-related expenses are
            non-deductible, but you may be able to recoup them through other
            cost-saving methods. <br />
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

export default Article_4
