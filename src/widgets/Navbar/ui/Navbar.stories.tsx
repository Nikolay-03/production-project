import type {Meta, StoryObj} from '@storybook/react';
import {ThemeDecorator} from "shared/config/storybook/themeDecorator/ThemeDecorator";
import {Theme} from "app/providers/ThemeProvider";
import {Navbar} from "widgets/Navbar";

const meta = {
    title: 'widget/Navbar',
    component: Navbar,
    tags: ['autodocs'],
    args: {},
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NavbarLight: Story = {
};
export const NavbarDark: Story = {
};
NavbarDark.decorators = [ThemeDecorator(Theme.DARK)]

