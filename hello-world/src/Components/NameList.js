import React from 'react'
import Person from './Person'



function NameList() {
    //const names = ['Cecilia', 'Cletus', 'Damian', 'Victoria', 'Emmanuel', 'Johnpope', 'Gabriel', 'Isaac', 'James']
    // applicable to map method, define nameList:

     //const nameList = names.map(name => <h2>{name}</h2>)
     const persons = [

        {
            id: 1,
            name: 'Cecilia',
            age:  50
    
        },
    
        {   id: 2,
            name: 'Cletus',
            age: 47
    
        },
    
        {   id: 3,
            name: 'Damian',
            age: 45
    
        },
    
        {   id: 4,
            name: 'Victoria (late)',
            age: 24, 
    
        },
    
        {   id: 5,
            name: 'Emmanuel (late)',
            age: 42, 
    
        },
    
        {   id: 6,
            name: 'Johnpope',
            age: 40
    
        },
    
        {   id: 7,
            name: 'Gabriel',
            age: 38
    
        },
    
        {   id: 8,
            name: 'Isaac',
            age: 47
    
        },
    
        {   id: 9,
            name: 'James',
            age: 14
    
        },
    
        
    ]
     
 

     const personList = persons.map(person => <Person  person={person}/>)

  return (
    <div>
        {/*<h2>{names[0]}</h2>
        <h2>{names[1]}</h2>
        <h2>{names[2]}</h2>
        <h2>{names[3]}</h2>
        <h2>{names[4]}</h2>
        <h2>{names[5]}</h2>
        <h2>{names[6]}</h2>
        <h2>{names[7]}</h2>
        <h2>{names[8]}</h2>

        */}

        {/* the Map method is a better approach */}

        {/*nameList */}

        {personList}


    </div>
  )
}

export default NameList