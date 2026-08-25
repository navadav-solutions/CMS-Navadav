/*
 * Navadav Headless CMS
 *
 * @license
 * Copyright (c) NAVADAV. Todos los derechos reservados.
 */

import { Preview } from "@storybook/angular";
import "./../src/styles.scss";

const preview: Preview = {
    parameters: {
        actions: {
            argTypesRegex: "^on[A-Z].*",
        },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
        docs: {
            inlineStories: true,
        },
    },
};

export default preview;
