import React from 'react'
import { useState } from 'react'
import DisplayTodo from './DisplayTodo'

const Todo = () => {
const [todo, setTodo] = useState([])
const [task, setTask] = useState({
    Name:"",
    Department:"",
    Exp:"",
    task:"",
    completion:false
})
function HandleSubmit(e){
e.preventDefault()
setTodo([...todo,task])


}


function HandleChange(e){
    const { name, type, value, checked } = e.target;
setTask({...task, [name]:type==="checkbox"?checked:value})

}

  return (
    <div>
      <form action="" onSubmit={HandleSubmit}>
       <label htmlFor="">
       Enter Name: <input type="text" name='Name' value={task.Name} onChange={HandleChange}/>
       </label><br />
        
       <label htmlFor="">
       Enter Department: <input type="text"  name='Department' value={task.Department} onChange={HandleChange}/>
       </label><br />

       <label htmlFor="">
       Enter Experience: <input type="number"  name='Exp' value={task.Exp} onChange={HandleChange}/>
       </label><br />

       <label htmlFor="">
       Enter Task: <input type="text"  name='task' value={task.task} onChange={HandleChange}/>
       </label><br />

       <label htmlFor="">
       Enter Completion : <input type="checkbox"  name='completion' checked={task.completion} onChange={HandleChange}/>
       </label><br />
       <button type='submit'>Submit</button>

      </form>
    

      <table border={1}>
       <thead>
       <tr>
       <th>Name</th>
        <th>DepartMent</th>
        <th>Experience</th>
        <th>Task</th>
        <th>completion</th>
       </tr>
       </thead>
       
        <tbody>
        {todo.map((item, index)=>
    <DisplayTodo  key={index} {...item}/>)}
        </tbody>
      </table>
    </div>
  )
}

export default Todo
