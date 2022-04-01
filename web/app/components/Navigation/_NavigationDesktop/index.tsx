// Remix
import { Link, NavLink, useLocation } from 'remix';
// Types
import { RouteLink } from '~types';
// Assets
import logoSunriseUrl from '~public/images/logo-sunrise.svg';
import logoSunsetUrl from '~public/images/logo-sunset.svg';

const NavigationDesktop: React.FC = () => {
    const { pathname } = useLocation();

    console.log('🚀 ~ file: index.tsx ~ line 11 ~ location', pathname);
    const COMPONENT_ID = 'nav-desktop';
    const pages: RouteLink[] = [
        {
            name: `Home`,
            path: `/`,
        },
        {
            name: `Work`,
            path: `/work`,
        },
        {
            name: `Uses`,
            path: `/uses`,
        },
        {
            name: `About Stephen`,
            path: `/about`,
        },
        {
            name: `About this site`,
            path: `/about-site`,
        },
        {
            name: `Contact`,
            path: `/contact`,
        },
    ];
    const pageLinks = pages.map((p) => (
        <NavLink to={p.path} prefetch="intent" key={p.name}>
            {p.name}
        </NavLink>
    ));
    return (
        <nav id={COMPONENT_ID} className="nav--desktop">
            <Link className="link--image" to="/">
                <img
                    src={logoSunsetUrl}
                    alt="stephen chiang, web & ux developer"
                    height="100"
                    width="61"
                />
            </Link>
            <ul className="list--links">{pageLinks}</ul>
        </nav>
    );
};

export default NavigationDesktop;
