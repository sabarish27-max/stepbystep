import React,{useState} from 'react'

const Project2 = () => {
  const [textdata,settextdata]=useState('Enter somethig to clear')
  const [predata,setpredata]=useState('')
  const handledata=(event)=>{
   settextdata(event.target.value)
  }
  return (
<>
<div className="container my-6">
  <textarea  cols="30" rows="10"className='w-100' onChange={handledata} value={textdata}>{textdata}</textarea>
  <button className='btn btn-outline-dark'onClick={()=>{
    settextdata('')
  }}>ClearData</button>
  <p>{predata}</p>
  <button className='btn btn-outline-primary' onClick={()=>{
    setpredata(textdata)
  }}>preview</button>
  <p className='text-center text-danger'>  total letters are present in the textarea {textdata.length} </p>
<p className='text-center text-success'> total words are present in the textarea {textdata.split(" ").length}</p>


  

</div>





</>
  )
}

export default Project2