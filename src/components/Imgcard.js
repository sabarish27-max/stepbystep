import React from 'react'

const Imgcard = (props) => {
  return (
    
        
        <div className="col-md-4">
        <div class="card my-3" >
  <img class="card-img-top" src={props.imgsrc} alt="..." />
  <div class="card-body">
    <h5 class="card-title text-center text-success">{props.imgtitle}</h5>
    <p class="card-text">{props.imgtext}</p>
    <div className="d-flex justify-content-center">
    <button class="btn btn-outline-success">{props.imgbtn}</button>
    </div>
  </div>
</div>

    </div>
   
  )
}

export default Imgcard