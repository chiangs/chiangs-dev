// Remix
import { Link } from '@remix-run/react';
// App
import type { WebAccessibleImage } from '~types';
// Copy
import { ME } from '~copy/profile';
// Assets
import linkedInUrl from '~public/icons/logo-linkedin.svg';
// Components
import { Avatar } from '../Avatar';
import type { ButtonProps } from '../Button';
import { Button } from '../Button';

export const Footer: React.FC<{ name: string; avatar: WebAccessibleImage }> = ({
    name,
    avatar,
}) => {
    const workLinkText = `Learn more about me and my work`;
    const privacyText = `Privacy and analytics tracking`;
    const sitemapText = `Sitemap`;
    const copyright = `copyright `;
    const copySymbol = <span>&copy;</span>;
    const now = new Date();
    const year = <span>&nbsp;{now.getFullYear()},&nbsp;</span>;
    const me = ME;
    const designFileUrl = `https://www.figma.com/file/d7dPcBdKZghY6jwQQWmHLo/Project?node-id=0%3A1`;
    const projectTaskBoardUrl = `https://chiangs.notion.site/Project-Tasks-Board-a46f64bb554d4f6b8f3ee840dae6c144`;
    const webVitalsUrl = `https://metronome.sh/shared/cl1fai62k0957esia8525vv85
`;
    const ctaButtonProps: ButtonProps = {
        variant: `primary`,
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
                <Avatar image={avatar} dimensions={55} />
                <Button {...ctaButtonProps}>{ctaButtonProps.name}</Button>
            </div>
            <ul className="list--footer--links list--nostyle">
                {footerLinks}
                <li className="footer--link">
                    <a
                        href={designFileUrl}
                        target="_blank"
                        rel="noreferrer noopener"
                        title="Figma design file"
                        aria-label="click to open new tab to the Figma design file"
                    >
                        Figma file
                    </a>
                </li>
                <li className="footer--link">
                    <a
                        href={projectTaskBoardUrl}
                        target="_blank"
                        rel="noreferrer noopener"
                        title="Notion project development tasks board"
                        aria-label="click to open new tab to my Notion file to see the status of development"
                    >
                        Development status
                    </a>
                </li>
                <li className="footer--link">
                    <a
                        href={webVitalsUrl}
                        target="_blank"
                        rel="noreferrer noopener"
                        title="Web core vitals dashboard via Metronome"
                        aria-label="click to open new tab to view the performance of this site"
                    >
                        Web core vitals
                    </a>
                </li>
            </ul>
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
