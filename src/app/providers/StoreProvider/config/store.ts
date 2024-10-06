import {configureStore, ReducersMapObject} from '@reduxjs/toolkit'
import {StateSchema} from "./StateSchema";
import {counterReducer} from "entities/Counter";
import {userReducer} from "entities/User";
import {createReducerManager} from "./ReducerManager";

export const createReduxStore = (initialState?: StateSchema,asyncReducers?: Partial<ReducersMapObject<StateSchema>>) => {
    const rootReducer: ReducersMapObject<StateSchema> = {
        ...asyncReducers,
        counter: counterReducer,
        user: userReducer,
    }
    const reducerManager = createReducerManager(rootReducer);
    const store = configureStore<StateSchema>({
        reducer: reducerManager.reduce,
        preloadedState: initialState
    })
    // @ts-ignore
    store.reducerManager = reducerManager;
    return store
}
export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
