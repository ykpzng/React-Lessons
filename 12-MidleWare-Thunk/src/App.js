import './App.css';
import { connect } from "react-redux"
import { updateUser, getUser } from "./actions/userActions";


import React, { Component } from 'react'

class App extends Component {

  onClickUpdateUser = () => {
    //this.props.dispatch(updateUser("merhaba")); // Dispach burada yapılabilir.
    // Eğer aşağıda yapılacaksa
    this.props.onUpdateUser("Merhaba");
  }

  componentDidMount() {
    this.props.onGetUsers();
  }


  render() {
    console.log(this.props)
    return (
      <div className="App">
        APP Componenet
        <br />
        <button onClick={this.onClickUpdateUser}>Change The Name</button>
      </div>
    )
  }
}





const mapStateToProps = (state) => {
  return state;
}

const mapDispatchToProps = {
  onUpdateUser: updateUser,
  onGetUsers: getUser
}

// connect nesnesinin 3. parametresi mergeProps, hangi propsun nerden geldiğini görebiliriz
const mergeProps = (propsFromState, propsFromDispatch, ownProps) => {
  console.log("************WHERE*************");
  console.log("propsFromState :", propsFromState);
  console.log("propsFromDispatch :", propsFromDispatch);
  console.log("ownProps :", ownProps);

  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
//export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(App); //mergePropslu kullanım

