import React,{useState} from 'react'


const Hooks = () => {
    const [myname,setmyname]=useState('SABARISH')
  return (
   <>
  <h1>{myname}</h1>
  <button className='btn btn-danger' onClick={()=>{
    setmyname('MANIKANDAN')
  }}>Click Here </button>
  
   
   </>
  )
}

export default Hooks