import React, { Component } from 'react';
import { connect } from 'react-redux';

class TestTrace extends Component {

    render() {            
        return (
            <div className="Trace">
                <h1>Trace</h1>
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
  
export default connect(mapStateToProps) (TestTrace);
