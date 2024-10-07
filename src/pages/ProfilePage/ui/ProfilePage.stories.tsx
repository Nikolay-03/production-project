import type {Meta, StoryObj} from '@storybook/react';
import {ThemeDecorator} from "shared/config/storybook/themeDecorator/ThemeDecorator";
import {Theme} from "app/providers/ThemeProvider";
import {StoreDecorator} from "shared/config";
import ProfilePage from "./ProfilePage";

const meta = {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    decorators:[StoreDecorator({})],
    tags: ['autodocs'],
    args: {},
} satisfies Meta<typeof ProfilePage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ProfilePageLight: Story = {
};
export const ProfilePageDark: Story = {
};
ProfilePageDark.decorators = [ThemeDecorator(Theme.DARK)]

