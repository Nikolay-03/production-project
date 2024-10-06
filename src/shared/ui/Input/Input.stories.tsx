import type {Meta, StoryObj} from '@storybook/react';
import {Input} from "shared/ui";
import {ThemeDecorator} from "shared/config/storybook/themeDecorator/ThemeDecorator";
import {Theme} from "app/providers/ThemeProvider";

const meta = {
    title: 'shared/Input',
    component: Input,
    tags: ['autodocs'],
    args: {},
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Primary: Story = {
    args: {
        placeholder:'Введите текст'
    },
};
export const Dark: Story = {
    args: {
        placeholder:'Введите текст'
    },
};
Dark.decorators = [ThemeDecorator(Theme.DARK)]
