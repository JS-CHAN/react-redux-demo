import {CHANGE_INPUT_VALUE,ADD_ITEM,DELETE_ITEM} from "./actionTypes";
const defaultState = {
    inputValue: '',
    list: ['jason']
}

export default (state = defaultState,acton) =>{
    if(acton.type === CHANGE_INPUT_VALUE){
        const newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = acton.value;
        return newState;
    }
    if(acton.type === ADD_ITEM){
        const newState = JSON.parse(JSON.stringify(state));
        if(newState.inputValue.trim() === ''){
            return newState;
        }
        newState.list.push(newState.inputValue);
        newState.inputValue = '';
        return newState;
    }
    if(acton.type === DELETE_ITEM){
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.splice(acton.index,1);
        return newState;
    }
   return state;
}
