/* eslint-disable react/jsx-pascal-case */
import React from 'react'
import Navbar from './components/Navbar/Navbar'
// import './App.css'
import Button from './components/Navbar/Button'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/pages/Home'
import Course from './components/pages/Course'
import Course1 from './components/pages/Course/Course1'
import Course2 from './components/pages/Course/Course2'
import Course3 from './components/pages/Course/Course3'
import Course4 from './components/pages/Course/Course4'
// import Products from './components/Pages/Products'

// import SignUp from './components/Pages/SignUp'
import SearchPage from './components/Search/Searchs'
import Contact from './components/pages/Contact'
import { QueryClientProvider } from 'react-query'
import { queryClient } from './components/Search/core/api'
import Blog from './components/pages/Blog'
import Article_1 from './components/pages/Article/Article1'
import Article_2 from './components/pages/Article/Article2'
import Article_3 from './components/pages/Article/Article3'
import Article_4 from './components/pages/Article/Article4'
import Article_5 from './components/pages/Article/Article5'
import Article_6 from './components/pages/Article/Article6'
import Ourstory from './components/pages/Ourstory'
//import RegistersPage from './components/RegisterAccount/RegisterAccount'
import RegistersPage from './components/RegisterAccount/RegisterAccount'
import MathsCourse from './components/pages/Course/MathsCourse'
import ShoppingCart from './components/pages/Course/ShoppingCart'

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />

            {/* <Route path="/products" element={<Products />} />
          <Route path="/sign-up" element={<SignUp />} /> */}
            <Route path="/search" element={<SearchPage />} />
            <Route path="/contact" element={<Contact />} />

            <Route path="/blog" element={<Blog />} />
            <Route path="/article_1" element={<Article_1 />} />
            <Route path="/article_2" element={<Article_2 />} />
            <Route path="/article_3" element={<Article_3 />} />
            <Route path="/article_4" element={<Article_4 />} />
            <Route path="/article_5" element={<Article_5 />} />
            <Route path="/article_6" element={<Article_6 />} />
            <Route path="/ourstory" element={<Ourstory />} />

            <Route path="/course" element={<Course />} />
            <Route path="/course1" element={<Course1 />} />
            <Route path="/course2" element={<Course2 />} />
            <Route path="/course3" element={<Course3 />} />
            <Route path="/course4" element={<Course4 />} />

            <Route path="/mathscourse" element={<MathsCourse />} />
            <Route path="/ShoppingCart" element={<ShoppingCart />} />
            <Route path="/RegistersPage" element={<RegistersPage />} />
            {/* <Route path="Course" element={<Course />}>
              <Route path="course1" element={<Course1 />} />
              <Route path="course2" element={<Course2 />} />
              <Route path="course3" element={<Course3 />} />
              <Route path="course4" element={<Course4 />} />
            </Route> */}
            {/* <Route path="services" element={<Services />}> */}
            {/* <Route path="page1" element={<Page1 />} />
              <Route path="course" element={<Page2 />} />
              <Route path="page2" element={<Page2 />} />
              <Route path="page3" element={<Page3 />} />
              <Route path="page4" element={<Page4 />} />
              <Route path="page5" element={<Page5 />} />
              <Route path="page7" element={<Page7 />} />
              <Route path="page8" element={<Page8 />} /> */}
            {/* </Route> */}
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
      {/* <div className="abc">
        <img src="./components/Pages/Hero.png" alt="" />
      </div> */}
    </>
  )
}

export default App
