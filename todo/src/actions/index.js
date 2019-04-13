export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const addToDo = toDo => {
  console.log(toDo);
  return {
    type: ADD_TODO,
    payload: toDo
  };
};

export const toggleTODO = id => {
  return {
    type: TOGGLE_TODO,
    payload: id
  };
};

export const deleteToDo = toDo => {
    return {
        type: DELETE_TODO,
        payload: toDo
    };
}; 