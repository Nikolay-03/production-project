import type {Meta, StoryObj} from '@storybook/react';
import {ThemeDecorator} from "shared/config/storybook/themeDecorator/ThemeDecorator";
import {Theme} from "app/providers/ThemeProvider";
import {PageError} from "widgets/PageError";

const meta = {
    title: 'widget/PageError',
    component: PageError,
    tags: ['autodocs'],
    args: {},
} satisfies Meta<typeof PageError>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PageErrorLight: Story = {
};
export const PageErrorDark: Story = {
};
PageErrorDark.decorators = [ThemeDecorator(Theme.DARK)]

