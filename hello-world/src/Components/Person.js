import React from 'react'



function Person({person}) {
       
  return (
    <div>
    
    <h2>The position is {person.id}. The name is {person.name} and is {person.age} years old</h2>
    
    </div>
  )
}

export default Person