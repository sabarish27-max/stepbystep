import React,{useState} from 'react'

const Project5 = () => {
    let currentTime=new Date().toLocaleTimeString();
    const [Time,setTime]=useState(currentTime)
    const changeTime=()=>{
        let newtime=new Date().toLocaleTimeString();
        setTime(newtime)
    }
    setInterval(changeTime, 1000)
  return (
<>
<div className="container my-5">
<h1 className='text-center text-primary'>{Time}</h1>


</div>





</>
  )
}

export default Project5