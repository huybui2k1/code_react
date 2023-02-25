import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import './Course.css'
import Course1 from './Course/Course1'
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'

function Course() {
  return (
    <>
      <div className="sidebar">
        <div className="khoahoc">
          <ul>
            <li>
              <Link to="/course4">Mathematics (Maths)</Link>
            </li>
            <li>
              <Link to="/course3">Physics</Link>
            </li>
            <li>
              <Link to="/mathscourse">Chemistry</Link>
            </li>
            <li>
              <Link to="/course4">Biology</Link>
            </li>
            <li>
              <Link to="/course3">Information Technology.</Link>
            </li>
            <li>
              <Link to="/course2">Geography</Link>
            </li>
            <li>
              <Link to="/RegistersPage">RegisterPage.</Link>
            </li>
            <li>
              <Link to="/ShoppingCart">Literature</Link>
            </li>
          </ul>
        </div>
        <Outlet />
      </div>

      <Course1 />
      {/* <div className="Pagination">
        <Stack spacing={2}>
          <Pagination count={10} />
          <Pagination count={10} color="primary" />
          <Pagination count={10} color="secondary" />
          <Pagination count={10} disabled />
        </Stack>
      </div> */}
    </>
  )
}
export default Course
