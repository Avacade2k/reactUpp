import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import { HashRouter as Router, Route } from "react-router-dom";
import Todos from "./Todos";
import Header from "./Header";
import AddTodo from "./AddTodo";
import About from "./pages/About";
import "./App.css";
import Axios from "axios";

class App extends Component {
  state = {
    todos: [],
  };

  componentDidMount() {
    Axios.get(
      "https://jsonplaceholder.typicode.com/todos?_limit=10"
    ).then((res) => this.setState({ todos: res.data }));
  }

  deleteTodo = (id) => {
    Axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`).then(
      (res) =>
        this.setState({
          todos: [...this.state.todos.filter((todo) => todo.id !== id)],
        })
    );
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
    Axios.post("https://jsonplaceholder.typicode.com/todos", {
      title: title,
      id: uuidv4(),
      completed: false,
    }).then((res) => this.setState({ todos: [...this.state.todos, res.data] }));
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
