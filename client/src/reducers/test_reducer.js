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
        // case 'TEST':
        //     return state.items.concat(state.items.length + 1);
 
        default:
            return state;
    }
}