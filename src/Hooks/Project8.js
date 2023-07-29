import React,{useState} from 'react'

const Project8 = () => {
    const [text,setText]=useState({
        name:'SABARISH',
        language:'TAMIL',
        state:'TAMILNADU'
    });
    const updatechanges=()=>{
        setText({
            ...text,name:'manikandan',
        })
    }
  return (
   <>
   <div className="container text-center my-5">
    <h1 className="text-primary">
{text.name}
    </h1>
    <h1 className="text-primary">
{text.language}
    </h1>
    <h1 className="text-primary">
{text.state}
    </h1>
    <button className="btn btn-outline-primary text-center" onClick={updatechanges}>Click here</button>
   </div>
   
   
   
   
   </>
  )
}

export default Project8