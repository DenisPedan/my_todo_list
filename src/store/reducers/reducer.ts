import {Action, ActionsTypes, State} from "../../types/state";

const initialState: State = {
    visible: false,
    todos: [],
    value: '',
    indicatorForChecked: -1,
    taskId: -1
}

export const reducer = (state = initialState, action: Action): State => {
    switch (action.type) {
        case ActionsTypes.SET_VISIBLE:
            return {...state, value: action.payload?.text || '', taskId: action.payload? action.payload.index : state.taskId, visible: true}
        case ActionsTypes.SET_INPUT_VALUE:
            return {...state, value: action.payload}
        case ActionsTypes.SET_TODO:
            return {...state, todos: [...state.todos, state.value], visible: false, value: ''}
        case ActionsTypes.DELETE_TODO:
            return {...state, indicatorForChecked: -1, todos: state.todos.filter((a, b) => {
                return b !== state.indicatorForChecked;
                }) }
        case ActionsTypes.SET_CHECKBOX_VALUE:
            return {...state, indicatorForChecked: action.payload}
        case ActionsTypes.EDIT_TODO:
            return {...state, todos: state.todos.map((a, b) => {
                return b === state.taskId ? state.value : a
                }), taskId: -1, visible: false}
        default:
            return state;
    }
}




