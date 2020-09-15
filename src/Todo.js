import React, { Component } from "react";
import PropTypes from "prop-types";

class Todo extends Component {
  getStyle() {
    return {
      backgroundColor: "#f4f4f4",
      padding: "10px",
      borderBottom: "1px dotted #ccc",
      textDecoration: this.props.todoProp.completed ? "line-through" : "none",
    };
  }

  render() {
    return (
      <div>
        <input
          type="checkbox"
          onChange={this.props.markCompleteProp2.bind(
            this,
            this.props.todoProp.id
          )}
        ></input>

        <div style={this.getStyle()}>{this.props.todoProp.title}</div>
      </div>
    );
  }
}

Todo.propTypes = {
  todo: PropTypes.object.isRequired,
};

export default Todo;
