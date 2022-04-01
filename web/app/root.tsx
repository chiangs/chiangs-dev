// React
import { useEffect } from 'react';
// Remix
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration, useCatch } from 'remix';
import type { MetaFunction, LinksFunction } from 'remix';
// FramerMotion
import { LazyMotion, domAnimation } from 'framer-motion';
// Styles
import normalizeStylesUrl from '~styles/__normalize.css';
import globalStylesUrl from '~styles/global.css';
import utilityClassesUrl from '~styles/utils/utils.css';
import sunsetStylesUrl from '~styles/themes/sunset.css';
import mobileMenuStylesUrl from '~styles/components/mobile-menu.css';
import buttonStylesUrl from '~styles/components/buttons.css';

// App
import { AppUIState } from '~contexts';
import { logPeekMessage } from '~utils';
import { Theme } from '~types';
// Components
import { ErrorUI, Navigation, MobileMenu, Footer, SkipLink } from '~components';

// TODO: Catch boundaries
// TODO: Update meta
// TODO: Remove transition for framer motion?
export const meta: MetaFunction = () => ({
    title: 'Stephen E. Chiang - UX Engineer',
    description:
        'A personal site to showcase my professional history, skill, and portal for contacting Stephen E. Chiang.',
});

export const links: LinksFunction = () => [
    {
        rel: 'stylesheet',
        href: normalizeStylesUrl,
    },
    {
        rel: 'stylesheet',
        href: globalStylesUrl,
    },
    {
        rel: 'stylesheet',
        href: utilityClassesUrl,
    },
    {
        rel: 'stylesheet',
        href: sunsetStylesUrl,
    },
    // {
    //     rel: 'stylesheet',
    //     href: sunriseStylesUrl,
    //     // media: '(prefers-color-scheme: light)',
    // },
    {
        rel: 'stylesheet',
        href: mobileMenuStylesUrl,
    },
    {
        rel: 'stylesheet',
        href: buttonStylesUrl,
    },
];

const Document = ({
    children,
    theme,
    title = `Stephen E. Chiang`,
}: {
    children: React.ReactNode;
    theme?: Theme;
    title?: string;
}): JSX.Element => (
    <html lang="en">
        <head>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width,initial-scale=1" />
            <Meta />
            <title>{title}</title>
            <link rel="icon" href="/favicon.ico" sizes="any" />
            <link rel="icon" type="image/svg+xml" href="/icon.svg" />
            <Links />
        </head>
        <body id="body" className={`body ${theme} mobile`}>
            {children}
            <ScrollRestoration />
            <Scripts />
            {process.env.NODE_ENV === 'development' && <LiveReload />}
        </body>
    </html>
);

const App = () => {
    //  TODO: state, toggle, storage, dynamic add/remove
    const theme: Theme = 'sunset';

    useEffect(() => {
        if (process.env.NODE_ENV === 'production') {
            console.clear();
            logPeekMessage();
        }
    }, []);

    return (
        <LazyMotion features={domAnimation} strict>
            <AppUIState>
                <Document theme={theme}>
                    <SkipLink />
                    <header id="header" className="header">
                        <Navigation />
                    </header>
                    <main className="main" id="main">
                        <Outlet />
                    </main>
                    <footer id="footer" className="footer">
                        <Footer />
                    </footer>
                    {/* TODO: separate the back filter and dropdown menu for better transition z then y using framer motion? */}
                    <MobileMenu />
                </Document>
            </AppUIState>
        </LazyMotion>
    );
};

/**
 * Error UI at app level for those that have status codes.
 */
export const CatchBoundary = () => {
    const caught = useCatch();
    return (
        <Document title={`${caught.status} ${caught.statusText}`}>
            <ErrorUI thrown={caught} />
        </Document>
    );
};

/**
 * Error UI for uncaught complete app error.
 */
export const ErrorBoundary = ({ error }: { error: Error }) => (
    <Document title="Uh-oh!">
        <ErrorUI error={error} />
    </Document>
);

export default App;
