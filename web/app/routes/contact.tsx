// Remix
import type { LinksFunction, LoaderFunction, MetaFunction } from '@remix-run/node';
import { useCatch, useLoaderData } from '@remix-run/react';
// Styles
import stylesUrl from '~styles/pages/contact.css';

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
        title: 'Example page',
        description: 'Route with error boundaries example.',
    };
};

// Loader
type LoaderData = null;

export const loader: LoaderFunction = async ({ request }) => {
    // loader logic
    const data: LoaderData = null;
    // #region error testing
    /**
     * ! Throw errors to test the bourndaries
     * Remove code in error testing region
     * when developing actual project
     */
    const uncaught = new Response('No random joke found', { status: 500 });
    const caught = new Response('No random joke found', { status: 404 });
    const testingErrors = false;
    const expected = true;
    if (testingErrors) {
        throw expected ? caught : uncaught;
    }
    // #endregion error testing
    return data;
};

export const CatchBoundary = () => {
    const caught = useCatch();
    if (caught.status === 404) {
        return (
            <div className="error-container">
                <p>Nothing to see here</p>
                <p>Container nav still works</p>
            </div>
        );
    }
    throw new Error(`Unexpected caught response with status: ${caught.status}`);
};

export const ErrorBoundary = ({ error }: { error: Error }) => {
    console.error(error);
    return (
        <div className="error-container">
            I did a whoopsies.
            <p>Container nav still works</p>
        </div>
    );
};

const Contact = () => {
    const data = useLoaderData<LoaderData>();
    return (
        <article className="container">
            <h1>Contact</h1>
        </article>
    );
};

export default Contact;
