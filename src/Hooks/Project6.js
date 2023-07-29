import React,{useState} from 'react'

const Project6 = () => {
  const [text,settext]=useState('darkmode')
  const [btn,setbtn]=useState('btn-dark')
  const [darkmode,setDarkmode]=useState({
  
    color:'black',
    backgroundColor:'white',
  })
  const changetheme=()=>{
    if(darkmode.color==='black'){
    setDarkmode({
    
      color:'white',
      backgroundColor:'black',
    })
    settext('lightmode')
    setbtn('btn-light')
  }else{
    setDarkmode({
    
      color:'black',
      backgroundColor:'white',
    })
    settext('darkmode')
    setbtn('btn-dark')

  }
  }
  return (
   <>
  
   <div className="container-fluid my-2 text-center ">
   <button className={`btn ${btn} my-3`}onClick={changetheme}>{text}</button>
   <div classname="card"style={darkmode}>
  <div classname="card-header">
    Quote
  </div>
  <div classname="card-body">
    <blockquote classname="blockquote mb-0">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      <footer classname="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
    </blockquote>
  </div>
  <div classname="card-header">
    Quote
  </div>
  <div classname="card-body">
    <blockquote classname="blockquote mb-0">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      <footer classname="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
    </blockquote>
  </div>
  <div classname="card-header">
    Quote
  </div>
  <div classname="card-body">
    <blockquote classname="blockquote mb-0">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      <footer classname="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
    </blockquote>
  </div>
  <div classname="card-header">
    Quote
  </div>
  <div classname="card-body">
    <blockquote classname="blockquote mb-0">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      <footer classname="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
    </blockquote>
  </div>
</div>
   </div>
   
   
   
   
   </>
  )
}

export default Project6