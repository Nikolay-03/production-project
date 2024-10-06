import type {Preview} from "@storybook/react";
import 'app/styles/index.scss';
import {ThemeDecorator} from "shared/config/storybook/themeDecorator/ThemeDecorator";
import {Theme} from "app/providers/ThemeProvider";
import {RouteDecorator} from "shared/config/storybook/routeDecorator/RuteDecorator";

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
        RouteDecorator(),
        ThemeDecorator(Theme.LIGHT)
    ]
};

export default preview;
