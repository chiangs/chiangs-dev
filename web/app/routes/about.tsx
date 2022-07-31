// Remix
import type { LinksFunction, MetaFunction } from '@remix-run/node';

export const links: LinksFunction = () => {
    return [
        // {
        //     rel: 'stylesheet',
        //     href: stylesUrl,
        // },
    ];
};

export const meta: MetaFunction = () => {
    return {
        title: 'Example page',
        description: 'Route with error boundaries example.',
    };
};

const About = () => {
    // const data = useLoaderData<LoaderData>();
    return (
        <article className="container">
            <h1>About Stephen.</h1>
        </article>
    );
};

export default About;
