
function handleAPIErrors(res) {
    // this is needed to catch 404, 500 errors, etc.
    if (!res.ok) {
        throw Error(res.statusText);
    }
    return res;   
}


export function runTest(testParams) {
  //  return (dispatch) => {
    return {
        type: 'TEST',
        payload: testParams
    };
  //  }
    // return (dispatch) => {
    //     dispatch(loggingIn());

    //     const request = {"auth": {"email": credentials.email, "password": credentials.password}}
    //     const options = {
    //         method: 'POST',
    //         body: JSON.stringify(request),
    //         headers: {
    //           'Content-Type': 'application/json'
    //         }
    //     };
    //     //console.log("Login User!",request);
    //     fetch("api/user_token", options)
    //         .then(res => handleAPIErrors(res))        
    //         .then(res => res.json())
    //         .then(res => {
    //             localStorage.setItem("jwt", res.jwt); // TODO: move to reducer?
    //             let id = jwt_decode(res.jwt).sub;                
    //             dispatch({type:"LOGIN_USER", token:res.jwt, id: id})
    //             dispatch(getUserPreferences(id))               
    //         })
    //         .catch(function(error) {
    //             console.log(error);
    //         });             
    // };
}