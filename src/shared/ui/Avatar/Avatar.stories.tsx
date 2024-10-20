import type {Meta, StoryObj} from '@storybook/react';
import {Avatar} from "shared/ui";
import MockAvatar from '../../assets/test/avatar.png'
const meta = {
    title: 'shared/Avatar',
    component: Avatar,
    tags: ['autodocs'],
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        src:MockAvatar,
        alt:'avatar'
    }
};
export const Small: Story = {
    args: {
        size:50,
        src:MockAvatar,
        alt:'avatar'
    }
};
