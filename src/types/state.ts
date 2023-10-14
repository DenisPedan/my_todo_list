import {reducer} from "../store/reducers/reducer";

export interface State {
    todos: Array<string | undefined>;
    value: string;
    visible: boolean;
    indicatorForChecked: number;
    taskId: number;
}

export enum ActionsTypes {
    SET_VISIBLE = 'SET_VISIBLE',
    SET_INPUT_VALUE = 'SET_INPUT_VALUE',
    SET_TODO = 'SET_TODO',
    DELETE_TODO = 'DELETE_TODO',
    SET_CHECKBOX_VALUE = 'SET_CHECKBOX_VALUE',
    EDIT_TODO = 'EDIT_TODO'
}

interface PayloadForSetVisibleAction {
    text: string | undefined;
    index: number;
}

export interface SetVisibleAction {
    type: ActionsTypes.SET_VISIBLE;
    payload?: PayloadForSetVisibleAction;
}

export interface SetInputValueAction {
    type: ActionsTypes.SET_INPUT_VALUE;
    payload: string;
}

export interface SetTodoAction {
    type: ActionsTypes.SET_TODO;
}

export interface DeleteTodoAction {
    type: ActionsTypes.DELETE_TODO;
}

export interface SetCheckboxValueAction {
    type: ActionsTypes.SET_CHECKBOX_VALUE;
    payload: number;
}

export interface EditTodoAction {
    type: ActionsTypes.EDIT_TODO;
}

export type Action = SetVisibleAction
    | SetInputValueAction
    | SetTodoAction
    | DeleteTodoAction
    | SetCheckboxValueAction
    | EditTodoAction;

export type TypedReducer = ReturnType<typeof reducer>;





