import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducer  from './reducers/reducer';
import ToDoList from './components/ToDoList';

import './index.css';


const store = createStore(reducer);

function App() {
  return (
    <div className="App">
    <header className="App-header">
         
         <h1>
           To Do List
         </h1>
       
       </header>
      <ToDoList />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

