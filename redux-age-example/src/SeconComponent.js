import React, { Component } from React;
import { connect } from 'react-redux';

class SeconComponent extends Component {
    render() {
        return (
            <div className="MyClass">
                <span> Salaray : {this.props.salary}</span>
                <button onClick={this.props.multiplyByTen}> Multiply by 10 </button>
                <button onClick={this.props.divideByTen}> Divide by 10 </button>
            </div >
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        multiplyByTen: () => dispatch({ type: 'MULTIP_BY_TEN' }),
        divideByTen: () => dispatch({ type: 'DIVIDE_BY_TEN' })
    }
}

const matchStateToProps = (state) => {
    return {
        salary: state.salary
    }
}

export default connect(matchStateToProps, mapDispatchToProps)(SeconComponent);
