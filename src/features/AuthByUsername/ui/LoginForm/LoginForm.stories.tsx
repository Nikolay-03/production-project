import type {Meta, StoryObj} from '@storybook/react';
import {Theme} from "app/providers/ThemeProvider";
import LoginForm from "./LoginForm";
import {StoreDecorator, ThemeDecorator} from "shared/config";

const meta = {
    title: 'features/LoginForm',
    component: LoginForm,
    tags: ['autodocs'],
    args: {},
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
Primary.decorators = [StoreDecorator({loginForm:{username:'admin', password:'123', isLoading:false}})]
export const Dark: Story = {};
Dark.decorators = [
    StoreDecorator({loginForm:{username:'admin', password:'123', isLoading:false}}),
    ThemeDecorator(Theme.DARK)
]
export const withError: Story = {};
withError.decorators = [
    StoreDecorator({loginForm:{username:'admin', password:'123', isLoading:false, error:"Error"}}),
]
export const withErrorDark: Story = {};
withErrorDark.decorators = [
    StoreDecorator({loginForm:{username:'admin', password:'123', isLoading:false, error:"Error"}}),
    ThemeDecorator(Theme.DARK)
]
export const withLoading: Story = {};
withLoading.decorators = [
    StoreDecorator({loginForm:{username:'admin', password:'123', isLoading:true}}),
]
export const withLoadingDark: Story = {};
withLoadingDark.decorators = [
    StoreDecorator({loginForm:{username:'admin', password:'123', isLoading:true}}),
    ThemeDecorator(Theme.DARK)
]


