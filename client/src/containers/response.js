import React, { Component } from 'react';
import { connect } from 'react-redux';

class Response extends Component {

    render() {            
        return (
            <React.Fragment>
                <h1>Response</h1>
                <p>{this.props.responseMessage}</p>
            </React.Fragment> 
        )
    }
}

const mapStateToProps = state => {
    return {
      responseMessage: state.test.responsePayload
    }
  }
  
export default connect(mapStateToProps) (Response);
