
function handleAPIErrors(res) {
    // this is needed to catch 404, 500 errors, etc.
    console.log("handleAPIErrors",res);
    console.log("Serialize",JSON.stringify(res));
    if (!res.ok) {
        throw Error(res.statusText);
    }
    return res;   
}

export function runningTestCheck(uri) {
    return {
        type: 'RUNNING_TEST_CHECK',
        uri: uri
    };
  }
  

export function runTestCheck(testParams) {
    let uri = `/api/test/${testParams.responseCode}`;
console.log("Run test URI",uri);
    return (dispatch) => {
         dispatch(runningTestCheck(uri));
         fetch(uri,{method: 'get'})     
            .then(res => handleAPIErrors(res))                            
            .then(res => res.json())
            .then(res =>{
                dispatch({type: "RUN_TEST_RESULTS", payload:res})}) 
            .catch(function(error) {
                console.log(error);
            })                     
    };           
}

export function runningTestNoCheck(uri) {
    return {
        type: 'RUNNING_TEST_NO_CHECK',
        uri: uri
    };
  }
  

export function runTestNoCheck(testParams) {
    let uri = `/api/test/${testParams.responseCode}`;
console.log("Run test URI",uri);
    return (dispatch) => {
         dispatch(runningTestNoCheck(uri));
         fetch(uri,{method: 'get'})                              
            .then(res => res.json())
            .then(res =>{
                dispatch({type: "RUN_TEST_RESULTS", payload:res})}) 
            .catch(function(error) {
                console.log(error);
            })                     
    };           
}
