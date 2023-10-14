import React, {FC} from 'react';
import cl from './MyModal.module.css';
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {Dispatch} from "redux";
import {ActionsTypes, EditTodoAction, SetInputValueAction, SetTodoAction} from "../../types/state";
import {useDispatch} from "react-redux";

const MyModal: FC = () => {
    const {visible, value, taskId} = useTypedSelector(state => state);
    const rootClasses: string[] = [cl.myModal];
    const dispatch: Dispatch<SetTodoAction | SetInputValueAction | EditTodoAction> = useDispatch();

    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (taskId === -1) {
        dispatch({type: ActionsTypes.SET_TODO});
        } else {
            dispatch({type: ActionsTypes.EDIT_TODO});
        }
    }

    const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch({type: ActionsTypes.SET_INPUT_VALUE, payload: e.target.value})
    }

    if (visible) {
        rootClasses.push(cl.active);
    }

    console.log(`VALUE: ${value}`);

    return (
        <div className={rootClasses.join(' ')}>
            <form onSubmit={submitHandler}>
                <input className='input' onChange={inputChangeHandler} value={value} type="text" placeholder='Название задачи'/>
                <input disabled={!value && true} className='btn' type="submit" name='Создать'/>
            </form>
        </div>
    );
};

export default MyModal;