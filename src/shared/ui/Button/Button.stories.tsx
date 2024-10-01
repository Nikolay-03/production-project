import type {Meta, StoryObj} from '@storybook/react';
import {fn} from '@storybook/test';
import {Button, ButtonTheme} from "shared/ui";
import {ThemeDecorator} from "shared/config/storybook/themeDecorator/ThemeDecorator";
import {Theme} from "app/providers/ThemeProvider";
import {ButtonSize} from "shared/ui/Button/Button";

const meta = {
    title: 'shared/Button',
    component: Button,
    tags: ['autodocs'],
    // argTypes: {
    //     backgroundColor: { control: 'color' },
    // },
    args: {onClick: fn()},
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Primary: Story = {
    args: {
        children: 'Text',
    },
};
export const Clear: Story = {
    args: {
        children: 'Text',
        theme: ButtonTheme.CLEAR
    },
};
export const ClearDark: Story = {
    args: {
        children: 'Text',
        theme: ButtonTheme.CLEAR
    },
};
ClearDark.decorators = [ThemeDecorator(Theme.DARK)]
export const Outlined: Story = {
    args: {
        children: 'Text',
        theme: ButtonTheme.OUTLINED
    },
};
export const OutlinedDark: Story = {
    args: {
        children: 'Text',
        theme: ButtonTheme.OUTLINED
    },
};
OutlinedDark.decorators = [ThemeDecorator(Theme.DARK)]
export const Background: Story = {
    args: {
        children: 'Text',
        theme: ButtonTheme.BACKGROUND
    },
};
export const BackgroundDark: Story = {
    args: {
        children: 'Text',
        theme: ButtonTheme.BACKGROUND
    },
};
BackgroundDark.decorators = [ThemeDecorator(Theme.DARK)]
export const BackgroundInverted: Story = {
    args: {
        children: 'Text',
        theme: ButtonTheme.BACKGROUND_INVERTED
    },
};
export const BackgroundInvertedDark: Story = {
    args: {
        children: 'Text',
        theme: ButtonTheme.BACKGROUND_INVERTED
    },
};
BackgroundInvertedDark.decorators = [ThemeDecorator(Theme.DARK)]
export const Square: Story = {
    args: {
        children: '>',
        theme: ButtonTheme.BACKGROUND_INVERTED,
        square:true,
    },
};

export const SquareSizeL: Story = {
    args: {
        children: '>',
        theme: ButtonTheme.BACKGROUND_INVERTED,
        square:true,
        size:ButtonSize.L
    },
};
export const SquareSizeXL: Story = {
    args: {
        children: '>',
        theme: ButtonTheme.BACKGROUND_INVERTED,
        square:true,
        size:ButtonSize.XL
    },
};
