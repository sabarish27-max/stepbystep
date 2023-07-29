import React,{useState} from 'react'
let bgcolor="yellowgreen"
let text ='FIRST PAGE'
let txtcolor="Blue"
let btn="click"



const Project1 = () => {
    const [texed,setTexed]=useState(text)
    const [bgcolored,setbgcolored]=useState(bgcolor)
    const [txtcolored,settxtcolored]=useState(txtcolor)
    const [btntext,setbtntxt]=useState(btn)

    const change=()=>{
        setTexed('LASTPAGE')
        setbgcolored('orangered')
        settxtcolored('white')
        setbtntxt('clicked')
    }
    const unchange=()=>{
        setTexed(text)
        setbgcolored(bgcolor)
        settxtcolored(txtcolor)
        setbtntxt(btn)
    }
  return (
   <>
   <div className="container" >
    <div className="card my-5" style={{backgroundColor:bgcolored}}>
        <h1 className='text-center'style={{color:txtcolored}}>{texed}</h1>
        <button className='btn btn-outline-light' onClick={change} onDoubleClick={unchange}>{btntext}</button>
    </div>
   </div>
   </>
  )
}

export default Project1