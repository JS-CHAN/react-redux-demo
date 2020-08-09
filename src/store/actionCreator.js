import {ADD_ITEM, CHANGE_INPUT_VALUE, DELETE_ITEM, INIT_ITEMS,TEST_SAGA} from "./actionTypes";

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
export const initItems = (data)=> ({
    type: INIT_ITEMS,
    data
});
export const testSaga = ()=> ({
    type: TEST_SAGA,
});
