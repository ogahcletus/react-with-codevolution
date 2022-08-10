import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        isLoggedIn: false
      }
    }
  render() {
/*
    if(this.state.isLoggedIn) {
        return (<div>Welcome Ogah!</div>)
    }
    else {
        return (<div>Welcome Guest!</div>)
    }
  */ 

    //lets use a better approach using element variables
/*
    let message 
    if(this.state.isLoggedIn) {
        message = <div>Welcome Ogah</div>
    }
    else {
        message = <div>Welcome Guest</div>
    }

    return <div>{message}</div>

*/
/*
//Lets use the third approach, the tenary operators which allows you to use this conditional in the JSX

    return (
        this.state.isLoggedIn?
        <div>Welcome Ogah</div> : <div>Welcome Guest</div>
    )
*/
    //Short-circuit operator is a form of tenary operator only used when you want to render something or nothing


    return (this.state.isLoggedIn && <div>Welcome Ogah</div>)
  }
}

export default UserGreeting