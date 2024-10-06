import type {Meta, StoryObj} from '@storybook/react';
import {ThemeDecorator} from "shared/config/storybook/themeDecorator/ThemeDecorator";
import {Theme} from "app/providers/ThemeProvider";
import {Navbar} from "widgets/Navbar";
import {StoreDecorator} from "shared/config";

const meta = {
    title: 'widget/Navbar',
    component: Navbar,
    tags: ['autodocs'],
    decorators:[StoreDecorator({})],
    args: {},
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NavbarLight: Story = {
};
export const NavbarDark: Story = {
};
NavbarDark.decorators = [ThemeDecorator(Theme.DARK),]

