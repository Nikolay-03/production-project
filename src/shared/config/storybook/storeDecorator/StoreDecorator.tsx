import {StoryFn} from "@storybook/react";
import {StateSchema, StoreProvider} from "app/providers/StoreProvider";
import {ReducersMapObject} from "@reduxjs/toolkit";
import {loginReducer} from "features/AuthByUsername";
import {ReducersList} from "shared/lib/components/DynamicModuleLoader";

const defaultAsyncReducers:ReducersList = {
    loginForm: loginReducer,
}

export const StoreDecorator = (
    initialState: DeepPartial<StateSchema>,
    asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
) => (StoryComponent: StoryFn) => (
    <StoreProvider initialState={initialState as StateSchema} asyncReducers={{...defaultAsyncReducers, ...asyncReducers}}>
        <StoryComponent/>
    </StoreProvider>
);
