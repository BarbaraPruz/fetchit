export default function testReducer(
    state = {
        trace: []
    },
    action
) {
    console.log("testReducer",action);
    switch (action.type) {
        case 'RUNNING_TEST':
             return {...state, trace:[] }
       
        case 'TRACE':
            return {...state, trace: [...state.trace, action.trace]}

        default:
            return state;
    }
}