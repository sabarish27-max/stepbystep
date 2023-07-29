import React from 'react';
import proptypes from 'prop-types'


const Hotel =({imgsrc,title,text})=>{
    return(
        <>
        <div className="card mb-3 my-3">
  <img className="card-img-top" src={imgsrc} alt="Beach"/>
  <div className="card-body">
    <div className="d-flex justify-content-center">
    <h5 className="card-title my-4">{title}</h5>
    </div>
    <p className="card-text">{text}</p>
    <div className="d-flex justify-content-center">
    <button className="btn btn-outline-success" >Readmore</button >
   </div>
  </div>
</div>

        </>
    )
}
Hotel.deafaultProps={
    text:"Hello World"
}
export default Hotel;