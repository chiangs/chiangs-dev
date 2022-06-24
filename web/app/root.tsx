// React
import { useEffect } from 'react';
import type { LinksFunction, MetaFunction } from '@remix-run/node';
import { json, LoaderFunction } from '@remix-run/node';
// Metronome
import { MetronomeLinks } from '@metronome-sh/react';

import {
    Links,
    LiveReload,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
    useCatch,
    useLoaderData,
    useLocation,
} from '@remix-run/react';

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
// Content
import { COPY_ME } from '~copy/content.server';
import { sanity } from '~utils';
// App
import { AppUIState, ProfileState } from '~contexts';
import { Profile, Theme } from '~types';
import { useConsolePeekMsg } from '~hooks';
import { ErrorUI, Navigation, MobileMenu, Footer, SkipLink } from '~components';

// #region Server
type LoaderData = { me: Profile; gaTrackingId: string | undefined };

export const loader: LoaderFunction = async () => {
    const QUERIES: string = `{
        "me": ${COPY_ME},
    }`;
    // Sanity
    const content = await sanity.getClient().fetch(QUERIES);
    return json<LoaderData>({ me: content.me, gaTrackingId: process.env.GA_TRACKING_ID });
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

const GA = ({ trackingId }: { trackingId: string }): JSX.Element => (
    <>
        <script async src={`https://www.googletagmanager.com/gtag/js?id=${trackingId}`} />
        <script
            async
            id="gtag-init"
            dangerouslySetInnerHTML={{
                __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${trackingId}');
              `,
            }}
        />
    </>
);

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
            <MetronomeLinks />
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
    const { me, gaTrackingId } = useLoaderData<LoaderData>();
    const location = useLocation();
    useConsolePeekMsg(process.env.NODE_ENV);

    // GA pageview
    useEffect(() => {
        if (gaTrackingId?.length) {
            gtag.pageview(location.pathname, gaTrackingId);
        }
    }, [location, gaTrackingId]);

    // GA main script load
    const gtagScript =
        process.env.NODE_ENV === 'development' || !gaTrackingId ? null : (
            <GA trackingId={gaTrackingId} />
        );

    //  TODO: state, toggle, storage, dynamic add/remove
    const theme: Theme = 'sunset';

    return (
        <LazyMotion features={domAnimation} strict>
            <ProfileState updatedValues={me}>
                <AppUIState>
                    <Document theme={theme} gtagScript={gtagScript}>
                        <SkipLink />
                        {/* <header id="header" className="header">
                            <Navigation />
                        </header> */}
                        <main className="main" id="main">
                            <Outlet />
                        </main>
                        {/* <footer id="footer" className="footer">
                            <Footer name={me.fullName} avatar={me.avatarContact} />
                        </footer> */}
                        {/* TODO: separate the back filter and dropdown menu for better transition z then y using framer motion? */}
                        <MobileMenu />
                    </Document>
                </AppUIState>
            </ProfileState>
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
