//actions
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';

//action creators
export const increase =() => {
    return {type: INCREASE};
}
export const decrease =() => {
    return {type: DECREASE};
};
//initial state
const initialState = {
    count: 0,
}
//reducer
export default function counter(state = initialState, action){
    switch(action.type){
        case INCREASE:
            return{
                ...state,
                count: state.count + 1
            }
        case DECREASE:
            return{
                ...state,
                count: state.count - 1,
            }

        default:return{
            ...state,
        }
    }   
}