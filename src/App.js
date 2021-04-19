import React,{useReducer} from 'react';
import logo from './logo.svg';
import './App.css';
import  {Container} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

import {TodoContext} from './Context/TaskContext';
import  todoReducer from './Context/reducer';
const App=()=>{
  const [todos, dispatch]=useReducer(todoReducer);
  return (
    <TodoContext.Provider value={{todos,dispatch}}>
      <Container fluid>
        <h1>Todo app</h1>
      </Container>

    </TodoContext.Provider>
  )
}

export default App;
