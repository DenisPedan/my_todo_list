import {TypedReducer} from "../types/state";
import {TypedUseSelectorHook, useSelector} from "react-redux";

export const useTypedSelector: TypedUseSelectorHook<TypedReducer> = useSelector;
