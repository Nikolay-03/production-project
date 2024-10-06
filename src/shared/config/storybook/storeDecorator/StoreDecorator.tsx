import {StoryFn} from "@storybook/react";
import {StateSchema, StoreProvider} from "app/providers/StoreProvider";
import {ReducersMapObject} from "@reduxjs/toolkit";
import {loginReducer} from "features/AuthByUsername";

const defaultAsyncReducers:Partial<ReducersMapObject<StateSchema>> = {
    loginForm: loginReducer
}

export const StoreDecorator = (
    initialState: Partial<StateSchema>,
    asyncReducers?: Partial<ReducersMapObject<StateSchema>>
) => (StoryComponent: StoryFn) => (
    <StoreProvider initialState={initialState as StateSchema} asyncReducers={{...defaultAsyncReducers, ...asyncReducers}}>
        <StoryComponent/>
    </StoreProvider>
);
