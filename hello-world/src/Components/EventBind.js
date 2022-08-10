import React, { Component } from 'react'

//NB Event Binding is necessary in react class components only because of the use of 'this' keyword

class EventBind extends Component {
    //use snippet rconst for constructor
    constructor(props) {
      super(props)
    
      this.state = {
         message: 'Hello'
      }

      //this.clickHandler = this.clickHandler.bind(this)
    }

    /*clickHandler() {
        this.setState({
            message: 'Goodbye!'
        })

    
    console.log(this)
    }
*/
     clickHandler = () => {
        this.setState ({
            message: 'Goodbye!'
        })
        
    }
    
  render() {
    return (
      <div>
      <div>{this.state.message}</div>
      {/*<button onClick={this.clickHandler.bind(this)}>ClickBind</button>*/}
    
      {/*<button onClick={() => this.clickHandler()}>ClickBind</button> */}

      <button onClick={this.clickHandler}>ClickBind</button>
      
      
      
      </div>
    )
  }
}

export default EventBind