import { Button } from '@mui/material'
import React, { useState } from 'react'
import Buttons from './Buttons'
const ShoppingCart = () => {
  const [items, setItems] = useState([])

  const addItem = (item) => {
    setItems([...items, item])
  }

  const removeItem = (item) => {
    setItems(items.filter((i) => i !== item))
  }

  return (
    <>
      <div>
        <h1>Shopping Cart</h1>

        <ul>
          {items.map((item) => (
            <li key={item}>
              {item} <button onClick={() => removeItem(item)}>Remove</button>
            </li>
          ))}
        </ul>

        <input
          type="text"
          placeholder="Add item"
          onKeyPress={(e) => e.key === 'Enter' && addItem(e.target.value)}
        />
      </div>
    </>
  )
}

export default ShoppingCart
