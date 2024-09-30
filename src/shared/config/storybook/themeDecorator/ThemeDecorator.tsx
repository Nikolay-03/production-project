import { StoryFn } from "@storybook/react"; // StoryFn лучше использовать для декораторов
import { Theme } from "app/providers/ThemeProvider";
import React from "react";

export const ThemeDecorator = (theme: Theme) => (StoryComponent: StoryFn) => (
    <div className={`app ${theme}`}>
        <StoryComponent />
    </div>
);
