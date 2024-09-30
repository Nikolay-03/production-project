import type {Meta, StoryObj} from '@storybook/react';
import {ThemeDecorator} from "shared/config/storybook/themeDecorator/ThemeDecorator";
import {Theme} from "app/providers/ThemeProvider";
import {Sidebar} from "widgets/Sidebar";

const meta = {
    title: 'widget/Sidebar',
    component: Sidebar,
    tags: ['autodocs'],
    args: {},
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SidebarLight: Story = {
};
export const SidebarDark: Story = {
};
SidebarDark.decorators = [ThemeDecorator(Theme.DARK)]

