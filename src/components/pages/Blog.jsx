import React from 'react'
import './Blog.css'
import Article_1 from './Article/Article1'
import { Link } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'

function Blog() {
  return (
    <>
      <div className="main-content">
        <section className="page-title-wrapper">
          <h1 className="page-title">Blog</h1>
        </section>
        <div className="content-list">
          <div className="content-item">
            <Link to="/article_1">
              <div className="content-img">
                <img
                  src="https://kodesolution.com/wp-content/uploads/2022/10/news1-672x448.jpg"
                  alt=""
                />
              </div>
              <div className="content-body">
                <div className="content-info">
                  <div className="post-view">
                    <i class="fa-regular fa-eye"></i> 14,536
                  </div>
                  <div className="post-time">
                    <i class="fa-regular fa-calendar"></i> 29/01/2022
                  </div>
                </div>
                <div className="content-dcs">
                  Top crypto exchange influencers in china
                </div>
              </div>
              <button className="content-ctn">Read More</button>
            </Link>
          </div>
          <div className="content-item">
            <Link to="/article_2">
              <div className="content-img">
                <img
                  src="https://kodesolution.com/wp-content/uploads/2022/10/news2-672x448.jpg"
                  alt=""
                />
              </div>
              <div className="content-body">
                <div className="content-info">
                  <div className="post-view">
                    <i class="fa-regular fa-eye"></i> 8,456
                  </div>
                  <div className="post-time">
                    <i class="fa-regular fa-calendar"></i> 22/02/2022
                  </div>
                </div>
                <div className="content-dcs">
                  Necessity may give us best virtual court
                </div>
              </div>
              <button className="content-ctn">Read More</button>
            </Link>
          </div>
          <div className="content-item">
            <Link to="/article_3">
              <div className="content-img">
                <img
                  src="https://kodesolution.com/wp-content/uploads/2022/10/news3-672x448.jpg"
                  alt=""
                />
              </div>
              <div className="content-body">
                <div className="content-info">
                  <div className="post-view">
                    <i class="fa-regular fa-eye"></i> 4,152
                  </div>
                  <div className="post-time">
                    <i class="fa-regular fa-calendar"></i> 22/04/2021
                  </div>
                </div>
                <div className="content-dcs">
                  10 Ways to achieve your business goal
                </div>
              </div>
              <button className="content-ctn">Read More</button>
            </Link>
          </div>
          <div className="content-item">
            <Link to="/article_4">
              <div className="content-img">
                <img
                  src="https://kodesolution.com/wp-content/uploads/2022/10/news4-672x448.jpg"
                  alt=""
                />
              </div>
              <div className="content-body">
                <div className="content-info">
                  <div className="post-view">
                    <i class="fa-regular fa-eye"></i> 9,152
                  </div>
                  <div className="post-time">
                    <i class="fa-regular fa-calendar"></i> 21/06/2021
                  </div>
                </div>
                <div className="content-dcs">
                  10 Tips for managing small business
                </div>
              </div>
              <button className="content-ctn">Read More</button>
            </Link>
          </div>
          <div className="content-item">
            <Link to="/article_5">
              <div className="content-img">
                <img
                  src="https://kodesolution.com/wp-content/uploads/2022/10/news5-672x448.jpg"
                  alt=""
                />
              </div>
              <div className="content-body">
                <div className="content-info">
                  <div className="post-view">
                    <i class="fa-regular fa-eye"></i> 11,239
                  </div>
                  <div className="post-time">
                    <i class="fa-regular fa-calendar"></i> 29/01/2021
                  </div>
                </div>
                <div className="content-dcs">
                  You should know about business plan
                </div>
              </div>
              <button className="content-ctn">Read More</button>
            </Link>
          </div>
          <div className="content-item">
            <Link to="/article_6">
              <div className="content-img">
                <img
                  src="https://kodesolution.com/wp-content/uploads/2022/10/news6-672x448.jpg"
                  alt=""
                />
              </div>
              <div className="content-body">
                <div className="content-info">
                  <div className="post-view">
                    <i class="fa-regular fa-eye"></i> 4,968
                  </div>
                  <div className="post-time">
                    <i class="fa-regular fa-calendar"></i> 17/01/2021
                  </div>
                </div>
                <div className="content-dcs">
                  Business strategy for marketing system
                </div>
              </div>
              <button className="content-ctn">Read More</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Blog
