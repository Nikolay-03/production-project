import {FC, ReactNode} from 'react';
import {Provider} from "react-redux";
import {createReduxStore} from "app/providers/StoreProvider";
import {StateSchema} from "../config/StateSchema";
import {ReducersMapObject} from "@reduxjs/toolkit";

interface StoreProviderProps{
    children:ReactNode;
    initialState?:StateSchema;
    asyncReducers?: Partial<ReducersMapObject<StateSchema>>;
}

export const StoreProvider:FC<StoreProviderProps> = (props) => {
    const {
        children,
        initialState,
        asyncReducers
    } = props
    const store = createReduxStore(initialState, asyncReducers)
    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};

