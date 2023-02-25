import React from 'react'
import { Link } from 'react-router-dom'

const Button = () => {
  return (
    <button className="bg-primary text-white px-6 py-2 rounded-full">
      <Link to="/contact">Contact Us</Link>
    </button>
  )
}

export default Button
