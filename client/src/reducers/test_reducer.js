export default function testReducer(
    state = {
        checkForOK: '',
        testResponseCode: '',
        uri: '',
        responsePayload: ''
    },
    action
) {
    console.log("testReducer",action);
    switch (action.type) {
        case 'RUNNING_TEST_CHECK':
             return {...state, checkForOK:true, uri:action.uri}

        case 'RUN_TEST_RESULTS':
             return {...state, responsePayload:action.payload.message}

        case 'RUNNING_TEST_NO_CHECK':
             return {...state, checkForOK:false, uri:action.uri}
            
        default:
            return state;
    }
}