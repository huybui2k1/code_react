/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import './Articles.css'
import Morepost from '../Morepost'
import Comment from '../Comment'

function Article_5() {
  return (
    <>
      <div className="article-header">
        <div className="article-title">You should know about business plan</div>
      </div>
      <div className="article-body">
        <div className="article-container">
          <img src="https://kodesolution.com/wp-content/uploads/2022/10/news5-1024x683.jpg" />

          <p>
            As soon as you decide to start spending or accepting money as a
            business, you should open a business bank account, which is an
            essential step in managing your finances. Common types of business
            accounts include a checking account, a savings account, and a
            merchant account, the latter of which allows you to accept debit and
            credit card payments from customers.
          </p>
          <h1>Types of Business Bank Accounts</h1>
          <p>
            <i class="fa-solid fa-leaf"></i> Types of business bank accounts
            include checking, savings, and merchant accounts. <br />
            <i class="fa-solid fa-leaf"></i> A business bank account can protect
            you from liability, improve your cash flow, allow debit and credit
            transactions from customers, provide tax benefits, and give you
            purchasing power.
            <br />
            <i class="fa-solid fa-leaf"></i> Many banks allow you to open a
            business account online in a matter of minutes.
          </p>
          <h1>Latest Articles Updated Daily</h1>
          <p>
            Pellentesque dignissim malesuada varius et semper semper rutrum ad
            risus felis eros. Cursus libero viverra tempus netus diam vestibulum
            lorem tincidunt congue porta. Non ligula egestas commodo massa.
            Lorem non gravida risus felis rutrum Non ligula semper
          </p>
          <h1>Business Savings Accounts</h1>
          <p>
            Business savings accounts are ideal if you want to save for major
            purchases like equipment, create an emergency fund for unexpected
            events, or earn interest. Many banks typically offer competitive
            interest rates on high-yield savings accounts with little to no
            monthly fee depending on your account balance. Minimum requirements
            for opening deposit amounts may vary.{' '}
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

export default Article_5
