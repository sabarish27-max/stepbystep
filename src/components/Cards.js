import React from 'react'

const Cards = (props) => {
  return (
    <>
    <div className="col-md-4">
    <div class="card text-white bg-secondary mb-3 my-3" >
    <div class="card-header">{props.header}</div>
    <div class="card-body">
      <h5 class="card-title">{props.title}</h5>
      <p class="card-text">{props.text}</p>
    </div>
  </div>
  </div></>
  )
}

export default Cards