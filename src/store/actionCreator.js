import {ADD_ITEM, CHANGE_INPUT_VALUE, DELETE_ITEM} from "./actionTypes";
import axios from 'axios'

export const getChangeInputValueAction = (value) => ({
        type: CHANGE_INPUT_VALUE,
        value
});

export const getAddItemAction = () => ({
    type: ADD_ITEM,
});

export const getDeleteItemAction = (index)=> ({
    type: DELETE_ITEM,
    index
});

export const getInitDItems = () => {
    return  (dispatch)=>{
        axios.get('/test').then((res)=>{
            const data = res.data;
            dispatch();//直接引用dispatch
        }).catch(()=>{
            console.log('error')
        })
    }
}
