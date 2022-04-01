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
                    <p>At least, not yet.</p>
                    <p>
                        I do plan to implement analytics to better understand usage and
                        effectiveness of various features I've implemented. Additionally, I may
                        implement storing your preferred theme setting to your browser.
                    </p>
                    <p>
                        None of these are personally identifiable, except possibly your IP address.
                    </p>
                    <p>
                        No matter what, your information, if any is collected by this site will
                        never be sold or given to anyone else.
                    </p>
                </div>
            </section>
        </article>
    );
};

export default PrivacyPage;
