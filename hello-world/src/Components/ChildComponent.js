import React from 'react'

function ChildComponent(props) {
  return (
    <div>
    {/*<button onClick={props.greetHandler}>Greet Parent</button>*/}
    {/*arrow functions is the best way to pass parametes from child to parents */}
    <button onClick={() => props.greetHandler('child')}>Greet Parent</button>
    </div>
  )
}

export default ChildComponent