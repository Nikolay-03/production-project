import {configureStore, ReducersMapObject} from '@reduxjs/toolkit'
import {StateSchema} from "./StateSchema";
import {counterReducer} from "entities/Counter";
import {userReducer} from "entities/User";
import {createReducerManager} from "./ReducerManager";
import {$api} from "shared/api";
import type {To} from "@remix-run/router";
import type {NavigateOptions} from "react-router/dist/lib/context";

export const createReduxStore = (
    initialState?: StateSchema,
    asyncReducers?: Partial<ReducersMapObject<StateSchema>>,
    navigate?: (to: To, options?: NavigateOptions) => void
) =>
{
    const rootReducer: ReducersMapObject<StateSchema> = {
        ...asyncReducers,
        counter: counterReducer,
        user: userReducer,
    }
    const reducerManager = createReducerManager(rootReducer);
    const store = configureStore<StateSchema>({
        reducer: reducerManager.reduce,
        preloadedState: initialState,
        middleware: getDefaultMiddleware => getDefaultMiddleware({
            thunk: {
                extraArgument: {
                    api: $api,
                    navigate
                }
            }
        })
    })
    // @ts-ignore
    store.reducerManager = reducerManager;
    return store
}
export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
