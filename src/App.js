import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import { HashRouter as Router, Route } from "react-router-dom";
import Todos from "./Todos";
import Header from "./Header";
import AddTodo from "./AddTodo";
import About from "./pages/About";
import "./App.css";

class App extends Component {
  state = {
    todos: [
      {
        id: uuidv4(),
        title: "städa",
        completed: false,
      },
      {
        id: uuidv4(),
        title: "handla",
        completed: true,
      },
      {
        id: uuidv4(),
        title: "diska",
        completed: false,
      },
    ],
  };

  deleteTodo = (id) => {
    const newState = [...this.state.todos.filter((todo) => todo.id !== id)];
    this.setState({ todos: newState });
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

  addTodo = (title) => {
    const newTodo = {
      id: uuidv4(),
      title,
      completed: false,
    };
    this.setState({ todos: [...this.state.todos, newTodo] });
  };

  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route
            exact
            path="/"
            render={(props) => (
              <React.Fragment>
                <AddTodo addTodo={this.addTodo} />
                <Todos
                  todos={this.state.todos}
                  markCompleteProp={this.markComplete}
                  deleteTodoProp={this.deleteTodo}
                />
              </React.Fragment>
            )}
          />
          <Route path="/about" component={About} />
        </div>
      </Router>
    );
  }
}

export default App;
