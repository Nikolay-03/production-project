import type {Meta, StoryObj} from '@storybook/react';
import {ThemeDecorator} from "shared/config/storybook/themeDecorator/ThemeDecorator";
import {Theme} from "app/providers/ThemeProvider";
import {Loader} from "shared/ui";

const meta = {
    title: 'shared/Loader',
    component: Loader,
    tags: ['autodocs'],
    args: {},
} satisfies Meta<typeof Loader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LoaderLight: Story = {
};
export const LoaderDark: Story = {
};
LoaderDark.decorators = [ThemeDecorator(Theme.DARK)]


