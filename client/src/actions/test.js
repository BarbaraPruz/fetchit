

export function trace(msg) {
    return {
        type: 'TRACE',
        trace: msg
    };
  }
  
export function runningTest(uri,isCheckForOK) {
    return {
        type: 'RUNNING_TEST',
        uri: uri,
        checkForOK: isCheckForOK
    };
  }
  

export function runTestCheck(testParams) {
    let uri = `/api/test/${testParams.responseCode}`;
    return (dispatch) => {
         dispatch(runningTest());
         dispatch(trace(`Test Start for ${uri} with response ok check`));         
         dispatch(trace("Going to Fetch"));       
         fetch(uri,{method: 'get'})     
            .then(res => {
                dispatch(trace("Check For API Errors"));
                if (!res.ok) {
                    dispatch(trace("Response not OK!"));        
                    throw Error(res.statusText);
                }
                return res;   
            })                           
            .then(res => res.json())
            .then(res =>{
                dispatch(trace("Converted Response to JSON"));
                dispatch(trace(`Completed Response Processing, Payload: ${res.message}`));}) 
            .catch(function(error) {
                console.log(error);
            })                     
    };           
}

export function runTestNoCheck(testParams) {
    let uri = `/api/test/${testParams.responseCode}`;
    return (dispatch) => {
         dispatch(runningTest());
         dispatch(trace(`Test Start for ${uri} with no response ok check`));           
         dispatch(trace("Going to Fetch"));             
         fetch(uri,{method: 'get'})                              
            .then(res => res.json())
            .then(res =>{
                dispatch(trace("Converted Response to JSON"));                
                dispatch(trace(`Completed Response Processing, Payload: ${res.message}`))})
            .catch(function(error) {
                console.log(error);
            })                     
    };           
}
