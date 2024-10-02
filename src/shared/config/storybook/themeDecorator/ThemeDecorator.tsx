import { StoryFn } from "@storybook/react"; // StoryFn лучше использовать для декораторов
import {Theme, ThemeProvider} from "app/providers/ThemeProvider";
import React from "react";

export const ThemeDecorator = (theme: Theme) => (StoryComponent: StoryFn) => (
    <ThemeProvider initialTheme={theme}>
        <div className={`app ${theme}`}>
            <StoryComponent/>
        </div>
    </ThemeProvider>
);
