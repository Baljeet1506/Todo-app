
import './App.css';
import Register from "./pages/Register";
import TodoList from './pages/TodoList';
import test from './pages/test';
/* import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom' */


function App() {
  return (
    <div className="App">
  {/* <Router>
    <Link to ="/Register">Register</Link>
    <Link to ="/TodoList">Todo</Link>
    <Route path="/" exact />
    <Route path="/Register" exact component = {Register} />
  </Router> */}
   <Register /> 
 {/*  <TodoList /> */}
    </div>
  );
}

export default App;
