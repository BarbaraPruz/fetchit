export default function testReducer(
    state = {
        method: 'get',
        testResponseCode: 200,
        uri: '',
        responsePayload: ''
    },
    action
) {
    console.log("testReducer",action);
    switch (action.type) {
        case 'RUNNING_TEST':
             return {...state, method:action.method, uri:action.uri}
 
        default:
            return state;
    }
}