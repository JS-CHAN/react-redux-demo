import {CHANGE_INPUT_VALUE,ADD_ITEM,DELETE_ITEM, INIT_ITEMS} from "./actionTypes";
const defaultState = {
    inputValue: '',
    list: ['jason']
}

export default (state = defaultState,action) =>{
    if(action.type === CHANGE_INPUT_VALUE){
        const newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;
        return newState;
    }
    if(action.type === ADD_ITEM){
        const newState = JSON.parse(JSON.stringify(state));
        if(newState.inputValue.trim() === ''){
            return newState;
        }
        newState.list.push(newState.inputValue);
        newState.inputValue = '';
        return newState;
    }
    if(action.type === DELETE_ITEM){
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.splice(action.index,1);
        return newState;
    }
    if(action.type === INIT_ITEMS){
        console.log(action.data)
    }
   return state;
}
