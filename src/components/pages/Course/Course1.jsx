import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
// import Course from '../Course'
import './Course1.css'
import Course3 from './Course3'
//import Course4 from './Course4'
function Course1() {
  return (
    <>
      {/* <Course3 /> */}
      {/* <Course /> */}
      <div className="containers">
        <div className="detail">
          <ul className="products">
            <li>
              <div className="product-item">
                <div className="product-top">
                  <Link to="/MathsCourse" className="product_thumb">
                    <img
                      src="https://adhyayanmantra.com/images/subject/math_subject.jpg"
                      alt=""
                    />
                  </Link>
                  <Link to="/MathsCourse" className="buy-now">
                    View Detail
                  </Link>
                </div>
                <div class="product-info">
                  <Link className="product-cat">loafer</Link>
                  <Link className="product-name">Stock investment</Link>
                  <div className="product-price">600.000đ</div>
                </div>
              </div>
            </li>
            <li>
              <div className="product-item">
                <div className="product-top">
                  <Link className="product_thumb">
                    <img
                      src="https://adhyayanmantra.com/images/subject/up_pgt_commerce.jpg"
                      alt=""
                    />
                  </Link>
                  <Link to="/detail_course" className="buy-now">
                    View Detail
                  </Link>
                </div>
                <div className="product-info">
                  <Link className="product-cat">derby</Link>
                  <Link className="product-name">
                    How to make hand-drawn animation videos
                  </Link>
                  <div className="product-price">350.000đ</div>
                </div>
              </div>
            </li>
            <li>
              <div className="product-item">
                <div className="product-top">
                  <Link className="product_thumb">
                    <img
                      src="https://adhyayanmantra.com/images/subject/up_tgt_math.jpg"
                      alt=""
                    />
                  </Link>
                  <Link className="buy-now">View Detail</Link>
                </div>
                <div className="product-info">
                  <Link className="product-cat">oxford</Link>
                  <Link className="product-name">Financial freedom</Link>
                  <div className="product-price">250.000đ</div>
                </div>
              </div>
            </li>
            {/* <li>
          <div className="product-item">
            <div className="product-top">
              <Link className="product_thumb">
                <img
                  src="https://kodesolution.com/html/2016/studypress-html/demo/images/project/4.jpg"
                  alt=""
                />
              </Link>
              <Link className="buy-now">Buy now</Link>
            </div>
            <div className="product-info">
              <Link className="product-cat">derby</Link>
              <Link className="product-name">
                Technical analysis from fundamental to advanced in stocks
              </Link>
              <div className="product-price">150.000đ</div>
            </div>
          </div>
        </li> */}
          </ul>
        </div>
      </div>
    </>
  )
}
export default Course1
