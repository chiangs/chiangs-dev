// Remix
import { Link } from 'remix';
// Copy
import { ME } from '~copy/profile';
// Assets
import linkedInUrl from '~public/icons/logo-linkedin.svg';
// Components
import { Avatar } from '../Avatar';
import { ButtonCTA, ButtonCTAProps } from '../ButtonCTA';

export const Footer: React.FC = () => {
    const workLinkText = `Learn more about me and my work`;
    const privacyText = `Privacy and analytics tracking`;
    const sitemapText = `Sitemap`;
    const copyright = `copyright `;
    const copySymbol = <span>&copy;</span>;
    const now = new Date();
    const year = <span>&nbsp;{now.getFullYear()},&nbsp;</span>;
    const me = ME;
    const name = `${me.firstName} ${me.lastName}`;
    const ctaButtonProps: ButtonCTAProps = {
        name: `contact me`,
        type: `button`,
        clickHandler: () => null,
    };
    const footerLinks = [
        { path: '/work', label: workLinkText },
        { path: '/privacy', label: privacyText },
        { path: '', label: sitemapText },
    ].map((l) => (
        <li className="footer--link" key={l.path}>
            <Link to={l.path}>{l.label}</Link>
        </li>
    ));
    return (
        <div className="container">
            <div className="footer--cta">
                <Avatar variant="contact" dimensions={55} />
                <ButtonCTA {...ctaButtonProps}>{ctaButtonProps.name}</ButtonCTA>
            </div>
            <ul className="list--footer--links list--nostyle">{footerLinks}</ul>
            <div className="footer--misc">
                <p>
                    {copyright}
                    {copySymbol}
                    {year}
                    {name}
                </p>
                <a
                    className="link--image"
                    href={ME.linkedIn}
                    target="_blank"
                    rel="noreferrer noopener"
                    title="LinkedIn via new tab"
                    aria-label="click to open new tab to my LinkedIn profile"
                >
                    <img src={linkedInUrl} alt="LinkedIn icon" height="28" width="28" />
                </a>
            </div>
        </div>
    );
};
