import React, { Component } from "react";
import "./App.css";
import Todos from "./Todos";

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: "städa",
        completed: false,
      },
      {
        id: 2,
        title: "handla",
        completed: false,
      },
    ],
  };

  markComplete = (id) => {
    const newTodosState = this.state.todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    this.setState({ todos: newTodosState });
  };

  render() {
    return (
      <div className="App">
        <Todos todos={this.state.todos} markCompleteProp={this.markComplete} />
      </div>
    );
  }
}

export default App;
