// React
import React from 'react';
// Remix
import { LinksFunction, MetaFunction } from 'remix';
// Styles
import stylesUrl from '~styles/pages/privacy.css';

export const links: LinksFunction = () => {
    return [
        {
            rel: 'stylesheet',
            href: stylesUrl,
        },
    ];
};

export const meta: MetaFunction = () => {
    return {
        title: 'Privacy & analytics tracking.',
        description:
            'Information on how and what this site tracks, the purpose and how the information is used.',
    };
};

const PrivacyPage: React.FC = () => {
    const PAGE_ID = `privacy`;
    return (
        <article className="page" id={PAGE_ID}>
            <section className="container">
                <div className="content">
                    <h1>Is this site tracking you?</h1>
                    <h2 className="highlight">No.</h2>
                    <p>At least, not exactly.</p>
                    <p>
                        This app is connected to Metronome to monitor real-time Web Core Vitals to
                        help me understand performance, debug, and build a more performant
                        experience.
                    </p>
                    <p>
                        I also use Google Analytics 4 to track page view and events to better
                        understand what a user wants and expects to do to help me build a better
                        experience that provides a more logical flow and grouping of content.
                    </p>
                    <p>
                        Both keep the user anonymous. In other woreds, none of these are personally
                        identifiable.
                    </p>
                    <p>
                        Additionally, Nothing is being stored on your browser (such as cookies and
                        tokens). I may implement storing your preferred theme setting to your
                        browser in the future.
                    </p>
                    <p>
                        No matter what, your information, if any, collected by this site will never
                        be sold or given to anyone else.
                    </p>
                </div>
            </section>
        </article>
    );
};

export default PrivacyPage;
