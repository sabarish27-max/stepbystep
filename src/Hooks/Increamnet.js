import React,{useState} from 'react'

const Increamnet = () => {
  const [incre,setIncre]=useState(0)
  const chagenumber=()=>{
   
    setIncre(incre+1)

  
}
  const subractnumber =()=>{
    if(incre >0){
    setIncre(incre-1)
  }else{
    setIncre(0)
    alert("you have reached zero")
  }
  
}
  return (
    <>
    <div className="container-fluid my-5 text-center">
      <h1 className='text-center text-primary'>{incre}</h1>
      <button className="btn btn-outline-warning mx-3"onClick={chagenumber}>Increament</button>
      <button className="btn btn-outline-danger mx-3" onClick={subractnumber}>Decreament</button>


    </div>
    
    </>
  )
}

export default Increamnet