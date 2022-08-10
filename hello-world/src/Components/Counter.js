import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {

        super(props) 

        this.state = {
            count: 0
            
        }
        
    }

    increment() {
        /*
        this.state.count = this.state.count+1 // Warning, do not mutate state directly, as it will not ende to DOM. Use setState
        console.log(this.state.count);
        */
      /*
       this.setState({
        count: this.state.count +1 //1st parameter which sets the state  value
        
       }, () => {
        console.log('Callback Value',this.state.count) // 2nd parameter which gives the updated value
       })

       console.log(this.state.count);
       */

       //Hence, Whenever you waant to update the state based on previous state, you need to paass in a function as an argument to the setState method instead of passing in an object as an argument.


       //this.setState((prevState, props) => ({

      //count: prevState.count + props.addValue // if prev. value is dependent on props

      this.setState((prevState) => ({

        //count: prevState.count + 1
    
    }))
    console.log(this.state.count)

    }

    incrementFive() {
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }
  render() {
    return (
        <div>
      <div>Count - {this.state.count}</div>
      <button onClick={() => this.increment()}>Increment</button>
      <button onClick={() => this.incrementFive()}>Increment</button>
      </div>
    )
  }
}

export default Counter