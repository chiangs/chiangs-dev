// Remix
import { LinksFunction, MetaFunction } from "@remix-run/node";

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

const Uses = () => {
    // const data = useLoaderData<LoaderData>();
    return (
        <article className="container">
            <h1>Want to know more about this site?</h1>
        </article>
    );
};

export default Uses;
