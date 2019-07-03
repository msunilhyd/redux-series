import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { Component } from 'react';
import SeconComponent from 'src';

class App extends Component {
  render() {
    return (
      <div className="App" >
        <div>Age : <span>{this.props.age}</span>
          <button onClick={this.props.onAgeUp}>Age up</button>
          <button onClick={this.props.onAgeDown}>Age down</button>
          {/* A JSX comment */}
        </div>
        <SeconComponent />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    age: state.age
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAgeUp: () => dispatch({ type: 'AGE_UP', payload: 3 }),
    onAgeDown: () => dispatch({ type: 'AGE_DOWN', payload: 2 })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
