import React from 'react'

function Inline() {

    const heading = {
        fontSize: '50px', // NB that the value is specified as a string
        color: 'blue'
    }
  return (
    <div>
    <h1 className='error'>Error</h1>
    <h1 style={heading}>Inline</h1>
    
    </div>
  )
}

export default Inline