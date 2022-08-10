// Components- describes part of the user interface. They are re-usable and can be nested inside other components.



/*Two Tyes of Components
1. A Stateless Functional Component- are literally  simple javascripts functions that can optionally receive an object of properties which returns a declaration of html(called JSX) that describes the User Interface
Use functional component as much as possible.
One advantage of using a functional component over class is the absence of using 'this' keywod which is encountered using the class.
You can also be forced to think of a solution without having to use state
They ae mainly responsible for the user interface
This is why they are refered to as Stateless, Dumb or Presentational Component
*/

function Welcome(props) {
    return <h1>Hello, {props.name}</h1>
}


/*
2. A Stateful Class Component - refers to regular ES6 classes that extends the component Class from the react library. They can receive object properties(props) which must contain a render method that returns html(JSX).
In addition to receiving pros, a class component can maintain a private internal state. In other words, it can maintain some information which is private to that component and use that information to describe the user interface.
The are feature rich.
They can maintain their own private data, also called state.
Involves complex UI logic
Provides LifeCycle hooks
Called Stateful, Smart or Container Component
*/

class Welcome extends React.Component {

    render () {
        return <h1>Hello, {props.name}</h1>
    }
}


/*
HOOKS
Hooks are new feature proposal in react which enable us to use functional components as a state and other react features without using class.
Because of hooks, components can now be categorize into only Functional and Class components.

JSX
-JavaScript XML (JSX)
-Writes XML like codes for elements and components
-JSX has a tag name, attributes and children
JSx is not however a neccessity to write react applications
But using JSX makes your react code simpler and elegant.
JSX ultimately transpiles into pure javascripts which is understood by the browsers

HTML vs JSX
- class -> className
- for -> htmlFor

camelCase naming convention
-onclick -> onClick
-tabindex -> tabIndex



Props vs State
-Props get passed to the Component vs State is managed within the component 
-e.g function parameters passed vs  variables declared within the function body
-Parents passed props to the child component, hence paents owned the pops and such pops are immutable and cannot be changed by the children vs state can be changed

-props can be accessed using 'props' in Functional component
-Props can be accessed using 'this.props' in class component

while in state, props can be accessed using 'useState Hooks' in Functional Component

in Class, props accessed using 'this.state'


SetState
-Always make use of setState and never modify the state directly
- if the Code has to be executed after the state has been updated. Then place the code in the call back function which is the second argument to the setState Method
- When you have to update based on previous state value, pass in a function as an argument instaed of a regular object.

CONDITIONAL RENDERING
-if/else
-Element variables
-Ternary conditional variables
-short circle operator


options in STYLING REACT COMPONENTS:
-Regular CSS Stylesheets
-In-line Styling
-CSS Modules
-CSS in JS Libraries ( Works very well with React, eg styled components)


Regula CSS
-To specify multiple classes, the best option is to use template literals

INLINE STYLING

pls note that the value is specified as a string




CSS MODULES
-Available in react-scripts  version 2 or higher
-There's a filename convention to be used with CSS with Create react app 
-The file name must be suffix with '.module.css'
-There is also a difference in ho the file is imported into the root app or app.js
- One of the advantage of using CSS module is that the classes are locally scoped by default eg you cannot apply it to a className that is defined for another component, hece, you can avoid CSS conflict using CSS module
-Once you have referenced the calssName using the styles variable , you cannot not use it in children component

*/

