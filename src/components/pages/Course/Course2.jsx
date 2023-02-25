import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import './Course2.css'
import Course3 from './Course3'
function Course2() {
  return (
    <>
      <div className="container">
        <div className="bgheader">
          <img src="anhheader" alt="" />
        </div>
      </div>
      <Course3 />
    </>
  )
}
export default Course2
