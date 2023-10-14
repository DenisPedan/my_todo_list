import React from 'react';
import './App.css';
import MyModal from "./components/MyModal/MyModal";
import {useDispatch} from "react-redux";
import {Dispatch} from "redux";
import {ActionsTypes, SetVisibleAction} from "./types/state";
import {useTypedSelector} from "./hooks/useTypedSelector";
import TodoItem from "./components/TodoItem";

function App() {
    const dispatch: Dispatch<SetVisibleAction> = useDispatch();
    const {todos} = useTypedSelector(state => state);

    return (
        <div className="App">
            <button onClick={() => dispatch({type: ActionsTypes.SET_VISIBLE})} className='btn'>Создать задачу</button>
            <MyModal/>
            {todos.length !== 0 && <div style={{fontSize: 23, fontWeight: 'bold', marginBottom: 26}}>Список задач:</div>}
            {todos.map((todo, index) => <TodoItem index={index} text={todo}/>)}
        </div>
    );
}

export default App;
