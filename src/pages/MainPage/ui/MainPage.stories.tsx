import type {Meta, StoryObj} from '@storybook/react';
import {ThemeDecorator} from "shared/config/storybook/themeDecorator/ThemeDecorator";
import {Theme} from "app/providers/ThemeProvider";
import {MainPage} from "pages/MainPage";

const meta = {
    title: 'pages/MainPage',
    component: MainPage,
    tags: ['autodocs'],
    args: {},
} satisfies Meta<typeof MainPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MainPageLight: Story = {
};
export const MainPageDark: Story = {
};
MainPageDark.decorators = [ThemeDecorator(Theme.DARK)]

