import {StoryFn} from "@storybook/react";
import {StateSchema, StoreProvider} from "app/providers/StoreProvider";

export const ReduxDecorator = (initialState?: Partial<StateSchema>) => (StoryComponent: StoryFn) => (
    <StoreProvider initialState={initialState as StateSchema}>
        <StoryComponent/>
    </StoreProvider>
);
