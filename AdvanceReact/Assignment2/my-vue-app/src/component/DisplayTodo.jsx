import React from 'react'

const DisplayTodo = ({Name,Department,Exp,task, completion}) => {
  return (

    
    <tr>
          <td>{Name}</td>
      <td>{Department}</td>
      <td>{Exp}</td>
      <td>{task}</td>
      <td>{completion?"complete":"Pending"}</td>
    </tr>
      
     
    
  )
}

export default DisplayTodo



