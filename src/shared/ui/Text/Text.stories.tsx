import type {Meta, StoryObj} from '@storybook/react';
import {Text, TextTheme} from "shared/ui";
import {ThemeDecorator} from "shared/config/storybook/themeDecorator/ThemeDecorator";
import {Theme} from "app/providers/ThemeProvider";

const meta = {
    title: 'shared/Text',
    component: Text,
    tags: ['autodocs'],
    args: {},
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Primary: Story = {
    args: {
        title: 'Text',
        text: 'description',
        theme: TextTheme.PRIMARY
    },
};
export const onlyTitle: Story = {
    args: {
        title: 'Text',
        theme: TextTheme.PRIMARY
    },
};
export const onlyText: Story = {
    args: {
        text: 'description',
        theme: TextTheme.PRIMARY
    },
};
export const Dark: Story = {
    args: {
        title: 'Text',
        text: 'description',
        theme: TextTheme.PRIMARY
    },
};
Dark.decorators = [ThemeDecorator(Theme.DARK)]
export const onlyTitleDark: Story = {
    args: {
        title: 'Text',
        theme: TextTheme.PRIMARY
    },
};
onlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)]
export const onlyTextDark: Story = {
    args: {
        text: 'description',
        theme: TextTheme.PRIMARY
    },
};
onlyTextDark.decorators = [ThemeDecorator(Theme.DARK)]
export const Error: Story = {
    args: {
        title: 'Text',
        text: 'description',
        theme: TextTheme.ERROR
    },
};
export const ErrorDark: Story = {
    args: {
        title: 'Text',
        text: 'description',
        theme: TextTheme.ERROR
    },
};
ErrorDark.decorators = [ThemeDecorator(Theme.DARK)]
export const errorOnlyTitleDark: Story = {
    args: {
        title: 'Text',
        theme: TextTheme.ERROR
    },
};
errorOnlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)]
export const errorOnlyTextDark: Story = {
    args: {
        text: 'description',
        theme: TextTheme.ERROR
    },
};
errorOnlyTextDark.decorators = [ThemeDecorator(Theme.DARK)]