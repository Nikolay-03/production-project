import type {Meta, StoryObj} from '@storybook/react';
import {ThemeDecorator} from "shared/config/storybook/themeDecorator/ThemeDecorator";
import {Theme} from "app/providers/ThemeProvider";
import {StoreDecorator} from "shared/config";
import ProfilePage from "./ProfilePage";
import {Country} from "entities/Country";
import {Currency} from "entities/Currency";
import avatar from "shared/assets/test/avatar.png";

const meta = {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    decorators:[StoreDecorator({
        profile:{
            readonly:true,
            isLoading:false,
            form:{
                username:'admin',
                firstname:'Name',
                lastname:'Surname',
                age:18,
                city:'LA',
                country: Country.USA,
                currency:Currency.USD,
                avatar
            }
        }
    })],
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

