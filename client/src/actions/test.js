

export function trace(msg) {
    return {
        type: 'TRACE',
        trace: msg
    };
  }
  
export function clearTrace() {
    return {
        type: 'CLEAR_TRACE'
    };
}
  
export function runningTest() {
    return {
        type: 'RUNNING_TEST',
    };
}
  
function buildURI (routeChoice, responseCode) {
    let route = routeChoice ==='valid' ? "test" : "invalid";
    return `/api/${route}/${responseCode}`;    
}

export function runTestCheck(testParams) {
    let uri = buildURI(testParams.route,testParams.responseCode);
    return (dispatch) => {
         dispatch(runningTest());
         dispatch(trace(`Test Start for ${uri} with response ok check`));         
         dispatch(trace("Going to Fetch"));       
         fetch(uri,{method: 'get'})     
            .then(res => {
                dispatch(trace("Check HTTP status check"));
                if (!res.ok) {
                    dispatch(trace("Response not OK!"));        
                    throw Error(res.statusText);
                }
                return res;   
            })                           
            .then(res => res.json())
            .then(res =>{
                dispatch(trace("Converted Response to JSON"));
                dispatch(trace(`Completed Response Processing, Payload: ${res.message}`));
            }) 
            .catch(function(error) {
                dispatch(trace(`Detected Fetch Error - ${error}`))
                console.log(error);
            })                     
    };           
}

export function runTestNoCheck(testParams) {
    let uri = buildURI(testParams.route,testParams.responseCode);
    return (dispatch) => {
         dispatch(runningTest());
         dispatch(trace(`Test Start for ${uri} with no response ok check`));           
         dispatch(trace("Going to Fetch"));             
         fetch(uri,{method: 'get'})                              
            .then(res => res.json())
            .then(res =>{
                dispatch(trace("Converted Response to JSON"));                
                dispatch(trace(`Completed Response Processing, Payload: ${res.message}`))
            })
            .catch(function(error) {
                dispatch(trace(`Detected Fetch Error - ${error}`));              
                console.log(error);
            })                     
    };           
}
