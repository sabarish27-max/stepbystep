import React,{useState} from 'react'

const Project4 = () => {
    const [Increament,setIncreamnet]=useState(0);


    const decree=()=>{
        if(Increament>0){
      setIncreamnet(Increament-1)
        } else{
            setIncreamnet(0)
        }
    }
  return (
   <>
   <div className="container">
    <h1 className='text-center text-danger w-100'>{Increament}</h1>
    <div className="d-flex justify-content-center">
    <button className='btn btn-primary mx-4'onClick={()=>{
        setIncreamnet(Increament+1)
    }}>Increament</button>
    <button className='btn btn-secondary mx-4'onClick={decree}>Decrement</button>
    </div>

   </div>
   
   
   
   
   </>
  )
}

export default Project4