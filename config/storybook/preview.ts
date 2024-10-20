import type {Preview} from "@storybook/react";
import 'app/styles/index.scss';
import {ThemeDecorator} from "shared/config/storybook/themeDecorator/ThemeDecorator";
import {Theme} from "app/providers/ThemeProvider";
import {RouteDecorator} from "shared/config";

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i
            }
        }
    },
    decorators: [
        ThemeDecorator(Theme.LIGHT),
        RouteDecorator(),
    ]
};

export default preview;
