import React from "react"
import { connect } from "react-redux";

import { addToDo, toggleTODO, deleteToDo } from "../actions";

class ToDoList extends React.Component {
  state = {
    newToDo: ""
  }

  handleChanges = e => {
    this.setState({
      newToDo: e.target.value
    })
  }

  addToDo = e => {
    e.preventDefault()
    this.props.addToDo(this.state.newToDo)
    this.setState({ newToDo: "" })
  }

  toggleTODO = id => {
    this.props.toggleTODO(id)
  }

  deleteToDo = id => {
    
      this.props.deleteToDo(id)
  }

  render() {
    return (
      <>
        <div className="todo-list">
          {this.props.todo.map((todo, index) => (
            <h4 onClick={() => this.toggleTODO(todo.id)} key={todo.id}>
              {todo.name}
              {todo.checkStatus && <i className="fas fa-check" />}
              
            </h4>
          ))}
        </div>
        <button onClick={() => this.deleteToDo()} >Delete Checked</button>
        <form>
          <input
            type="text"
            value={this.state.newToDo}
            onChange={this.handleChanges}
            placeholder="Add new ToDo"
          />
        </form>
        <button onClick={this.addToDo}>Add ToDo</button>
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    todo: state.todo
  };
};

export default connect(
  mapStateToProps,
  { addToDo, toggleTODO, deleteToDo })(ToDoList);