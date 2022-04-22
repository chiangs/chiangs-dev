// React
import { useEffect } from 'react';
// Remix
import {
    json,
    Links,
    LiveReload,
    LoaderFunction,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
    useCatch,
    useLoaderData,
    useLocation,
} from 'remix';
import type { MetaFunction, LinksFunction } from 'remix';
// Google
import { gtag } from '~utils';

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

// #region Server
type LoaderData = { gaTrackingId: string | undefined };

export const loader: LoaderFunction = async () => {
    return json<LoaderData>({ gaTrackingId: process.env.GA_TRACKING_ID });
};
// #endregion Server

// #region Client
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
    gtagScript,
    theme,
    title = `Stephen E. Chiang`,
}: {
    children: React.ReactNode;
    gtagScript?: JSX.Element | null;
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
            {gtagScript}
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
    const location = useLocation();
    const { gaTrackingId } = useLoaderData<LoaderData>();

    const gtagLoad =
        process.env.NODE_ENV === 'development' || !gaTrackingId ? null : (
            <>
                <script async src={`https://www.googletagmanager.com/gtag/js?id=${gaTrackingId}`} />
                <script
                    async
                    id="gtag-init"
                    dangerouslySetInnerHTML={{
                        __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaTrackingId}', {
                  page_path: window.location.pathname,
                });
              `,
                    }}
                />
            </>
        );

    useEffect(() => {
        if (process.env.NODE_ENV === 'production') {
            console.clear();
            logPeekMessage();
        }
    }, []);

    useEffect(() => {
        if (process.env.NODE_ENV === 'production') {
            gtag.pageview(location.pathname);
        }
    }, [location]);

    return (
        <LazyMotion features={domAnimation} strict>
            <AppUIState>
                <Document theme={theme} gtagScript={gtagLoad}>
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
// #endregion Client
