import {StoryFn} from "@storybook/react"; // StoryFn лучше использовать для декораторов
import {Theme} from "app/providers/ThemeProvider";
import React from "react";
import {BrowserRouter} from "react-router-dom";

export const RouteDecorator = () => (StoryComponent: StoryFn) => (
    <BrowserRouter>
        <StoryComponent/>
    </BrowserRouter>
);
