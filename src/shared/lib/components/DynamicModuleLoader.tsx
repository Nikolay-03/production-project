import {FC, ReactNode, useEffect} from 'react';
import {Reducer} from "@reduxjs/toolkit";
import {useDispatch, useStore} from "react-redux";
import {ReduxStoreWithManager} from "app/providers/StoreProvider";
import {StateSchemaKey} from "app/providers/StoreProvider/config/StateSchema";

export type ReducersList = {
    [name in StateSchemaKey]?: Reducer
}
interface DynamicModuleLoaderProps{
    className?:string;
    children:ReactNode
    reducers: ReducersList;
    removeAfterUnmount?: boolean;
}

export const DynamicModuleLoader:FC<DynamicModuleLoaderProps> = (props) => {
    const {
        children,
        reducers,
        removeAfterUnmount
    } = props
    const store = useStore() as ReduxStoreWithManager
    const dispatch = useDispatch()
    useEffect(() => {
        Object.entries(reducers).forEach(([name,reducer]) => {
            store.reducerManager.add(name as StateSchemaKey, reducer)
            dispatch({type: `@INIT ${name} reducer`})
        })
        return () => {
            if(removeAfterUnmount){
                Object.entries(reducers).forEach(([name]) => {
                    store.reducerManager.remove(name as StateSchemaKey)
                    dispatch({type: `@DELETE ${name} reducer`})
                })
            }
        }
    }, []);
    return (
        <>
            {children}
        </>
    );
};

