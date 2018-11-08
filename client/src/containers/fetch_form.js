import React, { Component } from 'react';
//import { connect } from 'react-redux';

class FetchForm extends Component {

    state = {
        method: 'get',
        responseCode: '200',
    }

    handleChange = (event) => this.setState({[event.target.name]: event.target.value});

    handleSubmit = (event) => {
        event.preventDefault(); 
        console.log("Submit for test",this.state)
    }

    render() {            
        return (
            <React.Fragment>
                <h1>Fetch Form</h1>
                <form onSubmit={ event => this.handleSubmit(event) }>
                    <select name="method" value={this.state.method} onChange={ event => this.handleChange(event)}>
                        <option value="get">Get</option>
                        <option value="post">Post</option>                    
                    </select> 
                    <select name="responseCode" value={this.state.responseCode} onChange={ event => this.handleChange(event)}>
                        <option value="200">200</option>
                        <option value="400">400</option>
                        <option value="500">500</option>                                            
                    </select>                                      
                    <button type="submit" >Test</button>
                </form>                
            </React.Fragment> 
        )
    }
}

// const mapStateToProps = state => {
//     return {
//       isLoggedIn: state.user.isLoggedIn,
//       newsSources: state.user.newsSources,
//       headlines: state.news.headlines
//     }
//   }
  
// export default connect(mapStateToProps,{getHeadlines}) (HeadlinesContainer);
export default FetchForm;