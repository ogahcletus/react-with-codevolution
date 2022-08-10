import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

class ParentComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         parentName: 'Parent'
      }
        //since we are using 'this' keyword, we need to bind this method
        this.greetParent = this.greetParent.bind(this)

    }
    //define a method:
    greetParent(childName) {
       // alert('Hello' + this.state.ParentName)
       alert(`Hello ${this.state.parentName} from ${childName}`) 
       // `` is a feature in ES6 and since we are using 'this' keyword, we need to bind this method
    }
  render() {
    return (
      <ChildComponent  greetHandler={this.greetParent}/>
    )
  }
}

export default ParentComponent