import {FC, ReactNode} from 'react';
import {Provider} from "react-redux";
import {createReduxStore} from "app/providers/StoreProvider";
import {StateSchema} from "../config/StateSchema";
import {ReducersMapObject} from "@reduxjs/toolkit";
import { useNavigate } from 'react-router-dom';

interface StoreProviderProps{
    children:ReactNode;
    initialState?:StateSchema;
    asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>;
}

export const StoreProvider:FC<StoreProviderProps> = (props) => {
    const {
        children,
        initialState,
        asyncReducers
    } = props
    const navigate = useNavigate()
    const store = createReduxStore(
        initialState,
        asyncReducers as ReducersMapObject<StateSchema>,
        navigate)
    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};

