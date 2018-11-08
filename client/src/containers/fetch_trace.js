import React, { Component } from 'react';
//import { connect } from 'react-redux';

class FetchTrace extends Component {

    render() {            
        return (
            <React.Fragment>
                <h1>Fetch Trace</h1>
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
export default FetchTrace;