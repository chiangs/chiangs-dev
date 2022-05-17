// Remix
import { LinksFunction } from "@remix-run/node";
import { ThrownResponse } from "@remix-run/react";
// Styles
import stylesUrl from './styles.css';

export const links: LinksFunction = () => {
    return [
        {
            rel: 'stylesheet',
            href: stylesUrl,
        },
    ];
};

interface Props {
    error?: Error;
    thrown?: ThrownResponse<number, any>;
}

export const ErrorUI: React.FC<Props> = ({ error, thrown }: Props) => {
    const unknownError = !error && !thrown;
    const unknownStatus = `???`;
    const unknownErrorMessage = `I have no idea what happened sorry! Try reloading or come back later.`;
    const title = unknownError ? unknownStatus : error ? error.name : thrown?.status;
    const message = unknownError ? unknownErrorMessage : error ? error.message : thrown?.statusText;
    return (
        <section className="container">
            <h1 className="title">{title}</h1>
            <pre>{message}</pre>
        </section>
    );
};
