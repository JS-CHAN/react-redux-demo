import React from 'react';
import {connect} from "react-redux";
import {getChangeInputValueAction, getAddItemAction, getDeleteItemAction, testSaga} from './store/actionCreator'
import {TEST_SAGA} from "./store/actionTypes";

const TodoList = (props) => {
    const {inputValue, list, handlerChange, handlerClick, handleDelete,testSaga} = props;
    return (
        <div>
            <div>
                <input value={inputValue} onChange={handlerChange}/>
                <button onClick={handlerClick}>submit</button>
            </div>
            <ul>
                {list.map((item, index) => {
                    return <li onClick={handleDelete.bind(this, index)} key={index}>{item}</li>
                })}
            </ul>
            <div>
                <button onClick={testSaga}>testSaga</button>
            </div>
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        inputValue: state.inputValue,
        list: state.list
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        handlerChange (e) {
            const action = getChangeInputValueAction(e.target.value)
            dispatch(action)
        },
        handlerClick () {
            const action = getAddItemAction();
            dispatch(action)
        },
        handleDelete (index) {
            const action = getDeleteItemAction(index)
            dispatch(action)
        },
        testSaga () {
            const action = testSaga()
            dispatch(action)
        }
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
