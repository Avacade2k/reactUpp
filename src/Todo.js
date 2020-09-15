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
      <div style={this.getStyle()}>
        <p>
          <input
            type="checkbox"
            onChange={this.props.markCompleteProp2.bind(
              this,
              this.props.todoProp.id
            )}
          />
          {this.props.todoProp.title}
          <button style={buttonStyle}>x</button>
        </p>
      </div>
    );
  }
}
const buttonStyle = {
  background: "#ff0000",
  color: "#fff",
  border: "none",
  padding: "5px 9px",
  borderRadius: "50%",
  cursor: "pointer",
  float: "right",
};

Todo.propTypes = {
  todo: PropTypes.object.isRequired,
};

export default Todo;
