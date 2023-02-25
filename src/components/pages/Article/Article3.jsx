/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import './Articles.css'
import Morepost from '../Morepost'
import Comment from '../Comment'

function Article_3() {
  return (
    <>
      <div className="article-header">
        <div className="article-title">
          10 Ways to achieve your business goal
        </div>
      </div>
      <div className="article-body">
        <div className="article-container">
          <img src="https://kodesolution.com/wp-content/uploads/2022/10/news3-1024x683.jpg" />
          <h1>How Business Tax Deductions Work</h1>
          <p>
            Most self-employed business owners report and pay their income taxes
            on their personal tax returns. They calculate their income and
            deductions on a separate form, usually Schedule C, then they add
            their total net income from their business to their other sources of
            income on their Form 1040 or Form 1040-SR.
          </p>
          <h1>Self-Employment Tax</h1>
          <div className="img-line">
            <img src="https://www.thebalancemoney.com/thmb/sTbNbEmNISXSoOGrFmHnAeWzBP0=/272x182/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/TacDeductionsforSelf-Employed-dae79f57ffe14d72a8b9b0662efe0a6b.jpeg" />
            <img src="https://www.thebalancemoney.com/thmb/olXDUZQrqkBo0FnfI5atrHgYXDg=/272x182/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-699337164-43d4088e7c9a45ebb651fdfd3aaf5b8f.jpg" />
          </div>
          <h1>Latest Articles Updated Daily</h1>
          <p>
            Self-employment taxes are those paid by self-employed individuals
            for Social Security and Medicare taxes. The rate includes the
            combined employer and employee tax: 15.3% each year, up to a maximum
            amount or "wage base" for the Social Security portion. The first
            $147,000 of your 2021 combined wages, tips, and net earnings is
            subject to any combination of the Social Security part of
            self-employment tax, Social Security tax, or railroad retirement
            (tier 1) tax.2 The amount increases to $160,200 in 2023.3 This tax
            also includes an additional Medicare tax for self-employed
            individuals who earn more than $200,000 in a year. The
            self-employment tax is based on the net income from your business,
            and it's calculated on Schedule SE as part of your total tax
            calculation for the year. You can deduct half of the tax each year,
            equal to the amount your employer would normally pay if you worked
            for someone else in calculating your total federal income tax for
            the year.{' '}
          </p>
          <h1>Qualified Business Income Deduction</h1>
          <p>
            {' '}
            Self-employed individuals may be eligible for a qualified business
            income deduction each year. The deduction is up to 20% of qualified
            business income in addition to regular business income tax
            deductions you can claim for the year. It's a deduction for the
            owner, not the business, and corporations aren't eligible.{' '}
          </p>
          <p>
            {' '}
            Income from outside the U.S., business investment and owner dividend
            income, capital gains, and non-business interest income aren't
            included for this deduction.{' '}
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

export default Article_3
