import React from 'react'
import { Link } from 'react-router-dom'
import './Card.css'
const Card = ({ item }) => {
  return (
    <>
      <div className="container-fluid">
        <div className="row justify-content-center">
          {item.map((Val) => {
            return (
              <div
                className="col-md-4 col-sm-6 card my-3 py-3 border-0"
                key={Val.id}
              >
                <div className="card-img-top text-center">
                  <div className="card-img-hover">
                    <img src={Val.img} alt={Val.title} className="photo w-75" />
                  </div>
                </div>
                <div className="card-body">
                  <div className="card-title fw-bold fs-4">
                    {/* {Val.title} */}
                    {Val.title} &nbsp;&nbsp;&nbsp;&nbsp;--&nbsp;&nbsp;
                    <div> {Val.price}</div>
                  </div>
                  <div className="card-text ">
                    {Val.desc}
                    {/* <p class="mt-0 mb-4 font-semibold text-primary">
                      {Val.desc}
                    </p> */}

                    <p class="cds-33 css-5or6ht cds-35">
                      <span class="css-1qajodb">
                        <b>Skills you'll gain: </b>
                      </span>
                      {Val.Skill}
                    </p>

                    <div class="flex flex-wrap mb-4 justify-start mb-2">
                      <i class="fa-regular fa-star"></i>
                      <i class="fa-regular fa-star"></i>
                      <i class="fa-regular fa-star"></i>
                      <i class="fa-regular fa-star"></i>
                      <i class="fa-regular fa-star"></i>
                    </div>
                    <div class="flex flex-wrap justify-between items-center">
                      <div class="flex items-center">
                        <i class="fa-solid fa-graduation-cap"> </i>
                        <h6>{Val.Student} Students</h6>
                        <i class="fa-solid fa-clock"></i>
                        <h6>1-2 Months</h6>
                      </div>
                    </div>
                  </div>
                  <div className="card-detail">
                    <Link to="/mathscourse">{Val.View} </Link>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Card
