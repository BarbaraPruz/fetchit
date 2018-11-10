import React, { Component } from 'react';
import { connect } from 'react-redux';

import { runTestCheck, runTestNoCheck } from '../actions/test'

class TestSetupForm extends Component {

    state = {
        responseCode: '200',
        responseCheck: 'on',
   //     route: 'good'
    }

    handleChange = (event) => this.setState({[event.target.name]: event.target.value});

    handleSubmit = (event) => {
        event.preventDefault();
        if (this.state.responseCheck == 'on') 
            this.props.runTestCheck({responseCode: this.state.responseCode});
        else
            this.props.runTestNoCheck({responseCode: this.state.responseCode});
    }

    render() {            
        return (
            <div className="Form">
                <h1>Setup</h1>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>HTTP Response Code</label>
                        <select name="responseCode" value={this.state.responseCode} onChange={ event => this.handleChange(event)}>
                            <option value="200">200</option>
                            <option value="400">400</option> 
                            <option value="500">500</option>                                       
                        </select>
                    </div>
                    <div>
                        <label>Response OK Check</label>
                        <select name="responseCheck" value={this.state.responseCheck} onChange={ event => this.handleChange(event)}>
                            <option value="on">On</option>
                            <option value="off">Off</option>                                      
                        </select> 
                    </div>
                    {/* <label>Route</label>
                    <select name="route" value={this.state.route} onChange={ event => this.handleChange(event)}>
                        <option value="good">Define-Get</option>
                        <option value="error">Invalid/Undefined</option>                                      
                    </select>                                                         */}
                    <button type="submit">Run Test</button>           
                </form>                
            </div> 
        )
    }
}

export default connect(null,{runTestCheck,runTestNoCheck}) (TestSetupForm);
