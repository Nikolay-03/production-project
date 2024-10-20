import {CounterSchema} from "entities/Counter/model/types/counterSchema";
import {UserSchema} from "entities/User";
import {LoginSchema} from "features/AuthByUsername";
import {EnhancedStore, Reducer, ReducersMapObject, UnknownAction} from "@reduxjs/toolkit";
import {ProfileSchema} from "entities/Profile";
import {AxiosInstance} from "axios";
import type {To} from "@remix-run/router";
import type {NavigateOptions} from "react-router/dist/lib/context";

export interface StateSchema {
    counter: CounterSchema
    user: UserSchema
    loginForm?: LoginSchema
    profile?: ProfileSchema
}

export type StateSchemaKey = keyof StateSchema

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>;
    reduce: (state: StateSchema, action: UnknownAction) => StateSchema;
    add: (key: StateSchemaKey, reducer: Reducer) => void;
    remove: (key: StateSchemaKey) => void;

}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
    reducerManager: ReducerManager
}

export interface ThunkExtraArg {
    api: AxiosInstance,
    navigate?: (to: To, options?: NavigateOptions) => void
}
export interface ThunkConfig<T>{
    rejectValue:T,
    extra:ThunkExtraArg,
    state:StateSchema,
}