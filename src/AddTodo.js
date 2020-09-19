import React, { Component } from "react";
import PropTypes from "prop-types";

export class AddTodo extends Component {
  state = {
    title: "",
  };

  onChange = (e) => this.setState({ title: e.target.value });
  onSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title: "" });
  };

  render() {
    return (
      <form style={{ display: "flex" }} onSubmit={this.onSubmit}>
        <input
          type="text"
          name="title"
          style={{ flexGrow: 1 }}
          placeholder="Add todo..."
          value={this.state.title}
          onChange={this.onChange}
        ></input>
        <input type="submit" name="submit" value="Submit"></input>
      </form>
    );
  }
}

AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired,
};

export default AddTodo;
