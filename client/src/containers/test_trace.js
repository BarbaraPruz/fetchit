import React, { Component } from 'react';
import { connect } from 'react-redux';
import { clearTrace } from '../actions/test';

class TestTrace extends Component {

    handleClick = () => this.props.clearTrace();

    render() {            
        return (
            <div className="Trace">
                <h1>Trace</h1>
                <button onClick={this.handleClick}>Clear</button>
                <ul>
                {this.props.traceDetails.map((msg, id) => <li>{msg}</li>)}
                </ul>
            </div> 
        )
    }
}

const mapStateToProps = state => {
   return {
       traceDetails: state.test.trace,
     }
}
  
export default connect(mapStateToProps,{clearTrace}) (TestTrace);
