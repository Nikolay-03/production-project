import type {Meta, StoryObj} from '@storybook/react';
import {ThemeDecorator} from "shared/config/storybook/themeDecorator/ThemeDecorator";
import {Theme} from "app/providers/ThemeProvider";
import {StoreDecorator} from "shared/config";
import {ProfileCard} from "entities/Profile";
import {Country} from "entities/Country";
import {Currency} from "entities/Currency";
import avatar from 'shared/assets/test/avatar.png'

const meta = {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    decorators:[StoreDecorator({})],
    tags: ['autodocs'],
    args: {
        data:{
            username:'admin',
            firstname:'Name',
            lastname:'Surname',
            age:18,
            city:'LA',
            country: Country.USA,
            currency:Currency.USD,
            avatar
        }
    },
} satisfies Meta<typeof ProfileCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
};
export const Dark: Story = {
};
export const Error: Story = {
    args:{
        error:'Error'
    }
};
export const Loading: Story = {
    args:{
        isLoading:true
    }
};
Dark.decorators = [ThemeDecorator(Theme.DARK)]

