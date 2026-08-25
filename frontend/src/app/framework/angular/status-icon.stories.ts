/*
 * Navadav Headless CMS
 *
 * @license
 * Copyright (c) NAVADAV. Todos los derechos reservados.
 */

import { Meta, StoryObj } from '@storybook/angular';
import { StatusIconComponent } from '@app/framework';

export default {
    title: 'Framework/StatusIcon',
    component: StatusIconComponent,
    argTypes: {
        status: {
            control: 'select',
            options: [
                'Failed',
                'Success',
                'Completed',
                'Pending',
            ],
        },
        statusText: {
            control: 'text',
        },
        size: {
            control: 'select',
            options: [
                'sm',
                'md',
                'lg',
            ],
        },
    },
} as Meta;

type Story = StoryObj<StatusIconComponent>;

export const Success: Story = {
    args: {
        status: 'Success',
    },
};

export const Completed: Story = {
    args: {
        status: 'Completed',
    },
};

export const Failed: Story = {
    args: {
        status: 'Failed',
    },
};

export const Pending: Story = {
    args: {
        status: 'Pending',
    },
};

export const Started: Story = {
    args: {
        status: 'Started',
    },
};

export const SizeSm: Story = {
    args: {
        size: 'sm',
    },
};

export const SizeLg: Story = {
    args: {
        size: 'lg',
    },
};