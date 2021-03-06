import React, { Component } from "react";
import Todo from "./Todo";
import PropTypes from "prop-types";

class Todos extends Component {
  render() {
    const todos = this.props.todos;
    return (
      <div>
        {todos.map((todoItem) => {
          return (
            <Todo
              key={todoItem.id}
              todoProp={todoItem}
              markCompleteProp2={this.props.markCompleteProp}
              deleteTodoProp2={this.props.deleteTodoProp}
            />
          );
        })}
      </div>
    );
  }
}

Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  markCompleteProp: PropTypes.func.isRequired,
  deleteTodoProp: PropTypes.func.isRequired,
};

export default Todos;
