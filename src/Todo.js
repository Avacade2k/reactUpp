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
    const { id, title } = this.props.todoProp;

    return (
      <div style={this.getStyle()}>
        <p>
          <input
            type="checkbox"
            onChange={this.props.markCompleteProp2.bind(this, id)}
          />
          {title}
          <button
            onClick={this.props.deleteTodoProp2.bind(this, id)}
            style={buttonStyle}
          >
            x
          </button>
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
  todoProp: PropTypes.object.isRequired,
  markCompleteProp2: PropTypes.func.isRequired,
  deleteTodoProp2: PropTypes.func.isRequired,
};

export default Todo;
