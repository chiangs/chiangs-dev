// Remix
import { LinksFunction, MetaFunction, Outlet } from 'remix';
// Styles
import stylesUrl from '~styles/pages/work.css';

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

const Work = () => {
    // const data = useLoaderData<LoaderData>();
    return (
        <article className="container">
            <Outlet />
        </article>
    );
};

export default Work;
