import React, { Component } from 'react';
import { connect } from 'react-redux';

class Request extends Component {

    render() {            
        return (
            <React.Fragment>
                <h1>Request</h1>
                <p>URI {this.props.uri}</p>
            </React.Fragment> 
        )
    }
}

const mapStateToProps = state => {
     return {
       uri: state.test.uri,
     }
}
  
export default connect(mapStateToProps) (Request);
