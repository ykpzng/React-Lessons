import React from "react";
import { List, NoList } from "./List";
import { connect } from "react-redux";
import { addTodo } from "../actions/updateList"

// React:
class App extends React.Component {
  state = {
    value: ""
  }

  handleInput = (e) => {
    this.setState({ value: e.target.value });
  }

  render() {

    // console.log("State : ", this.state);
    // console.log("Props : ", this.props.content);
    return (
      <div id="toDoApp">
        <label id="toDoTitle" htmlFor="basic-input">
          <h2 className="text-monospace">Add new things To Do:</h2>
        </label>
        <div id="toDoAdd" className="input-group">
          <input
            onChange={this.handleInput}
            id="basic-input"
            className="form-control"
            type="text"
            placeholder="Thing to do"

          />
          <div className="input-group-append">
            <button className="btn btn-outline-primary" onClick={() =>
              this.state.value ? this.props.addTodo(this.state.value) : null}
            >Add</button>
          </div>
        </div>
        {this.props.content.length > 0 ? <List content={this.props} /> : <NoList />}
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    content: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (content) => { dispatch(addTodo(content)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
