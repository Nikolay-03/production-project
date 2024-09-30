import type {Meta, StoryObj} from '@storybook/react';
import {ThemeDecorator} from "shared/config/storybook/themeDecorator/ThemeDecorator";
import {Theme} from "app/providers/ThemeProvider";
import {PageLoader} from "widgets/PageLoader";

const meta = {
    title: 'widget/PageLoader',
    component: PageLoader,
    tags: ['autodocs'],
    args: {},
} satisfies Meta<typeof PageLoader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PageLoaderLight: Story = {
};
export const PageLoaderDark: Story = {
};
PageLoaderDark.decorators = [ThemeDecorator(Theme.DARK)]

