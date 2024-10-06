import {configureStore, ReducersMapObject} from '@reduxjs/toolkit'
import {ReduxStoreWithManager, StateSchema} from "./StateSchema";
import {counterReducer} from "entities/Counter";
import {userReducer} from "entities/User";
import {loginReducer} from "features/AuthByUsername";
import {createReducerManager} from "./ReducerManager";

export const createReduxStore = (initialState?: StateSchema) => {
    const rootReducer: ReducersMapObject<StateSchema> = {
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
