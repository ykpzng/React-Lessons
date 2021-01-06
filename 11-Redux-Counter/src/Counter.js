import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from "redux";
import { increaseCount, decraseCount } from "./actions/counterActions";
// import { Button, Icon } from "semantic-ui-css";


export const Counter = (props) => {
  return (
    <div>

      {/* <Button icon labelPosition='left'>
        <Icon name='chevron up' />
      Pause
    </Button>
      <Button icon labelPosition='right'>
        Next
      <Icon name='angle down' />
      </Button> */}
      <button onClick={props.increaseCount}>Artır (+)</button>
      <span style={{ padding: "10px" }}>{props.count}</span>
      <button onClick={props.decraseCount}>Azalt (-)</button>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    count: state.count,
  }
}


// action dan gelen metotları direk kullanabilmek için bindActionCreators 

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ increaseCount, decraseCount }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
