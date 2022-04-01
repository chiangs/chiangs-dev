// Assets
import nextJSIconUrl from '~public/icons/logo-next.svg';
import remixIconUrl from '~public/icons/logo-remix.svg';
import reactIconUrl from '~public/icons/logo-react.svg';
import angularIconUrl from '~public/icons/logo-angular.svg';
import jsIconUrl from '~public/icons/logo-js.svg';
import tsIconUrl from '~public/icons/logo-ts.svg';
import gitIconUrl from '~public/icons/logo-git.svg';
import figmaIconUrl from '~public/icons/logo-figma.svg';
import framerIconUrl from '~public/icons/logo-framer.svg';

export const TechStackIcons: React.FC = () => {
    const iconUrls: { url: string; alt: string }[] = [
        { url: nextJSIconUrl, alt: `NextJS` },
        { url: remixIconUrl, alt: `Remix` },
        { url: reactIconUrl, alt: `React` },
        { url: angularIconUrl, alt: `Angular` },
        { url: jsIconUrl, alt: `JavaScript` },
        { url: tsIconUrl, alt: `TypeScript` },
        { url: gitIconUrl, alt: `Git` },
        { url: figmaIconUrl, alt: `Figma` },
        { url: framerIconUrl, alt: `Framer` },
    ];

    // TODO: dynamically set the width/height for breakpoint
    const listItems: JSX.Element[] = iconUrls.map((u, i) => (
        <li key={`techIcon${i}`}>
            <img src={u.url} alt={u.alt} height="12" width="12" />
        </li>
    ));

    return (
        <div className="list--tech--icons">
            <ul className="list--nostyle list--flat">{listItems}</ul>
        </div>
    );
};
