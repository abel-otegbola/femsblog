export const reducer = (state={ data: null}, action) => {
    if(action.type === 'fetchData') {
        console.log(state)
        return state = {
            data: action.payload.data.data, 
        }
    }
    else {
        return state
    }
}
