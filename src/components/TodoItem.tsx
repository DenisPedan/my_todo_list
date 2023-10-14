import React, {FC} from 'react';
import {Dispatch} from "redux";
import {useDispatch} from "react-redux";
import {ActionsTypes, DeleteTodoAction, SetCheckboxValueAction, SetVisibleAction} from "../types/state";
import {useTypedSelector} from "../hooks/useTypedSelector";

interface TodoItem {
    index: number;
    text: string | undefined;
}

const TodoItem: FC<TodoItem> = ({index, text}) => {
    const dispatch: Dispatch<DeleteTodoAction | SetCheckboxValueAction | SetVisibleAction> = useDispatch();

    const {indicatorForChecked} = useTypedSelector(state => state);

    const changeHandler = () => {
        dispatch({type: ActionsTypes.SET_CHECKBOX_VALUE, payload: index});

        setTimeout(() => dispatch({type: ActionsTypes.DELETE_TODO}), 40);
        // не посылали данные в этом диспатче, так как нужные данные уже послались предыдущим
    }

    return (
        <div style={{display: 'flex', alignItems: 'center', fontSize: 25, marginBottom: 12}}>
            <input onChange={changeHandler} checked={indicatorForChecked === index} type="checkbox"/>
            <p style={{marginLeft: 5}}>{index + 1}.</p>
            <p style={{marginLeft: 5}}>{text}</p>
            <button onClick={() => dispatch({type: ActionsTypes.SET_VISIBLE, payload: {text, index}})} className='btn_edit'>| изменить |</button>
        </div>
    );
};

export default TodoItem;