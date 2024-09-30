import type {Meta, StoryObj} from '@storybook/react';
import {fn} from '@storybook/test';
import {Button, ThemeButton} from "shared/ui";
import {ThemeDecorator} from "shared/config/storybook/themeDecorator/ThemeDecorator";
import {Theme} from "app/providers/ThemeProvider";

const meta = {
    title: 'shared/Button',
    component: Button,
    tags: ['autodocs'],
    // argTypes: {
    //     backgroundColor: { control: 'color' },
    // },
    args: {onClick: fn()},
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Primary: Story = {
    args: {
        children: 'Text',
    },
};
export const Clear: Story = {
    args: {
        children: 'Text',
        theme: ThemeButton.CLEAR
    },
};
export const ClearDark: Story = {
    args: {
        children: 'Text',
        theme: ThemeButton.CLEAR
    },
};
ClearDark.decorators = [ThemeDecorator(Theme.DARK)]
export const Outlined: Story = {
    args: {
        children: 'Text',
        theme: ThemeButton.OUTLINED
    },
};
export const OutlinedDark: Story = {
    args: {
        children: 'Text',
        theme: ThemeButton.OUTLINED
    },
};
OutlinedDark.decorators = [ThemeDecorator(Theme.DARK)]
