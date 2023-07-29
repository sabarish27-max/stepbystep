import React,{useState} from 'react'

const Project3 = () => {
    const [textdata,settextdata]=useState('Enter the data')
    const [predata,setpredata]=useState()
    const handledata=(event)=>{
       settextdata( event.target.value)
    }

  return (
   <div className="container my-5">

    <textarea  cols="30" rows="10" className='w-100' onChange={handledata}value={textdata}>{textdata}</textarea>
    <button className='btn btn-dark' onClick={()=>{
        settextdata('')
    }}>Clear</button>
    <p>{predata}</p>
    <button className='btn btn-secondary'onClick={()=>{
        setpredata(textdata)
    }}>preview</button>
    <p className='text-center text-danger'>total charecters and whitespaces are present  {textdata.length}</p>
    <p className='text-center text-success'>total words are present in the paragraph {textdata.split(" ").length}</p>

   </div>
  )
}

export default Project3