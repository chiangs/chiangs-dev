import React from 'react';
import '../app/styles/__normalize.css';
import '../app/styles/global.css';
import '../app/styles/themes/sunrise.css';
import '../app/styles/themes/sunset.css';
import '../app/styles/components/buttons.css';

const LIGHT = 'sunrise';
const DARK = 'sunset';
const DEFAULT_THEME = DARK;

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        expanded: true,
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
};

export const globalTypes = {
    theme: {
        name: 'Theme',
        description: 'Global theme for components',
        defaultValue: 'sunset',
        toolbar: {
            icon: 'circlehollow',
            // Array of plain string values or MenuItem shape (see below)
            items: ['sunset', 'sunrise'],
            // Property that specifies if the name of the item will be displayed
            showName: true,
            // Change title based on selected value
            dynamicTitle: true,
        },
    },
};

const updateTheme = (className) => {
    const body = document.getElementsByTagName('body')[0];
    if (body) {
        const classList = body.classList;
        const hasTheme = classList.contains(LIGHT) || classList.contains(DARK);
        if (!hasTheme) {
            return classList.add(DEFAULT_THEME);
        }
        if (className === LIGHT) {
            classList.add(LIGHT);
            classList.remove(DARK);
        } else {
            classList.add(DARK);
            classList.remove(LIGHT);
        }
    }
};

const withThemeProvider = (Story, context) => {
    const theme = context.globals.theme;
    updateTheme(theme);
    return <Story {...context} />;
};

export const decorators = [withThemeProvider];
