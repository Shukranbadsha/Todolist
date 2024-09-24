import { useState } from 'react'

function App() {
  const[notes,setnotes]=useState([])
const[data,setdata]=useState({
title:"",
task:"" ,

})

function handler(events){
  const{name,value}=events.target
  setdata(()=> {
 return{ ...data,[name]:value}
  })
}

const deletehandler =(index)=>{
  let copytask=[...notes]
  copytask.splice(index,1)
  setnotes(copytask)
   }
   
 function onAdd(events){
events.preventDefault();
setnotes((prevValue)=>{
   return [...prevValue,data]
  
})
setdata({title:"",
task:"" ,
}
)

}
 return (
  
<>
<div className='container'>
<h3 className='heading'>
  To Do List
</h3>
<form className='form'>
  <input 
  onChange={handler} 
  value={data.title} 
  name="title" 
  className='input' 
   placeholder='write your Task'></input><br/>

  <input 
  className='discription'
  onChange={handler}
   value={data.task} 
   name='task'
   placeholder='Discription' /><br/>

<ul>
            {notes.map((note,index) => (
              <li key={index} className='notes'> 
                <h2>{note.title}</h2>
                <h3>{note.task}</h3>
                <button onClick={()=>{deletehandler(index)}} className='delete'>Delete</button>
              </li>
             
            ))}
          </ul>

  <button   type="button" onClick={onAdd} className='button'>
   Add
  </button>
</form>
</div>
</>

  )
}

export default App
