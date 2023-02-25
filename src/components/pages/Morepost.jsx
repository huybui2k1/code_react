import React from 'react'
import './Article/Articles.css'
import { Link } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'

import Article_2 from './Article/Article2'
import Article_4 from './Article/Article4'
import Article_3 from './Article/Article3'
import Article_6 from './Article/Article6'
import Article_5 from './Article/Article5'

function Morepost() {
  return (
    <>
      <div className="list-sidebar-container">
        <div className="list-sidebar-body">
          <div className="list-sidebar-header">More Posts</div>
          <hr />
          <Link to="/article-6">
            <div className="list-sidebar-card">
              <img
                src="https://kodesolution.com/wp-content/uploads/2022/10/news6-672x448.jpg"
                alt=""
                className="list-sidebar-card-img"
              />
              <div className="list-sidebar-card-body">
                <div className="list-sidebar-title">
                  Business strategy for marketing system
                </div>
                <div className="list-sidebar-count">
                  <i class="fa-solid fa-eye"></i> 14,564
                </div>
              </div>
            </div>
          </Link>
          <Link to="/article-5">
            <div className="list-sidebar-card">
              <img
                src="https://kodesolution.com/wp-content/uploads/2022/10/news5-672x448.jpg"
                alt=""
                className="list-sidebar-card-img"
              />
              <div className="list-sidebar-card-body">
                <div className="list-sidebar-title">
                  You should know about business plan
                </div>
                <div className="list-sidebar-count">
                  <i class="fa-solid fa-eye"></i> 10,564
                </div>
              </div>
            </div>
          </Link>
          <Link to="/article-4">
            <div className="list-sidebar-card">
              <img
                src="https://kodesolution.com/wp-content/uploads/2022/10/news4-672x448.jpg"
                alt=""
                className="list-sidebar-card-img"
              />
              <div className="list-sidebar-card-body">
                <div className="list-sidebar-title">
                  10 Tips for managing small business
                </div>
                <div className="list-sidebar-count">
                  <i class="fa-solid fa-eye"></i> 5,468
                </div>
              </div>
            </div>
          </Link>
          <Link to="/article-3">
            <div className="list-sidebar-card">
              <img
                src="https://kodesolution.com/wp-content/uploads/2022/10/news3-672x448.jpg"
                alt=""
                className="list-sidebar-card-img"
              />
              <div className="list-sidebar-card-body">
                <div className="list-sidebar-title">
                  10 Ways to achieve your business goal
                </div>
                <div className="list-sidebar-count">
                  <i class="fa-solid fa-eye"></i> 8,125
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
      <Routes>
        <Route path="article-3" element={<Article_3 />} />
        <Route path="article-4" element={<Article_4 />} />
        <Route path="article-5" element={<Article_5 />} />
        <Route path="article-6" element={<Article_6 />} />
      </Routes>
    </>
  )
}

export default Morepost
