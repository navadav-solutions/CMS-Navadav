/*
 * Navadav Headless CMS
 *
 * @license
 * Copyright (c) NAVADAV. Todos los derechos reservados.
 */

import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { LongHoverDirective } from '@app/framework';

export default {
    title: 'Framework/LongHover',
    component: LongHoverDirective,
    argTypes: {
        selector: {
            control: 'text',
        },
        hover: {
            action: 'hover',
        },
        cancelled: {
            action: 'cancelled',
        },
    },
    render: args => ({
        props: args,
        template: `
            <div (sqxLongHover)="hover()" (longHoverCancelled)="cancelled()" [longHoverSelector]="selector">
                <div style="border: 1px solid #eee; padding: 100px">
                    <button class="btn btn-primary">Button</button>
                </div>
            </div>
        `,
    }),
    decorators: [
        moduleMetadata({
            imports: [
            ],
        }),
    ],
} as Meta;

type Story = StoryObj<LongHoverDirective>;

export const Default: Story = {
    args: {
        selector: '',
    },
};

export const Selector: Story = {
    args: {
        selector: 'button',
    },
};