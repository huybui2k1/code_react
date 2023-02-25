import React from 'react'
import Data1 from './Data1'
const Buttons_ = ({ filterItem, setItem, menuItems }) => {
  return (
    <>
      <div className="d-flex justify-content-center">
        {menuItems.map((id) => {
          return (
            <button
              className="btn-dark text-white p-1 px-2 mx-5 btn fw-bold"
              onClick={() => filterItem(id)}
              key={id}
            >
              {id}
            </button>
          )
        })}
        <button
          className="btn-dark text-white p-1 px-3 mx-5 fw-bold btn"
          onClick={() => setItem(Data1)}
        >
          All
        </button>

        {/* <button
          className="btn-warning text-white p-1 mx-5"
          onClick={() => filterItem('Breakfast')}
        >
          Breakfast
        </button>
        <button
          className="btn-warning text-white p-1 px-2 mx-5"
          onClick={() => filterItem('Lunch')}
        >
          Lunch
        </button>
        <button
          className="btn-warning text-white p-1 mx-5"
          onClick={() => filterItem('Dinner')}
        >
          Dinner
        </button> */}
      </div>
    </>
  )
}

export default Buttons_
