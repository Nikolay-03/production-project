import type {Meta, StoryObj} from '@storybook/react';
import {ThemeDecorator} from "shared/config/storybook/themeDecorator/ThemeDecorator";
import {Theme} from "app/providers/ThemeProvider";
import {Modal} from "./Modal";

const meta = {
    title: 'shared/Modal',
    component: Modal,
    tags: ['autodocs'],
    args: {
        children: 'Lorem ipsum dolor sit amet, ' +
            'consectetur adipisicing elit. A ' +
            'accusamus ad adipisci aliquid animi ' +
            'aspernatur aut cum delectus distinctio ' +
            'dolorem dolores esse eum eveniet id ' +
            'inventore iste magnam maiores neque nihil',
        isOpen:true
    },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
};
export const Dark: Story = {
    parameters: {
        chromatic: { disableSnapshot: false },
    },
};
Dark.decorators = [ThemeDecorator(Theme.DARK)]

