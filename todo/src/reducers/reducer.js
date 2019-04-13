import {  ADD_TODO, TOGGLE_TODO } from "../actions";

 const initialState = {
     todo: [
         {name: "Create React ToDo", checkStatus: false, id: 1},
         {name: "Water Plants", checkStatus: true, id: 2},
         {name: "Go See Captain Marvel", checkStatus: false, id: 3},
         {name: "Clean House", checkStatus: false, id: 4}
     ]
 };

 export default function reducer(state = initialState, action) {
     switch (action.type) {
         case ADD_TODO:
         return {
             ...state,
             todo: [
                 ...state.todo,
                 {name: action.payload, checkStatus: false, id: Date.now() }
             ]
         };

         case TOGGLE_TODO:
         return {
             ...state,
             todo: state.todo.map(todo => {
                 if (todo.id === action.payload) {
                     return {
                         ...todo,
                         checkStatus: !todo.checkStatus
                     };
                 } else {
                     return todo;
                 }
             })
         };

         default:
         return state;
     }
 }

