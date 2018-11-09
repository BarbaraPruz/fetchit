
function handleAPIErrors(res) {
    // this is needed to catch 404, 500 errors, etc.
    console.log("handleAPIErrors",res);
    console.log("Serialize",JSON.stringify(res));
    if (!res.ok) {
        throw Error(res.statusText);
    }
    return res;   
}

export function runningTest(method,uri) {
    return {
        type: 'RUNNING_TEST',
        method: method,
        uri: uri
    };
  }
  

export function runTest(testParams) {
    let uri = `/api/${testParams.method}/${testParams.responseCode}`;
console.log("Run test URI",uri);
    return (dispatch) => {
         dispatch(runningTest(testParams.method,uri));
         fetch(uri)
            .then(res => handleAPIErrors(res))                            
            .then(res => res.json())
            .then(res =>{
                dispatch({type: "RUN_TEST", payload:res})}) 
            .catch(function(error) {
                console.log(error);
            })                     
    };           
}