import React from 'react'


const Newcard = (props) => {
  return (
    
      <div className="col-sm-6">
    <div class="card my-3" >
  <img class="card-img-top" src={props.oldimg} alt="..." />
  <div class="card-body">
    <h5 class="card-title text-center text-success">{props.oldtitle}</h5>
    <p class="card-text">{props.oldtext}</p>
    <div className="d-flex justify-content-center">
    <a href="#" class="btn btn-outline-warning">Go somewhere</a>
    
    </div>
  </div>
</div>
</div>

  )
}

export default Newcard;