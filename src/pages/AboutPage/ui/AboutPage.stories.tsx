import type {Meta, StoryObj} from '@storybook/react';
import {ThemeDecorator} from "shared/config/storybook/themeDecorator/ThemeDecorator";
import {Theme} from "app/providers/ThemeProvider";
import {AboutPage} from "pages/AboutPage";
import {StoreDecorator} from "shared/config";

const meta = {
    title: 'pages/AboutPage',
    component: AboutPage,
    decorators:[StoreDecorator({counter:{value:10}})],
    tags: ['autodocs'],
    args: {},
} satisfies Meta<typeof AboutPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AboutPageLight: Story = {
};
export const AboutPageDark: Story = {
};
AboutPageDark.decorators = [ThemeDecorator(Theme.DARK)]

