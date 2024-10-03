import type {Meta, StoryObj} from '@storybook/react';
import {ThemeDecorator} from "shared/config/storybook/themeDecorator/ThemeDecorator";
import {Theme} from "app/providers/ThemeProvider";
import {MainPage} from "pages/MainPage";
import {ReduxDecorator} from "shared/config/storybook/reduxDecorator/reduxDecorator";

const meta = {
    title: 'pages/MainPage',
    component: MainPage,
    decorators:[ReduxDecorator({counter:{value: 10}})],
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

