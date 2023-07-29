import React,{useState} from 'react'

const Project7 = () => {
    const initialState =[{
        name:'SABARISH',
        place:'coimbatore',
    },
{name:'PRABAKASH',
PLACE:'COIMBATORE'}]
const updatedstate=()=>{
    setText([{
        name:'MANIKANDAN',
        place:'coimbatore',
    },
{name:'MOOVENTHIRAN',
PLACE:'DINDUKKAL'}
        
    ])
}
    const[text,setText]=useState(initialState)
   
  return (
<>
<div className="container my-3 text-center">
    {text.map((values)=>{
        return(
            <>
          <h1 className="text-center text-danger">{values.name}</h1>
            </>
        )
    })}
    <button className="btn btn-dark my-2" onClick={updatedstate}>click</button>
    
</div>





</>
  )
}

export default Project7