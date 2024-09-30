import type {Meta, StoryObj} from '@storybook/react';
import {ThemeDecorator} from "shared/config/storybook/themeDecorator/ThemeDecorator";
import {Theme} from "app/providers/ThemeProvider";
import {AppLink, AppLinkTheme} from "shared/ui";

const meta = {
    title: 'shared/AppLink',
    component: AppLink,
    tags: ['autodocs'],
    args: {
        children: 'Link',
        to:'/'
    },
} satisfies Meta<typeof AppLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AppLinkPrimaryLight: Story = {
    args:{
        theme:AppLinkTheme.PRIMARY
    }
};
export const AppLinkPrimaryDark: Story = {
    args:{
        theme:AppLinkTheme.PRIMARY
    }
};
AppLinkPrimaryDark.decorators = [ThemeDecorator(Theme.DARK)]
export const AppLinkSecondaryLight: Story = {
    args:{
        theme:AppLinkTheme.SECONDARY
    }
};
export const AppLinkSecondaryDark: Story = {
    args:{
        theme:AppLinkTheme.SECONDARY
    }
};
AppLinkSecondaryDark.decorators = [ThemeDecorator(Theme.DARK)]

