import Greet from './Components/GreetFunctional';
import Welcome from './Components/WelcomeClass';
import Hello from './Components/Hello';
import WithoutJSX from './Components/WithoutJSX';
import Message from './Components/Message';
import Counter from './Components/Counter';
import './App.css';
import FunctionClick from './Components/FunctionClick';
import ClassClick from './Components/ClassClick';
import EventBind from './Components/EventBind';
import ParentComponent from './Components/ParentComponent';
import UserGreeting from './Components/UserGreeting';
import NameList from './Components/NameList';
import StyleSheet from './Components/StyleSheet';
import Inline from './Components/Inline';
import './appStyles.css';
import styles from './appStyles.module.css'

function App() {
  return (
    <div className="App">
    
      <Greet name="Bruce" heroName="Batman">
      <p>This is children props</p>
      </Greet>
      <Greet name="Clark" heroName="Supeman">
        <button>Action</button>
        </Greet>
      <Greet name="Diana" heroName="Wonder Woman">

      </Greet>
      <Welcome name="Bruce" heroName="Batman">
      <p>This is children props</p>
      </Welcome>
      <Welcome name="Clark" heroName="Supeman">
        <button>Action</button>
        </Welcome>
      <Welcome name="Diana" heroName="Wonder Woman">
      </Welcome>
      <Hello />
      <WithoutJSX />
      <Message />
      <Counter />
      <FunctionClick />
      <ClassClick />
      <EventBind />
      <ParentComponent />
      <UserGreeting />
      <NameList />
      <StyleSheet primary={true} />
      <Inline />
      <h1 className='error'>Error</h1>
    <h1 className={styles.success}>Success</h1>
   </div> 
  );
}

export default App;
