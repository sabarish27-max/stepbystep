import React,{useState} from 'react'

const Forms = () => {
    const submit =(e)=>{
        e.preventDefault();
        const newdata ={name:name,mobile:mobile}
        setentry([...entry,newdata])
        setname([''])
        setmobile([''])


    }
    const [name,setname]=useState();
    const [mobile,setmobile]=useState();
    const [entry,setentry]=useState(['']);
  return (
  <>
  <form onSubmit={submit}>
  <div className="container my-5 text-center">
    <div>
    <input type="text"placeholder='Enter the name' className='w-40 py-2 my-3' value={name} onChange={(e)=>{setname(e.target.value)}}/>
    </div>
    <div>
    <input type="text"placeholder='Enter the mobile'className='w-40 py-2'value={mobile} onChange={(e)=>{setmobile(e.target.value)}} />
    </div>
    <button className="btn btn-dark my-4" type='submit'>Submit</button>
  </div>
  </form>
  
  
  
  </>
  )
}

export default Forms