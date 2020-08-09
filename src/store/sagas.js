import {takeEvery,put} from 'redux-saga/effects'
import {TEST_SAGA} from "./actionTypes";
import axios from 'axios';
import {initItems} from './actionCreator'

function* getInitItems(){
    try{
        const res = yield axios.get('/test11');
        const action = initItems(res.data);
        yield put(action)
    }catch (e) {
        console.log('error')
    }
}


//generator function
function* sagaTest () {
    yield takeEvery(TEST_SAGA, getInitItems);
}

export default sagaTest;
