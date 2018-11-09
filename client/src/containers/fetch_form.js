import React, { Component } from 'react';
import { connect } from 'react-redux';

import { runTestCheck, runTestNoCheck } from '../actions/test'

class FetchForm extends Component {

    state = {
        responseCode: '200',
    }

    handleChange = (event) => this.setState({[event.target.name]: event.target.value});

    handleTestNoCheck = (event) => {
        event.preventDefault(); 
        this.props.runTestNoCheck(this.state);
    }

    handleTestCheck = (event) => {
        event.preventDefault(); 
        this.props.runTestCheck(this.state);
    }

    render() {            
        return (
            <React.Fragment>
                <h1>Fetch Form</h1>
                <form>
                    <select name="responseCode" value={this.state.responseCode} onChange={ event => this.handleChange(event)}>
                        <option value="200">200</option>
                        <option value="400">400</option> 
                        <option value="500">500</option>                                       
                    </select>                                    
                    <button onClick={this.handleTestCheck}>Test with HTTP response check</button>
                    <button onClick={this.handleTestNoCheck}>Test with No HTTP response check</button>           
                </form>                
            </React.Fragment> 
        )
    }
}

export default connect(null,{runTestCheck,runTestNoCheck}) (FetchForm);
