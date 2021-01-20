import React from "react";
import { connect } from "react-redux";
import { editTodo, deleteTodo } from "../actions/updateList"

class ListItem extends React.Component {
  state = {
    value: ""

  }


  updateToDo = (e) => {
    this.setState({ value: e.target.textContent });
  }

  render() {
    const toDo = this.props.content;
    console.log(toDo);
    return (
      <div>
        {toDo.map((item, index) => (
          <div key={index} className="list-group-item list-group-item-action d-flex justify-content-between">
            <span contentEditable={true} onInput={this.updateToDo}>{item}</span>
            <div className="btn-group btn-group-sm" role="group">
              <button className="btn btn-primary" type="button"
                onClick={() => this.props.editTodo(index, this.state.value)}
              >Update
              </button>
              <button className="btn btn-primary" type="button"
                onClick={() => this.props.deleteTodo(index)}
              >Delete
              </button>
            </div>
          </div>
        ))}
      </div >
    );
  }
}


const mapStateToProps = (state) => {
  return {
    content: state
  }
}

const mapDispatchToProps = {
  editTodo,
  deleteTodo
}

export default connect(mapStateToProps, mapDispatchToProps)(ListItem);
